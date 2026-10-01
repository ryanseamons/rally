// Generates Rally's seven Lincoln–Douglas example readings with Inworld TTS on fal.
// Reads the stage scripts from Rally.js, writes MP3s matching the originals
// (24 kHz mono, 96 kbps, about -19 LUFS) and prints the JSON Rally.js needs.
// Needs a fal.ai key in ~/.config/claude-agents/.env (FAL_KEY=...); it is never printed or stored here.
//
//   node scripts/ld-tts.mjs src/Rally.js public/audio
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const [rallyJs, outDir] = process.argv.slice(2);
const only = (process.argv.find((a) => a.startsWith("--only=")) || "").slice(7).split(",").filter(Boolean).map(Number);
const env = fs.readFileSync(path.join(os.homedir(), ".config/claude-agents/.env"), "utf8");
const KEY = (env.match(/^FAL_KEY=(.*)$/m) || [])[1]?.replace(/^['"]|['"]$/g, "");
if (!KEY) throw new Error("FAL_KEY missing");

const VOICES = { Aff: "Kayla (en)", Neg: "Ethan (en)" };
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ld-tts-"));

const src = fs.readFileSync(rallyJs, "utf8");
const block = src.slice(src.indexOf("zE = ["), src.indexOf("BE = ["));
const stages = [...block.matchAll(/side: `(Aff|Neg)`,\s*kind: `(speech|cx)`,[\s\S]*?script: `([^`]*)`/g)].map((m) => ({
  side: m[1],
  kind: m[2],
  script: m[3],
}));
if (stages.length !== 7) throw new Error(`expected 7 stages, found ${stages.length}`);

async function tts(text, voice) {
  const res = await fetch("https://fal.run/fal-ai/inworld-tts", {
    method: "POST",
    headers: { Authorization: `Key ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice }),
  });
  if (!res.ok) throw new Error(`tts ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const out = await res.json();
  const buf = Buffer.from(await (await fetch(out.audio.url)).arrayBuffer());
  const file = path.join(tmp, `${crypto.randomUUID()}.audio`);
  fs.writeFileSync(file, buf);
  return file;
}

const ff = (...args) => execFileSync("ffmpeg", ["-v", "error", "-y", ...args]);
const results = [];
let chars = 0;
for (const [i, stage] of stages.entries()) {
  if (only.length && !only.includes(i + 1)) continue;
  const parts = [];
  if (stage.kind === "cx") {
    for (const line of stage.script.split("\n")) {
      const m = line.match(/^(AFF|NEG):\s*(.*)$/);
      const voice = m[1] === "AFF" ? VOICES.Aff : VOICES.Neg;
      chars += m[2].length;
      parts.push(await tts(m[2], voice));
    }
  } else {
    chars += stage.script.length;
    parts.push(await tts(stage.script, VOICES[stage.side]));
  }
  // Normalise each part to WAV, join with 0.45 s pauses, then loudness-match and encode.
  const wavs = parts.map((p, j) => {
    const w = path.join(tmp, `s${i}-${j}.wav`);
    ff("-i", p, "-ar", "24000", "-ac", "1", w);
    return w;
  });
  const gap = path.join(tmp, "gap.wav");
  ff("-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "0.45", gap);
  const list = path.join(tmp, `list${i}.txt`);
  fs.writeFileSync(list, wavs.flatMap((w, j) => (j ? [gap, w] : [w])).map((w) => `file '${w}'`).join("\n"));
  const joined = path.join(tmp, `joined${i}.wav`);
  ff("-f", "concat", "-safe", "0", "-i", list, "-c", "copy", joined);
  const mp3 = path.join(tmp, `ld-${i + 1}.mp3`);
  ff("-i", joined, "-af", "loudnorm=I=-19:TP=-2:LRA=11", "-ar", "24000", "-ac", "1", "-b:a", "96k", mp3);
  const bytes = fs.readFileSync(mp3);
  const name = `ld-${i + 1}-${crypto.createHash("sha256").update(bytes).digest("hex").slice(0, 12)}.mp3`;
  fs.copyFileSync(mp3, path.join(outDir, name));
  const duration = Number(
    execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]).toString(),
  );
  results.push({
    stage: i + 1,
    src: `/audio/${name}`,
    duration: Math.round(duration),
    sourceHash: crypto.createHash("sha256").update(stage.script).digest("hex"),
    voices: stage.kind === "cx" ? { Aff: "Kayla", Neg: "Ethan" } : { [stage.side]: stage.side === "Aff" ? "Kayla" : "Ethan" },
  });
  console.error(`stage ${i + 1}: ${name} ${duration.toFixed(1)}s`);
}
console.error(`characters: ${chars} (~$${((chars / 1000) * 0.01).toFixed(3)})`);
console.log(JSON.stringify(results, null, 2));

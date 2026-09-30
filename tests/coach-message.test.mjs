import test from "node:test";
import assert from "node:assert/strict";
import { buildCoachMessage, isEmail, mailtoHref } from "../src/coach-message.mjs";
import { FORMATS, readTimerSettings, withOverrides } from "../src/round-formats.mjs";

const entry = {
  id: "a",
  date: "2026-09-29T18:00:00.000Z",
  topic: "Is practice more important than talent?",
  judge: "Me",
  keep: "Clear first example",
  next: "Pause before my last point",
  ratings: { Clarity: "Good" },
};

test("coach message carries the reflection and no storage claims beyond Rally", () => {
  const { subject, body } = buildCoachMessage(entry);
  assert.equal(subject, "Rally practice: Is practice more important than talent?");
  assert.match(body, /Keep doing: Clear first example/);
  assert.match(body, /Try next: Pause before my last point/);
  assert.match(body, /- Clarity: Good/);
  assert.match(body, /Rally does not store this message/);
});

test("empty notes read as no note", () => {
  const { body } = buildCoachMessage({ ...entry, keep: " ", next: "", ratings: {} });
  assert.match(body, /Keep doing: \(no note\)/);
  assert.doesNotMatch(body, /Self-check/);
});

test("mailto link encodes the message and only includes a valid address", () => {
  const message = buildCoachMessage(entry);
  const href = mailtoHref("coach@school.org", message);
  assert.ok(href.startsWith("mailto:coach%40school.org?subject=Rally%20practice"));
  assert.ok(decodeURIComponent(href).includes("Try next: Pause before my last point"));
  assert.ok(mailtoHref("not an email", message).startsWith("mailto:?subject="));
  assert.ok(mailtoHref("a@b.c,evil@x.y", message).startsWith("mailto:?subject="));
  assert.equal(isEmail(" coach@school.org "), true);
});

test("round formats use NSDA times and accept bounded edits", () => {
  assert.deepEqual(FORMATS.pf.speeches.map((s) => s.seconds), [240, 240, 180, 240, 240, 180, 180, 180, 180, 120, 120]);
  assert.equal(FORMATS.pf.prep, 180);
  assert.deepEqual(FORMATS.ld.speeches.map((s) => s.seconds), [360, 180, 420, 180, 240, 360, 180]);
  assert.equal(FORMATS.ld.prep, 240);
  const edited = withOverrides("ld", { ld: { speeches: [300, "x", 99999], prep: 5 } });
  assert.equal(edited.speeches[0].seconds, 300);
  assert.equal(edited.speeches[1].seconds, 15);
  assert.equal(edited.speeches[2].seconds, 3600);
  assert.equal(edited.prep, 15);
  assert.equal(edited.edited, true);
  assert.equal(withOverrides("pf", {}).edited, false);
});

test("timer settings fall back safely", () => {
  assert.deepEqual(readTimerSettings(null), { format: "pf", overrides: {} });
  const bad = { getItem: () => "{not json" };
  assert.deepEqual(readTimerSettings(bad), { format: "pf", overrides: {} });
  const saved = { getItem: () => JSON.stringify({ format: "ld", overrides: { ld: { prep: 120 } } }) };
  assert.equal(readTimerSettings(saved).format, "ld");
});

// Speech and prep times for the round timer. Source: NSDA competition events,
// https://www.speechanddebate.org/competition-events/ (checked Sep 30, 2026).
// Leagues can differ, so every time is editable and saved in this browser.
export const RULES_LABEL = "NSDA times, 2026–27 season";
export const RULES_SOURCE = "https://www.speechanddebate.org/competition-events/";
export const TIMER_KEY = "rally-round-timer";

export const FORMATS = {
  pf: {
    name: "Public Forum",
    short: "PF",
    sides: ["Team A", "Team B"],
    prep: 180,
    speeches: [
      { label: "Team A constructive", seconds: 240 },
      { label: "Team B constructive", seconds: 240 },
      { label: "Crossfire", seconds: 180 },
      { label: "Team A rebuttal", seconds: 240 },
      { label: "Team B rebuttal", seconds: 240 },
      { label: "Crossfire", seconds: 180 },
      { label: "Team A summary", seconds: 180 },
      { label: "Team B summary", seconds: 180 },
      { label: "Grand crossfire", seconds: 180 },
      { label: "Team A final focus", seconds: 120 },
      { label: "Team B final focus", seconds: 120 },
    ],
  },
  ld: {
    name: "Lincoln–Douglas",
    short: "LD",
    sides: ["Affirmative", "Negative"],
    prep: 240,
    speeches: [
      { label: "Affirmative constructive", seconds: 360 },
      { label: "Negative cross-examination", seconds: 180 },
      { label: "Negative constructive", seconds: 420 },
      { label: "Affirmative cross-examination", seconds: 180 },
      { label: "First affirmative rebuttal", seconds: 240 },
      { label: "Negative rebuttal", seconds: 360 },
      { label: "Second affirmative rebuttal", seconds: 180 },
    ],
  },
  extemp: {
    name: "Extemp",
    short: "Extemp",
    sides: [],
    prep: 0,
    speeches: [
      { label: "Prep", seconds: 1800 },
      { label: "Speech", seconds: 420 },
    ],
  },
};

const clampSeconds = (value) =>
  Math.max(15, Math.min(3600, Math.round(Number(value) || 0)));

// Merge a format with saved edits. Unknown or malformed edits are ignored.
export function withOverrides(id, overrides = {}) {
  const base = FORMATS[id];
  const edit = overrides?.[id] ?? {};
  const speeches = base.speeches.map((speech, index) => {
    const saved = Array.isArray(edit.speeches) ? edit.speeches[index] : undefined;
    return saved === undefined ? speech : { ...speech, seconds: clampSeconds(saved) };
  });
  const prep =
    base.prep && edit.prep !== undefined ? clampSeconds(edit.prep) : base.prep;
  const edited =
    speeches.some((speech, i) => speech.seconds !== base.speeches[i].seconds) ||
    prep !== base.prep;
  return { ...base, speeches, prep, edited };
}

export function readTimerSettings(storage) {
  try {
    const saved = JSON.parse(storage.getItem(TIMER_KEY) || "{}");
    const format = FORMATS[saved.format] ? saved.format : "pf";
    const overrides =
      saved.overrides && typeof saved.overrides === "object" ? saved.overrides : {};
    return { format, overrides };
  } catch {
    return { format: "pf", overrides: {} };
  }
}

export function writeTimerSettings(storage, settings) {
  try {
    storage.setItem(TIMER_KEY, JSON.stringify({ v: 1, ...settings }));
    return true;
  } catch {
    return false;
  }
}

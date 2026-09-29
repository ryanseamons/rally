export const NOTEBOOK_KEY = "rally-notebook";
export const MAX_BACKUP_BYTES = 2_000_000;
const fields = ["id", "date", "topic", "judge", "keep", "next"];
export function validateEntries(entries) {
  if (!Array.isArray(entries) || entries.length > 1000)
    throw new Error("Choose a Rally backup with 1,000 notes or fewer.");
  return entries.map((entry) => {
    if (
      !entry ||
      typeof entry !== "object" ||
      fields.some(
        (key) => typeof entry[key] !== "string" || entry[key].length > 20000,
      ) ||
      !entry.id ||
      !entry.ratings ||
      typeof entry.ratings !== "object" ||
      Array.isArray(entry.ratings)
    )
      throw new Error("This file is not a valid Rally notebook backup.");
    const ratings = Object.entries(entry.ratings);
    if (
      ratings.length > 50 ||
      ratings.some(
        ([key, value]) =>
          key.length > 200 || typeof value !== "string" || value.length > 500,
      )
    )
      throw new Error("This backup contains an invalid rating.");
    return {
      ...Object.fromEntries(fields.map((key) => [key, entry[key]])),
      ratings: Object.fromEntries(ratings),
    };
  });
}
export function parseBackup(text) {
  if (new TextEncoder().encode(text).length > MAX_BACKUP_BYTES)
    throw new Error("Choose a backup smaller than 2 MB.");
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      "This file is not valid JSON. Choose a Rally notebook backup.",
    );
  }
  if (Array.isArray(data)) return validateEntries(data);
  if (data?.app !== "rally" || data.version !== 1)
    throw new Error("Choose a Rally notebook backup (version 1).");
  return validateEntries(data.entries);
}
const fingerprint = (entry) =>
  JSON.stringify([
    entry.date,
    entry.topic,
    entry.judge,
    entry.keep,
    entry.next,
    Object.entries(entry.ratings).sort(([a], [b]) => a.localeCompare(b)),
  ]);
export function mergeEntries(
  existing,
  incoming,
  makeId = () => crypto.randomUUID(),
) {
  const result = validateEntries(existing);
  const ids = new Set(result.map((entry) => entry.id));
  const seen = new Set(result.map(fingerprint));
  for (const entry of validateEntries(incoming)) {
    const key = fingerprint(entry);
    if (seen.has(key)) continue;
    const copy = { ...entry, id: ids.has(entry.id) ? makeId() : entry.id };
    if (ids.has(copy.id))
      throw new Error(
        "Could not give the imported note a unique ID. Please try again.",
      );
    result.push(copy);
    ids.add(copy.id);
    seen.add(key);
  }
  return validateEntries(result);
}
export function makeBackup(entries) {
  return JSON.stringify(
    {
      app: "rally",
      version: 1,
      exportedAt: new Date().toISOString(),
      entries: validateEntries(entries),
    },
    null,
    2,
  );
}

// Builds the "send to my coach" message for a saved reflection. Rally never
// sends or stores it: the student's own email app, share sheet or clipboard does.
export const COACH_EMAIL_KEY = "rally-coach-email";
export const SITE_URL = "https://rally.ryanseamons.com";
const EMAIL = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/;

export const isEmail = (value) => EMAIL.test(String(value || "").trim());

function reflectionBy(judge) {
  if (judge === "Me") return "me";
  if (judge === "Parent") return "a parent";
  return String(judge || "me").toLowerCase();
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? String(value || "")
    : date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

export function buildCoachMessage(entry) {
  const ratings = Object.entries(entry.ratings || {});
  const lines = [
    "Hi Coach,",
    "",
    "Here is my practice reflection from Rally.",
    "",
    `Date: ${formatDate(entry.date)}`,
    `Topic: ${entry.topic}`,
    `Reflection by: ${reflectionBy(entry.judge)}`,
    "",
    `Keep doing: ${entry.keep?.trim() || "(no note)"}`,
    `Try next: ${entry.next?.trim() || "(no note)"}`,
  ];
  if (ratings.length) {
    lines.push("", "Self-check:");
    for (const [skill, rating] of ratings) lines.push(`- ${skill}: ${rating}`);
  }
  lines.push("", `Sent from Rally (${SITE_URL}). Rally does not store this message.`);
  return { subject: `Rally practice: ${entry.topic}`, body: lines.join("\n") };
}

export function mailtoHref(email, { subject, body }) {
  const to = isEmail(email) ? encodeURIComponent(String(email).trim()) : "";
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

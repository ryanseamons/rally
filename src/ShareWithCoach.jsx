import React, { useId, useState } from "react";
import { Copy, Mail, Send, Share2 } from "lucide-react";
import {
  COACH_EMAIL_KEY,
  buildCoachMessage,
  isEmail,
  mailtoHref,
} from "./coach-message.mjs";

function readEmail() {
  try {
    return localStorage.getItem(COACH_EMAIL_KEY) || "";
  } catch {
    return "";
  }
}

function rememberEmail(value) {
  try {
    if (isEmail(value)) localStorage.setItem(COACH_EMAIL_KEY, value.trim());
    else if (!value.trim()) localStorage.removeItem(COACH_EMAIL_KEY);
  } catch {
    // Storage can be unavailable. Sending still works.
  }
}

export default function ShareWithCoach({ entry }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(readEmail);
  const [status, setStatus] = useState("");
  const id = useId();
  const message = buildCoachMessage(entry);
  const text = `${message.subject}\n\n${message.body}`;
  const canShare = typeof navigator !== "undefined" && Boolean(navigator.share);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied. Paste it into an email or message to your coach.");
    } catch {
      setStatus("Copying is blocked here. Select the message and copy it.");
    }
  }

  async function share() {
    try {
      await navigator.share({ title: message.subject, text: message.body });
      setStatus("");
    } catch (err) {
      if (err?.name !== "AbortError")
        setStatus("Sharing is not available here. Try email or copy.");
    }
  }

  if (!open)
    return (
      <button className="text-button coach-open" onClick={() => setOpen(true)}>
        <Send size={15} /> Send to my coach
      </button>
    );

  return (
    <div className="coach-share" role="group" aria-label={`Send ${entry.topic} to my coach`}>
      <label htmlFor={`${id}-email`}>Coach’s email (optional)</label>
      <input
        id={`${id}-email`}
        type="email"
        autoComplete="off"
        placeholder="coach@school.org"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => rememberEmail(email)}
      />
      <p className="coach-note">
        Rally doesn’t send or keep this. Your email app sends it from your
        account. The email address is remembered only in this browser.
      </p>
      <label htmlFor={`${id}-preview`}>Message</label>
      <textarea id={`${id}-preview`} readOnly value={text} rows={9} />
      <div className="coach-actions">
        <a
          className="button primary"
          href={mailtoHref(email, message)}
          onClick={() => rememberEmail(email)}
        >
          <Mail size={16} /> Open email
        </a>
        <button className="button" onClick={copy}>
          <Copy size={16} /> Copy message
        </button>
        {canShare && (
          <button className="button" onClick={share}>
            <Share2 size={16} /> Share…
          </button>
        )}
        <button className="text-button" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
      <p className="coach-status" role="status">
        {status}
      </p>
    </div>
  );
}

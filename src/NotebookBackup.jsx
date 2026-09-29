import React, { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import {
  MAX_BACKUP_BYTES,
  makeBackup,
  parseBackup,
} from "./notebook-storage.mjs";
export default function NotebookBackup({ entries, onRestore, error }) {
  const fileInput = useRef(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  function download() {
    try {
      const url = URL.createObjectURL(
        new Blob([makeBackup(entries)], { type: "application/json" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `rally-notebook-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage("Backup downloaded. Keep it somewhere you can find it.");
    } catch (err) {
      setMessage(err.message);
    }
  }
  async function restore(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setMessage("");
    try {
      if (file.size > MAX_BACKUP_BYTES)
        throw new Error("Choose a backup smaller than 2 MB.");
      const added = onRestore(parseBackup(await file.text()));
      setMessage(
        added
          ? `${added} ${added === 1 ? "note" : "notes"} added. Your existing notes are still here.`
          : "These notes are already in your notebook.",
      );
    } catch (err) {
      setMessage(err.message);
    } finally {
      setBusy(false);
      event.target.value = "";
    }
  }
  return (
    <section className="notebook-backup" aria-labelledby="backup-title">
      <div>
        <h2 id="backup-title">Keep a copy of your notebook.</h2>
        <p>
          Notes are saved only in this browser. Download a backup to keep them
          safe or open them in another browser. Restoring adds notes and keeps
          the ones already here.
        </p>
      </div>
      {!entries.length && (
        <p>Save a reflection to download your first backup.</p>
      )}
      <div className="backup-actions">
        <button
          className="button secondary"
          onClick={download}
          disabled={!entries.length || !!error}
        >
          <Download size={16} /> Download backup
        </button>
        <button
          className="button secondary"
          disabled={busy || !!error}
          onClick={() => fileInput.current.click()}
        >
          <Upload size={16} /> {busy ? "Restoring…" : "Restore backup"}
        </button>
        <input
          ref={fileInput}
          type="file"
          accept=".json,application/json"
          aria-label="Choose notebook backup"
          hidden
          onChange={restore}
        />
      </div>
      <details className="notebook-migration">
        <summary>Notes at the original Rally address?</summary>
        <p>
          They are still saved there, in the browser you used. This new address
          cannot read them automatically.{" "}
          <a href="/move-notebook.html" target="_blank" rel="noreferrer">
            Move your old notes
          </a>{" "}
          with help from a parent, or{" "}
          <a
            href="https://rally-debate-studio.ryanseamons.chatgpt.site/"
            target="_blank"
            rel="noreferrer"
          >
            open the original Rally
          </a>
          .
        </p>
      </details>
      <p className="backup-message" role="status">
        {message}
      </p>
    </section>
  );
}

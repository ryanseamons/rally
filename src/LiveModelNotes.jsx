import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { linesSpoken } from "./flow-cues.mjs";

// "Living Flow": while a stage's example plays, its model notes land line by
// line as each idea is spoken, each underlined with a short ink stroke.
// When nothing is playing, every line shows, as before.
export default function LiveModelNotes({ stage, text, live }) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  const listening = live && live.stage === stage && live.playing;
  const shown = live && live.stage === stage ? linesSpoken(stage, live.t, lines.length) : lines.length;
  return (
    <div className={`live-notes ${listening ? "listening" : ""}`} aria-live={listening ? "polite" : "off"}>
      {listening && (
        <span className="live-badge">
          <motion.i
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          Listening
        </span>
      )}
      <AnimatePresence initial={false}>
        {lines.slice(0, shown).map((line, i) => (
          <motion.span
            key={`${stage}-${i}`}
            className="live-line"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={reduce ? { duration: 0.15 } : { type: "spring", stiffness: 260, damping: 24 }}
          >
            {line}
            <svg className="live-ink" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M1,4 C20,1 40,5 60,3 S90,2 99,3"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.12, ease: [0.3, 0.7, 0.2, 1] }}
              />
            </svg>
          </motion.span>
        ))}
      </AnimatePresence>
      {listening && shown < lines.length && <span className="live-waiting">…</span>}
    </div>
  );
}

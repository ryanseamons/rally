import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Pause, Play, X } from "lucide-react";
import { formatTime } from "./time-format.mjs";

// "Spotlight": while a student speaks, the page steps back to a dark stage with
// their cue words and a ring of light around the edge that drains with time.
// The ring is a rounded rectangle in real pixels, starting at top centre and
// running clockwise, so its length (and the drain) stays even on any screen.
const INSET = 14;
const RADIUS = 28;
function ringPath(w, h) {
  const x0 = INSET, y0 = INSET, x1 = w - INSET, y1 = h - INSET, r = RADIUS, mid = w / 2;
  return `M${mid},${y0} H${x1 - r} Q${x1},${y0} ${x1},${y0 + r} V${y1 - r} Q${x1},${y1} ${x1 - r},${y1} H${x0 + r} Q${x0},${y1} ${x0},${y1 - r} V${y0 + r} Q${x0},${y0} ${x0 + r},${y0} Z`;
}
function useViewport() {
  const [size, setSize] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  useEffect(() => {
    const on = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return size;
}

export default function Spotlight({ open, onClose, onFinish, timer, topic, cues }) {
  const reduce = useReducedMotion();
  const primary = useRef(null);
  const left = Math.max(0, timer.left);
  const share = timer.total ? left / timer.total : 0;
  const late = left <= 30;
  const { w, h } = useViewport();
  const ring = ringPath(w, h);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        timer.running ? timer.pause() : timer.start();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Everything behind the stage is out of reach for keyboard and screen readers.
    const app = document.getElementById("root");
    if (app) app.inert = true;
    requestAnimationFrame(() => primary.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (app) app.inert = false;
      previous?.focus?.();
    };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={`spotlight ${late ? "late" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Spotlight: ${topic}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.5 }}
        >
          <motion.div
            className="spotlight-glow"
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg className="spotlight-ring" width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
            <path d={ring} className="ring-track" />
            <path d={ring} className="ring-light" pathLength="1" style={{ strokeDasharray: `${share} 1.01` }} />
          </svg>
          <p className="spotlight-time" role="timer" aria-label={`${formatTime(left)} remaining`}>
            {formatTime(left)}
          </p>
          <button className="spotlight-close icon-button" onClick={onClose} aria-label="Leave the spotlight">
            <X size={20} />
          </button>

          <div className="spotlight-body">
            <p className="spotlight-topic">{topic}</p>
            <ol className="spotlight-cues">
              {cues.map((cue, i) => (
                <motion.li
                  key={cue.name}
                  className={cue.text ? "" : "empty"}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={reduce ? { duration: 0.2 } : { type: "spring", stiffness: 140, damping: 20, delay: 0.3 + i * 0.14 }}
                >
                  <span className="cue-label">{cue.name}</span>
                  <span className="cue-text">{cue.text || cue.hint}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="spotlight-foot">
            <AnimatePresence>
              {!timer.running && left === timer.total && (
                <motion.p
                  className="spotlight-breath"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.span
                    className="breath-dot"
                    aria-hidden="true"
                    animate={reduce ? undefined : { scale: [1, 2.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Take a slow breath in and out, then start when you’re ready.
                </motion.p>
              )}
            </AnimatePresence>
            <div className="spotlight-actions">
              <button
                ref={primary}
                className="button primary"
                onClick={timer.running ? timer.pause : timer.start}
                disabled={left === 0}
              >
                {timer.running ? <Pause size={17} /> : <Play size={17} />}
                {timer.running ? "Pause" : left === timer.total ? "Start speaking" : "Resume"}
              </button>
              <button className="button spotlight-finish" onClick={onFinish}>
                Finish &amp; reflect <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

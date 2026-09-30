import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, RotateCcw } from "lucide-react";

// "The Draw": impromptu topics are dealt from a Rally deck as paper cards.
// The chosen card lifts toward you and the others fall away before Prep opens.
const TONES = { Question: "volt", Thought: "blue", Word: "coral" };
const FAN = [-5, 0, 5];
const DEAL = { type: "spring", stiffness: 170, damping: 20 };
const SNAP = { type: "spring", stiffness: 420, damping: 26 };

export default function TopicDeck({ topics, draw, onChoose, onRedraw }) {
  const reduce = useReducedMotion();
  const [deal, setDeal] = useState(0);
  const [picked, setPicked] = useState(null);
  const listRef = useRef(null);
  const [minHeight, setMinHeight] = useState(0);
  const key = draw.join("-");

  useEffect(() => {
    setPicked(null);
    setDeal((n) => n + 1);
  }, [key]);

  function choose(index, topic) {
    if (picked !== null) return;
    setPicked(index);
    setTimeout(() => onChoose(topic), reduce ? 0 : 420);
  }

  function redraw() {
    setMinHeight((h) => Math.max(h, listRef.current?.getBoundingClientRect().height ?? 0));
    const y = window.scrollY;
    onRedraw();
    requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }));
  }

  return (
    <div className="topic-table">
      <div className="topic-deck-stack" aria-hidden="true">
        <span className="deck-card" />
        <span className="deck-card" />
        <span className="deck-card top">
          <span className="deck-mark">r</span>
        </span>
      </div>
      <div className="topic-cards" ref={listRef} style={{ minHeight }} data-deal={deal}>
        {draw.map((topic, i) => {
          const [kind, text] = topics[topic];
          const state = picked === null ? "dealt" : picked === i ? "chosen" : "dropped";
          return (
            <motion.button
              key={`${deal}-${topic}`}
              type="button"
              className={`topic-card tone-${TONES[kind] ?? "volt"}`}
              onClick={() => choose(i, topic)}
              disabled={picked !== null && picked !== i}
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: -140 - i * 120, y: 24, rotate: -10, rotateY: 180 }
              }
              animate={
                reduce
                  ? { opacity: state === "dropped" ? 0 : 1 }
                  : state === "chosen"
                    ? { opacity: 1, x: 0, y: -16, rotate: 0, rotateY: 0, scale: 1.04 }
                    : state === "dropped"
                      ? { opacity: 0, x: 0, y: 90, rotate: FAN[i] * 2.4, rotateY: 0, scale: 0.96 }
                      : { opacity: 1, x: 0, y: 0, rotate: FAN[i], rotateY: 0, scale: 1 }
              }
              transition={
                reduce
                  ? { duration: 0.18 }
                  : state === "dealt"
                    ? { ...DEAL, delay: 0.08 + i * 0.12, opacity: { duration: 0.2, delay: i * 0.12 } }
                    : SNAP
              }
              whileHover={reduce || picked !== null ? undefined : { y: -12, rotate: 0, scale: 1.02, transition: SNAP }}
              whileTap={reduce || picked !== null ? undefined : { scale: 0.98 }}
            >
              <span className="card-back" aria-hidden="true">
                <span className="deck-mark">r</span>
              </span>
              <span className="card-front">
                <span className="topic-kind">{kind}</span>
                <span className="topic-copy">{text}</span>
                <span className="card-tear" aria-hidden="true" />
                <span className="pick-topic">
                  Pick this <ArrowRight size={16} />
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>
      <button type="button" className="text-button redraw" onClick={redraw}>
        <RotateCcw size={16} /> Draw 3 new topics
      </button>
    </div>
  );
}

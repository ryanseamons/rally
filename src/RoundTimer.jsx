import React, { useEffect, useState } from "react";
import { ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Kw as RadioGroup, qw as RadioItem } from "./ui-runtime.js";
import { formatTime, TimerDisplay, useCountdown } from "./Rally.js";
import {
  FORMATS,
  RULES_LABEL,
  RULES_SOURCE,
  readTimerSettings,
  withOverrides,
  writeTimerSettings,
} from "./round-formats.mjs";

function browserStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function PrepBank({ side, seconds, active }) {
  const timer = useCountdown(seconds);
  const { reset, pause } = timer;
  useEffect(() => reset(seconds), [seconds, reset]);
  useEffect(() => {
    if (!active) pause();
  }, [active, pause]);
  const out = timer.left === 0;
  const tokens = Math.max(1, Math.ceil(seconds / 60));
  return (
    <div className={`prep-bank ${out ? "prep-out" : ""}`}>
      <span className="eyebrow">{side} prep</span>
      <span className="prep-tokens" aria-hidden="true">
        {Array.from({ length: tokens }, (_, i) => {
          const fill = Math.max(0, Math.min(1, (timer.left - i * 60) / Math.min(60, seconds - i * 60)));
          return (
            <span key={i} className="prep-token">
              <motion.span className="prep-token-fill" animate={{ scale: fill }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
            </span>
          );
        })}
      </span>
      <span
        className="prep-digits"
        role="timer"
        aria-label={`${side} prep: ${formatTime(timer.left)} left`}
      >
        {formatTime(timer.left)}
      </span>
      <div className="prep-actions">
        <button
          className="button small-button"
          onClick={timer.running ? timer.pause : timer.start}
          disabled={out}
        >
          {timer.running ? <Pause size={15} /> : <Play size={15} />}
          {timer.running ? "Stop prep" : "Use prep"}
        </button>
        <button
          className="icon-button"
          aria-label={`Reset ${side} prep`}
          onClick={() => reset(seconds)}
        >
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
}

// "Round Ribbon": the whole round as one strip, each speech sized by its length.
// The current speech swells to hold its clock; finished speeches fill in.
function RoundRibbon({ speeches, index, left, sideOf, onPick }) {
  const reduce = useReducedMotion();
  const spring = reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 };
  return (
    <ol className="round-ribbon" aria-label="Round order">
      {speeches.map((s, i) => {
        const state = i < index ? "done" : i === index ? "now" : "next";
        const share = i === index && s.seconds ? 1 - Math.max(0, left) / s.seconds : state === "done" ? 1 : 0;
        return (
          <motion.li
            key={`${s.label}-${i}`}
            layout={!reduce}
            transition={spring}
            className={`ribbon-seg side-${sideOf(s.label)} ${state}`}
            style={{ flexGrow: i === index ? Math.max(s.seconds, 360) : s.seconds }}
          >
            <button onClick={() => onPick(i)} aria-current={i === index ? "step" : undefined} aria-label={`${s.label}, ${formatTime(s.seconds)}`}>
              <motion.span className="ribbon-fill" aria-hidden="true" animate={{ scaleX: share }} transition={{ duration: reduce ? 0 : 0.25 }} />
              <motion.span layout={!reduce ? "position" : false} className="ribbon-label">
                {i === index ? s.label : ""}
              </motion.span>
            </button>
          </motion.li>
        );
      })}
    </ol>
  );
}

function minutesValue(seconds) {
  return Math.round((seconds / 60) * 100) / 100;
}

export default function RoundTimer({ active }) {
  const [settings, setSettings] = useState(() => readTimerSettings(browserStorage()));
  const [index, setIndex] = useState(0);
  const [editing, setEditing] = useState(false);
  const format = withOverrides(settings.format, settings.overrides);
  const speech = format.speeches[index] ?? format.speeches[0];
  const timer = useCountdown(speech.seconds);
  const { reset, pause } = timer;

  useEffect(() => reset(speech.seconds), [settings.format, index, speech.seconds, reset]);
  useEffect(() => {
    if (!active) pause();
  }, [active, pause]);

  function save(next) {
    setSettings(next);
    writeTimerSettings(browserStorage(), next);
  }

  function chooseFormat(id) {
    setIndex(0);
    setEditing(false);
    save({ ...settings, format: id });
  }

  function editSpeech(i, minutes) {
    const current = settings.overrides[settings.format] ?? {};
    const speeches = format.speeches.map((s) => s.seconds);
    speeches[i] = Math.round(Number(minutes) * 60);
    save({
      ...settings,
      overrides: { ...settings.overrides, [settings.format]: { ...current, speeches } },
    });
  }

  function editPrep(minutes) {
    const current = settings.overrides[settings.format] ?? {};
    save({
      ...settings,
      overrides: {
        ...settings.overrides,
        [settings.format]: { ...current, prep: Math.round(Number(minutes) * 60) },
      },
    });
  }

  function restoreDefaults() {
    const overrides = { ...settings.overrides };
    delete overrides[settings.format];
    save({ ...settings, overrides });
  }

  const next = format.speeches[index + 1];
  const sideOf = (label) =>
    format.sides[0] && label.startsWith(format.sides[0])
      ? "a"
      : format.sides[1] && label.startsWith(format.sides[1])
        ? "b"
        : "both";

  return (
    <div className="round-timer-page">
      <div className="round-timer-heading">
        <span className="eyebrow">ROUND TIMER</span>
        <h1>Time a practice round.</h1>
        <p className="lede">
          Speech and prep times for each format. Edit any time to match your
          league.
        </p>
      </div>

      <RadioGroup
        value={settings.format}
        onValueChange={chooseFormat}
        aria-label="Round format"
        className="preset-group round-formats"
      >
        {Object.entries(FORMATS).map(([id, f]) => (
          <label className="preset" key={id}>
            <RadioItem value={id} />
            <span>
              {f.name}
              <small>
                {f.speeches.length} {f.speeches.length === 1 ? "part" : "parts"}
                {f.prep ? ` · ${formatTime(f.prep)} prep each` : ""}
              </small>
            </span>
          </label>
        ))}
      </RadioGroup>

      <RoundRibbon
        speeches={format.speeches}
        index={index}
        left={timer.left}
        sideOf={sideOf}
        onPick={setIndex}
      />

      <div className="round-timer-grid">
        <section className="round-main" aria-label="Current speech">
          <TimerDisplay timer={timer} label={speech.label} large />
          <div className="round-next">
            {next ? (
              <button className="button primary" onClick={() => setIndex(index + 1)}>
                Next: {next.label} <ArrowRight size={17} />
              </button>
            ) : (
              <button className="button" onClick={() => setIndex(0)}>
                Start the round over
              </button>
            )}
          </div>
        </section>

        <section className="round-side" aria-label="Round order and prep">
          {format.sides.length > 0 && (
            <div className="prep-banks">
              {format.sides.map((side) => (
                <PrepBank
                  key={`${settings.format}-${side}`}
                  side={side}
                  seconds={format.prep}
                  active={active}
                />
              ))}
            </div>
          )}

          <div className="section-toolbar">
            <span className="eyebrow">Round order</span>
            <button className="text-button" onClick={() => setEditing(!editing)}>
              {editing ? "Done editing" : "Edit times"}
            </button>
          </div>
          <ol className="speech-list">
            {format.speeches.map((s, i) => (
              <li key={`${s.label}-${i}`}>
                <button
                  className="speech-row"
                  aria-current={i === index ? "step" : undefined}
                  onClick={() => setIndex(i)}
                >
                  <span>{s.label}</span>
                  <span className="speech-time">{formatTime(s.seconds)}</span>
                </button>
                {editing && (
                  <label className="speech-edit">
                    Minutes
                    <input
                      type="number"
                      min="0.25"
                      max="60"
                      step="0.25"
                      value={minutesValue(s.seconds)}
                      onChange={(e) => editSpeech(i, e.target.value)}
                      aria-label={`${s.label} minutes`}
                    />
                  </label>
                )}
              </li>
            ))}
          </ol>
          {editing && format.sides.length > 0 && (
            <label className="speech-edit prep-edit">
              Prep minutes for each side
              <input
                type="number"
                min="0.25"
                max="60"
                step="0.25"
                value={minutesValue(format.prep)}
                onChange={(e) => editPrep(e.target.value)}
              />
            </label>
          )}
          <p className="round-rules">
            {format.edited ? (
              <>
                Your times.{" "}
                <button className="link-button" onClick={restoreDefaults}>
                  Reset to {RULES_LABEL.replace(/,.*/, "")}
                </button>
              </>
            ) : (
              <>
                {RULES_LABEL}.{" "}
                <a href={RULES_SOURCE} target="_blank" rel="noreferrer">
                  Source
                </a>
                . Your league may differ.
              </>
            )}
          </p>
        </section>
      </div>
    </div>
  );
}

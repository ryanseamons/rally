// When each model-note line is spoken in the example readings (seconds).
// Measured from Whisper transcript timestamps of public/audio/ld-*.mp3 and
// matched to each stage's practice script. One entry per model line.
export const FLOW_CUES = [
  [6.1, 14.8, 23.1],
  [5.5, 17.5, 22.7],
  [4.3, 8.4, 15.3, 26.2],
  [19.5, 19.9, 21.5],
  [0.5, 8.1, 16.0, 22.4],
  [0.5, 3.5, 19.7],
  [4.7, 11.8, 16.0],
];

// How many lines have been spoken by time t. Unknown stages show everything.
export function linesSpoken(stage, t, total) {
  const cues = FLOW_CUES[stage];
  if (!cues || t == null) return total;
  return Math.min(total, cues.filter((at) => t >= at).length);
}

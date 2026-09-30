// When each model-note line is spoken in the example readings (seconds).
// Measured from pauses in public/audio/ld-*.mp3 (ffmpeg silencedetect) and
// matched to each stage's practice script. One entry per model line.
export const FLOW_CUES = [
  [5.3, 10.9, 15.3],
  [8.9, 11.5, 15.9],
  [3.0, 6.8, 12.3, 21.3],
  [10.4, 11.6, 15.2],
  [1.3, 4.8, 8.8, 14.5],
  [1.0, 4.1, 7.1],
  [4.8, 8.7, 15.1],
];

// How many lines have been spoken by time t. Unknown stages show everything.
export function linesSpoken(stage, t, total) {
  const cues = FLOW_CUES[stage];
  if (!cues || t == null) return total;
  return Math.min(total, cues.filter((at) => t >= at).length);
}

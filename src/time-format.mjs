// m:ss for countdowns, rounding partial seconds up so 0:00 means time is truly up.
export const formatTime = (seconds) => {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

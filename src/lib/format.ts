export const formatLong = (n: number) => n.toLocaleString("en-US");

export const formatShort = (n: number) => {
  if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
};

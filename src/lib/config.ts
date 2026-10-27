/** Single source for the Discord community destination. Supply VITE_DISCORD_URL before enabling join links. */
const raw = (import.meta.env["VITE_DISCORD_URL"] as string | undefined || "").trim();

export const DISCORD_URL: string | null = /^https:\/\//.test(raw) ? raw : null;

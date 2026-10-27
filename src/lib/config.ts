/** Single source for the Discord community destination. */
const raw = (
  import.meta.env["VITE_DISCORD_URL"] as string | undefined ||
  "https://discord.gg/Vwv6QAegrk"
).trim();

export const DISCORD_URL: string | null = /^https:\/\//.test(raw) ? raw : null;

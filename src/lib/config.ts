/** Single source for the Wolf Billion Discord community destination. */
const DISCORD_URL = "https://discord.gg/Vwv6QAegrk";

export const COMMUNITY_URL: string | null = /^https:\/\/discord\.gg\//.test(DISCORD_URL)
  ? DISCORD_URL
  : null;

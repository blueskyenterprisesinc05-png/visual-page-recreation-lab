/** Single source for the Telegram community destination. VITE_TELEGRAM_URL overrides the default. */
const DEFAULT_TELEGRAM_URL = "https://t.me/+K4fPSalRPnsxNTU0";
const raw = (
  (import.meta.env["VITE_TELEGRAM_URL"] as string | undefined) || DEFAULT_TELEGRAM_URL
).trim();

export const TELEGRAM_URL: string | null = /^https:\/\//.test(raw) ? raw : null;

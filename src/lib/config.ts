/** Single source for the Telegram community destination. Set VITE_TELEGRAM_URL to enable CTAs. */
const raw = (import.meta.env.VITE_TELEGRAM_URL as string | undefined)?.trim();

export const TELEGRAM_URL: string | null = raw && /^https:\/\//.test(raw) ? raw : null;

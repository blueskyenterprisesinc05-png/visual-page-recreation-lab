import { TELEGRAM_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = { size?: "sm" | "lg"; className?: string };

const base =
  "cinematic-cta inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors";
const sizes = { sm: "h-10 px-4 text-sm", lg: "h-12 px-6 text-[0.95rem]" };

export function JoinCta({ size = "lg", className }: Props) {
  if (!TELEGRAM_URL) {
    return (
      <span className={cn("inline-flex flex-col items-start gap-1.5", className)}>
        <span
          aria-disabled="true"
          className={cn(
            base,
            sizes[size],
            "cursor-not-allowed border border-plum text-muted-foreground",
          )}
        >
          Join the Community
        </span>
        {size === "lg" && <span role="status" className="text-xs text-muted-foreground">Telegram community link coming soon.</span>}
      </span>
    );
  }
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        sizes[size],
        "group bg-primary text-primary-foreground hover:bg-foreground",
        className,
      )}
    >
      Join the Community
      <span className="sr-only">(opens Telegram in a new tab)</span>
    </a>
  );
}

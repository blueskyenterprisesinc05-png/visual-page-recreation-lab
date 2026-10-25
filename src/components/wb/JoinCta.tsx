import { TELEGRAM_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = { size?: "sm" | "lg"; className?: string };

const base =
  "cinematic-cta inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors";
const sizes = { sm: "px-5 py-3 text-[0.8125rem]", lg: "px-7 py-4 text-sm" };

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
        {size === "lg" && (
          <span role="status" className="text-xs text-muted-foreground">
            Telegram community link coming soon.
          </span>
        )}
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
        "group bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      )}
    >
      Join the Community
      <span className="sr-only">(opens Telegram in a new tab)</span>
    </a>
  );
}

import { DISCORD_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = { size?: "sm" | "lg"; className?: string; label?: string };

const base =
  "cinematic-cta inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors";
const sizes = { sm: "p-3 text-[14px] font-semibold", lg: "px-7 py-4 text-[14px] font-semibold" };

export function JoinCta({ size = "lg", className, label = "Join Wolf Billion" }: Props) {
  if (!DISCORD_URL) {
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
          {label}
        </span>
        {size === "lg" && (
          <span role="status" className="text-xs text-muted-foreground">
            Discord invitation link coming soon.
          </span>
        )}
      </span>
    );
  }
  return (
    <a
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], "group", className)}
    >
      {label}
      <span className="sr-only">(opens Discord in a new tab)</span>
    </a>
  );
}

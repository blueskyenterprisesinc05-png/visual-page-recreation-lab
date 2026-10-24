import { ArrowUpRight } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = { size?: "sm" | "lg"; className?: string };

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors";
const sizes = { sm: "h-10 px-4 text-sm", lg: "h-12 px-6 text-[0.95rem]" };

export function JoinCta({ size = "lg", className }: Props) {
  if (!TELEGRAM_URL) {
    return (
      <span
        role="status"
        className={cn(base, sizes[size], "border border-dashed border-plum text-muted-foreground", className)}
      >
        Community link coming soon
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
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      <span className="sr-only">(opens Telegram in a new tab)</span>
    </a>
  );
}

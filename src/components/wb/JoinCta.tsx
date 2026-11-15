import { COMMUNITY_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = { size?: "sm" | "lg"; className?: string };
const base = "cinematic-cta inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors";
const sizes = { sm: "p-3 text-[14px] font-semibold", lg: "px-7 py-4 text-[14px] font-semibold" };

export function JoinCta({ size = "lg", className }: Props) {
  if (!COMMUNITY_URL) return <span aria-disabled="true" className={cn(base, sizes[size], "cursor-not-allowed", className)}>Join Wolf Billion</span>;
  return <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={cn(base, sizes[size], "group", className)}>
    Join Wolf Billion<span className="sr-only"> (opens Discord in a new tab)</span>
  </a>;
}

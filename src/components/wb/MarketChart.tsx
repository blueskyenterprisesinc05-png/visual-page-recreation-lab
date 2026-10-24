import { useId } from "react";

/**
 * One illustrative price path reused everywhere so every diagram tells the same story:
 * previous high -> sweep above it -> break of structure below the swing low ->
 * retrace into the liquidity block -> reaction. Not real market data.
 */
const PATH: [number, number][] = [
  [20, 300], [60, 262], [90, 276], [140, 200], [180, 150], [215, 196], [245, 182],
  [280, 228], [320, 232], [355, 182], [380, 160], [402, 128], [425, 170], [455, 214],
  [480, 262], [505, 236], [530, 196], [548, 168], [565, 205], [590, 268], [610, 300],
];

const HIGH_Y = 150;
const LOW_Y = 232;
const BLOCK = { x: 372, y: 128, h: 40 };
const INVALID_Y = 116;

type Stage = 1 | 2 | 3 | 4;

type Props = {
  /** 1 = liquidity, 2 = + structure, 3 = + reaction & block, 4 = full analysis incl. invalidation */
  stage?: Stage;
  compact?: boolean;
  numbered?: boolean;
  title: string;
  desc: string;
  className?: string;
};

const cutoff: Record<Stage, number> = { 1: 13, 2: 15, 3: 21, 4: 21 };

export function MarketChart({ stage = 3, compact = false, numbered = false, title, desc, className }: Props) {
  const id = useId();
  const pts = PATH.slice(0, cutoff[stage]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const fs = compact ? 15 : 12;
  const label = "fill-muted-foreground";
  const tag = (n: number) =>
    numbered ? (
      <g>
        <circle r={10} className="fill-primary" />
        <text textAnchor="middle" dy="4" fontSize={11} fontWeight={600} className="fill-primary-foreground font-mono">{n}</text>
      </g>
    ) : null;

  return (
    <svg viewBox="0 0 640 340" role="img" aria-labelledby={`${id}t ${id}d`} className={className}>
      <title id={`${id}t`}>{title}</title>
      <desc id={`${id}d`}>{desc}</desc>

      <defs>
        <pattern id={`${id}g`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" className="stroke-border" strokeWidth="0.6" opacity="0.6" />
        </pattern>
        <pattern id={`${id}h`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="stroke-primary" strokeWidth="1" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="640" height="340" fill={`url(#${id}g)`} />

      {/* Previous high / liquidity */}
      <line x1="180" x2="630" y1={HIGH_Y} y2={HIGH_Y} className="stroke-primary" strokeDasharray="4 5" strokeWidth="1" />
      <circle cx="180" cy={HIGH_Y} r="3.5" className="fill-primary" />
      <text x="186" y={HIGH_Y - 10} fontSize={fs} className={`${label} font-mono`}>{compact ? "Prev. high" : numbered ? "Previous high" : "Previous high · liquidity"}</text>

      {stage >= 2 && (
        <g>
          <line x1="245" x2="500" y1={LOW_Y} y2={LOW_Y} className="stroke-foreground" strokeWidth="1" opacity="0.7" />
          <text x="252" y={LOW_Y + 18} fontSize={fs} className="fill-foreground font-mono">BOS</text>
          <circle cx="402" cy="128" r="14" fill="none" className="stroke-primary" strokeWidth="1" />
        </g>
      )}

      {stage >= 3 && (
        <g>
          <rect x={BLOCK.x} y={BLOCK.y} width={630 - BLOCK.x} height={BLOCK.h} fill={`url(#${id}h)`} className="stroke-primary" strokeWidth="0.8" strokeOpacity="0.6" />
          <text x={compact ? 470 : 448} y={stage >= 4 ? BLOCK.y + 25 : BLOCK.y - 8} fontSize={fs} className="fill-primary font-mono">{compact ? "Liq. block" : "Liquidity block"}</text>
          <path d="M572 214 L590 262" className="stroke-primary" strokeWidth="1.2" markerEnd="" />
          <path d="M584 254 l6 9 l3-11" fill="none" className="stroke-primary" strokeWidth="1.2" />
          {!compact && <text x="476" y="300" fontSize={fs} className={`${label} font-mono`}>Reaction</text>}
        </g>
      )}

      {stage >= 4 && (
        <g>
          <line x1="372" x2="630" y1={INVALID_Y} y2={INVALID_Y} className="stroke-plum" strokeWidth="1" strokeDasharray="1 4" strokeLinecap="round" />
          <text x="520" y={INVALID_Y - 8} fontSize={fs} className={`${label} font-mono`}>Invalidation</text>
        </g>
      )}

      <path d={d} fill="none" className="stroke-foreground draw-line" strokeWidth={compact ? 2.4 : 2} strokeLinejoin="round" strokeLinecap="round" />

      {numbered && (
        <g>
          <g transform="translate(160 132)">{tag(1)}</g>
          <g transform="translate(425 108)">{tag(2)}</g>
          <g transform="translate(470 252)">{tag(3)}</g>
          <g transform="translate(352 186)">{tag(4)}</g>
          <g transform="translate(605 240)">{tag(5)}</g>
          <g transform="translate(500 104)">{tag(6)}</g>
        </g>
      )}
    </svg>
  );
}

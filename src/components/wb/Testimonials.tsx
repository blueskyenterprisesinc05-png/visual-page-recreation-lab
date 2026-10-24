export type Testimonial = { quote: string; name: string; context?: string };

/** Only verified community feedback goes here. Renders nothing while empty. */
export const TESTIMONIALS: Testimonial[] = [];

export function Testimonials({ items = TESTIMONIALS }: { items?: Testimonial[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-16 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-2">
      {items.map((t) => (
        <figure key={t.name} className="bg-background p-6">
          <blockquote className="font-display-italic text-xl text-foreground">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            {t.name}
            {t.context && <span className="text-plum"> · {t.context}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

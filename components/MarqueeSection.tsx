import { CONTENT } from "@/lib/content";

export function MarqueeSection() {
  const items = [...CONTENT.stack, ...CONTENT.stack];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span key={i} className="marquee__item">
            {s}<span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

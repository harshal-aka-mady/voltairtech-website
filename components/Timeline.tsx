import { CONTENT } from "@/lib/content";
import { SectionHead } from "./atoms/SectionHead";

export function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <SectionHead
          kicker="[ 03 ] The 48-hour website timeline"
          title={<>Discovery to deployed.<br />Forty-eight hours flat.</>}
          right={<span className="meta mono-lbl">marketing websites · fixed timeline</span>}
        />
        <div className="tl">
          <div className="tl__rail" />
          <div className="tl__grid">
            {CONTENT.timeline.map((t, i) => (
              <div key={t.n} className={"tl__node " + (i < 3 ? "tl__node--done" : "")}>
                <div className="tl__dot" />
                <div className="tl__hr">{t.hr}</div>
                <div className="tl__num">
                  {t.n}<sup>hr</sup>
                </div>
                <div className="tl__lbl">{t.label}</div>
                <div className="tl__desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

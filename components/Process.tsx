import { CONTENT } from "@/lib/content";
import { SectionHead } from "./atoms/SectionHead";

export function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          kicker="[ 06 ] Process"
          title={<>Four steps. No buzzwords.</>}
          right={<span className="meta mono-lbl">scope → lock → ship → hand off</span>}
        />
        <div className="proc-grid">
          {CONTENT.process.map((p) => (
            <div key={p.n} className="proc-step">
              <div className="proc-step__n">{p.n}</div>
              <div className="proc-step__t">{p.t}.</div>
              <p className="proc-step__d">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

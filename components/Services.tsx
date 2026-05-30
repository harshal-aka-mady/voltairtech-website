import Link from "next/link";
import { CONTENT } from "@/lib/content";
import { SectionHead } from "./atoms/SectionHead";
import { ServiceGlyph } from "./atoms/ServiceGlyph";

export function Services() {
  return (
    <section id="services" className="section section--ink">
      <div className="container">
        <SectionHead
          kicker="[ 02 ] What we build"
          title={<>Six services,<br />one team.</>}
          right={<span className="tag"><span className="pulse" />websites ship in 48 hrs</span>}
        />
        <div className="svc-grid">
          {CONTENT.services.map((s) => (
            <Link key={s.n} href={`/services/${s.slug}`} className="svc-card" aria-label={s.title}>
              <span className="svc-card__num">[ {s.n} ]</span>
              <span className="svc-card__arrow">↗</span>
              <div style={{ width: 56, height: 56, marginTop: 22 }}>
                <ServiceGlyph kind={s.glyph} />
              </div>
              <h3 className="svc-card__title">{s.title}</h3>
              <ul className="svc-card__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {s.eta ? (
                <div className="svc-card__eta">
                  ETA — <b>{s.eta}</b>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

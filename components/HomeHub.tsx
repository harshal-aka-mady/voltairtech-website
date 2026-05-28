import Link from "next/link";

const HUB_ITEMS = [
  {
    n: "02",
    label: "Services",
    desc: "Six services — websites, chatbots, RAG, mobile, automation, custom AI.",
    eta: "48 hrs → scoped",
    href: "/services",
  },
  {
    n: "03",
    label: "Timeline",
    desc: "Discovery call to deployed. Forty-eight hours flat for websites.",
    eta: "48 hrs",
    href: "/timeline",
  },
  {
    n: "04",
    label: "RAG Showcase",
    desc: "Citation-grade answers grounded in your data — see the 7-stage pipeline.",
    eta: "2–3 weeks",
    href: "/rag",
  },
  {
    n: "07",
    label: "Why us",
    desc: "Indian operators, global standards. DPDP Act 2023 · Razorpay-native.",
    eta: "DPDP · day one",
    href: "/work",
  },
  {
    n: "08",
    label: "FAQ",
    desc: "Pricing, timelines, NDA, post-ship support. Answers without the brochure.",
    eta: "AEO-ready",
    href: "/faq",
  },
  {
    n: "09",
    label: "Start a project",
    desc: "One line. We reply in under an hour with a 48-hour plan.",
    eta: "< 1 hr reply",
    href: "/contact",
    cta: true,
  },
];

export function HomeHub() {
  return (
    <section className="section">
      <div className="container">
        <div className="hub-grid">
          {HUB_ITEMS.map((item) => (
            <Link
              key={item.n}
              href={item.href}
              className={"hub-card" + (item.cta ? " hub-card--cta" : "")}
            >
              <div className="hub-card__top">
                <span className="hub-card__n">[ {item.n} ]</span>
                <span className="hub-card__arrow">↗</span>
              </div>
              <div className="hub-card__label">{item.label}</div>
              <p className="hub-card__desc">{item.desc}</p>
              <div className="hub-card__eta">{item.eta}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* atoms.jsx — primitives shared across the site
   Loaded via <script type="text/babel">; exports onto window. */

const { useState, useEffect, useRef, useCallback } = React;

function Kicker({ children, dot = true }) {
  return (
    <span className="kicker">
      {dot ? <span className="dot" /> : null}
      {children}
    </span>
  );
}

function SectionHead({ kicker, title, right }) {
  return (
    <div className="section-head">
      <div className="section-head__left">
        {kicker ? <Kicker>{kicker}</Kicker> : null}
        <h2 className="h-display" style={{ marginTop: "16px" }}>{title}</h2>
      </div>
      {right ? <div className="section-head__right">{right}</div> : null}
    </div>
  );
}

function Arr() {
  return <span className="arr" aria-hidden="true">→</span>;
}

function VMark({ size = 28, bg = "var(--v-ink)" }) {
  // Real VA monogram — on an ink chip so it reads on paper backgrounds.
  return (
    <span
      className="mark"
      style={{
        width: size, height: size, borderRadius: 8,
        background: bg, display: "inline-flex",
        alignItems: "center", justifyContent: "center",
        flex: "none",
        padding: size * 0.16,
      }}
      aria-hidden="true"
    >
      <img
        src="logo-mark.png"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain", filter: "invert(1) brightness(1.05)" }}
      />
    </span>
  );
}

/* Reveal-on-scroll for big elements */
function Reveal({ children, as: As = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <As ref={ref} className={"reveal-on-scroll " + (rest.className || "")} {...rest}>
      {children}
    </As>
  );
}

Object.assign(window, { Kicker, SectionHead, Arr, VMark, Reveal });

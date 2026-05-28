"use client";

import { useState } from "react";
import { CONTENT } from "@/lib/content";
import { SectionHead } from "./atoms/SectionHead";

export function RagShowcase() {
  const [activeIdx, setActiveIdx] = useState(3);
  const stages = CONTENT.rag;
  const cur = stages[activeIdx];

  return (
    <section id="rag" className="section section--ink">
      <div className="container">
        <SectionHead
          kicker="[ 04 ] RAG showcase"
          title={
            <>
              Citation-grade answers,
              <br />
              grounded in{" "}
              <em style={{ color: "var(--v-red)", fontStyle: "normal" }}>your</em> data.
            </>
          }
          right={<span className="tag"><span className="pulse" />click each stage</span>}
        />
        <div className="rag__diag">
          {stages.map((s, idx) => (
            <>
              <button
                key={s.name}
                className="rag__chip"
                aria-pressed={idx === activeIdx}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="n">0{idx + 1}</span>
                {s.name}
              </button>
              {idx < stages.length - 1 ? (
                <span key={`arr-${idx}`} className="rag__arr">→</span>
              ) : null}
            </>
          ))}
        </div>
        <div className="rag__panel">
          <div className="rag__panel-name">
            <span className="n">
              STAGE 0{activeIdx + 1} / 0{stages.length}
            </span>
            {cur.name}
          </div>
          <div className="rag__panel-body">
            <p>{cur.desc}</p>
            <p style={{ marginTop: 12 }}>
              <code>{cur.code}</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { Kicker } from "./Kicker";

export function SectionHead({
  kicker,
  title,
  right,
}: {
  kicker?: string;
  title: ReactNode;
  right?: ReactNode;
}) {
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

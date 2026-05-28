import type { ReactNode } from "react";

export function Kicker({ children, dot = true }: { children: ReactNode; dot?: boolean }) {
  return (
    <span className="kicker">
      {dot ? <span className="dot" /> : null}
      {children}
    </span>
  );
}

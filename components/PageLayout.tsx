import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { FooterCta } from "./FooterCta";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <Nav />
      <main>{children}</main>
      <FooterCta />
    </div>
  );
}

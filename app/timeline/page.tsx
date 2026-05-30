import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "48-Hour Website Delivery Timeline — How We Ship So Fast",
  description:
    "Voltair Tech's 48-hour website delivery process: discovery call at hour 0, design lock at hour 12, build at hour 36, live on Vercel at hour 48. Fixed-price, Mumbai AI studio.",
  alternates: { canonical: "https://voltairtech.com/timeline" },
  openGraph: {
    url: "https://voltairtech.com/timeline",
    title: "48-Hour Website Delivery Timeline | Voltair Tech Mumbai",
    description:
      "Discovery to deployed in 48 hours flat. See exactly how Voltair Tech ships production AI websites from kickoff to live in 48 hours.",
  },
};

export default function TimelinePage() {
  return (
    <PageLayout>
      <Timeline />
    </PageLayout>
  );
}

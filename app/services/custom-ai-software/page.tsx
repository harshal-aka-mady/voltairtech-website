import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "Custom AI Software & LLM Integration India — Agents, Copilots & More",
  description:
    "Voltair Tech builds custom AI software: LLM integrations, tool-use agents, AI copilots, eval pipelines, and guardrails. For startups and enterprises across India. Scoped delivery.",
  keywords: [
    "LLM integration India",
    "custom AI agent India",
    "AI copilot development",
    "tool use agent India",
    "AI software development Mumbai",
  ],
  alternates: { canonical: "https://voltairtech.com/services/custom-ai-software" },
  openGraph: {
    url: "https://voltairtech.com/services/custom-ai-software",
    title: "Custom AI Software & LLM Integration India | Voltair Tech",
    description:
      "LLM integrations, tool-use agents, AI copilots, eval pipelines, and guardrails — scoped, built, and handed over with the full codebase.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom AI Software & LLM Integration",
  serviceType: "Custom AI software development",
  provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://voltairtech.com/services/custom-ai-software",
  description:
    "Custom AI software: LLM integrations, tool-use agents, AI copilots, eval frameworks, and production guardrails.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "150000",
    description: "Simple LLM integrations from ₹1.5L; full agent systems from ₹6L+.",
  },
};

export default function CustomAiSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Custom AI Software" },
        ]}
        title="Custom AI software engineered to your spec — not off the shelf"
        meta="Service · LLM integrations & agents · Scoped delivery"
        lead="When no existing product does exactly what you need, we build it. LLM integrations, tool-use AI agents, AI copilots for your internal tools, eval pipelines, and production guardrails — scoped, built, and handed over with the full codebase."
      >
        <h2>What falls under custom AI software</h2>
        <ul>
          <li>AI copilots inside existing web apps (add summarisation, search, or drafting to your product)</li>
          <li>Tool-use agents (AI that browses, reads files, calls APIs, writes to databases)</li>
          <li>LLM fine-tuning pipelines for domain-specific tasks</li>
          <li>Eval frameworks: automated test suites to measure LLM output quality</li>
          <li>Guardrail systems: prompt-injection detection, PII redaction, output classifiers</li>
          <li>Multi-agent orchestration (Claude + GPT working in parallel with handoff logic)</li>
        </ul>

        <h2>Delivery model</h2>
        <p>
          Custom AI software is scoped after a discovery session. We provide a fixed-price quote covering
          architecture, build, integration, testing, and handover documentation. Typical engagements run
          3–8 weeks.
        </p>

        <h2>Pricing</h2>
        <p>
          Scoped on discovery. Simple LLM integrations (add AI search to an existing app) from
          <strong> ₹1.5L</strong>. Full agent systems from <strong>₹6L+</strong>.
        </p>

        <ProseCta label="Describe your problem in one paragraph — we’ll respond with a scoped architecture in 24 hours." />
      </ProsePage>
    </>
  );
}

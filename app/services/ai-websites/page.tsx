import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "AI Website Development Mumbai — Live in 48 Hours",
  description:
    "Get a production AI website built and deployed in 48 hours. Next.js, streaming UIs, Razorpay & Stripe, custom domain. Mumbai-based team. Fixed price. DPDP compliant.",
  keywords: [
    "AI website development India",
    "Next.js agency Mumbai",
    "website design Mumbai",
    "rapid website development India",
    "AI-powered website India",
  ],
  alternates: { canonical: "https://voltairtech.com/services/ai-websites" },
  openGraph: {
    url: "https://voltairtech.com/services/ai-websites",
    title: "AI Website Development Mumbai — Live in 48 Hours | Voltair Tech",
    description:
      "Production Next.js websites from brief to deployment in 48 hours. Razorpay & Stripe, auth, CMS, custom domain. Fixed price.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Website Development",
  serviceType: "AI website development",
  provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://voltairtech.com/services/ai-websites",
  description:
    "Production AI-powered Next.js websites built and deployed in 48 hours, with auth, CMS, payments, and a custom domain.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "75000",
    description: "AI-powered marketing websites from ₹75,000; full product sites with auth + CMS from ₹1.5L.",
  },
};

export default function AiWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Websites" },
        ]}
        title="AI websites that go live in 48 hours"
        meta="Service · Next.js · Built in Mumbai · Deployed globally"
        lead="We build AI-powered Next.js websites from brief to deployment in a flat 48 hours. No phased approvals, no mock screens, no six-week timelines — a production website with real CMS, real auth, and real integrations, live on your custom domain."
      >
        <h2>What’s included in every 48-hour website</h2>
        <ul>
          <li>Next.js App Router with React Server Components for performance-first rendering</li>
          <li>Streaming UIs — LLM-powered content that loads progressively</li>
          <li>Razorpay &amp; Stripe payment integration — India-first by default</li>
          <li>Authentication (Supabase / NextAuth) with role-based access</li>
          <li>Headless CMS integration (Sanity, Contentful, or Notion-as-CMS)</li>
          <li>Custom domain, SSL, Vercel deployment, error monitoring</li>
          <li>Analytics (Vercel Analytics + optional Mixpanel)</li>
          <li>DPDP Act 2023 compliant privacy policy and consent flows</li>
          <li>Handover doc + 30-day post-ship support window</li>
        </ul>

        <h2>The 48-hour process</h2>
        <p>
          At hour 0, we run a 30-minute scoping call. By hour 12, design tokens, copy, and architecture
          are locked in writing. By hour 36, the real build is running — no placeholders. At hour 48,
          your website is live on Vercel with custom domain, analytics, and a full handover document.
        </p>

        <h2>Who is this for?</h2>
        <ul>
          <li>Startups launching an MVP and needing credibility fast</li>
          <li>Founders who have a product but a placeholder website</li>
          <li>Businesses rebranding with a hard launch deadline</li>
          <li>D2C brands needing a landing page before a campaign drops</li>
        </ul>

        <h2>Tech stack</h2>
        <p>
          Next.js · React Server Components · TypeScript · Supabase · Sanity CMS · Vercel ·
          Razorpay / UPI · Stripe · NextAuth · ElevenLabs (voice, if required) · Claude API (AI features).
        </p>

        <h2>Pricing</h2>
        <p>
          AI-powered marketing websites from <strong>₹75,000</strong>. Full product sites with auth + CMS
          from <strong>₹1.5L</strong>. All quotes are fixed-price with zero scope creep.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>Can you really build a production website in 48 hours?</h3>
        <p>
          Yes. The key is a strict scope lock at hour 12: content, copy, and design tokens are signed off
          before a single line of code is written. We don’t revise during the build window — that discipline
          is what makes 48 hours possible.
        </p>
        <h3>What if I need changes after launch?</h3>
        <p>
          Every website ships with 30 days of free post-launch support. After that, we offer a monthly
          retainer or hand you the codebase — 100% yours either way.
        </p>
        <h3>Do you build e-commerce sites?</h3>
        <p>
          Yes — we build Razorpay-native storefronts with cart, checkout, and order management. WhatsApp
          order flows can be added as a second phase.
        </p>

        <ProseCta label="Start your 48-hour website." />
      </ProsePage>
    </>
  );
}

import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "DPDP Act 2023 & AI — What Every Indian AI Product Must Do",
  description:
    "The Digital Personal Data Protection Act 2023 applies to every AI product handling Indian user data. This guide covers consent, purpose limitation, data localisation, and deletion obligations for AI builders.",
  keywords: [
    "DPDP Act 2023 AI compliance",
    "Digital Personal Data Protection Act AI",
    "data protection India AI",
    "DPDP compliance checklist",
    "Indian AI regulation 2025",
  ],
  alternates: { canonical: "https://voltairtech.com/blog/dpdp-act-2023-ai-compliance" },
  openGraph: {
    type: "article",
    url: "https://voltairtech.com/blog/dpdp-act-2023-ai-compliance",
    title: "DPDP Act 2023 & AI — What Every Indian AI Product Must Do | Voltair Tech",
    description:
      "Consent, purpose limitation, data localisation, and deletion obligations under the DPDP Act 2023 — for AI builders.",
  },
};

const obligations = [
  "Consent — explicit, informed, granular consent before collecting any personal data. No bundled consent forms.",
  "Purpose limitation — data collected for a specific purpose may only be used for that purpose. A chatbot collecting phone numbers for appointments cannot use them for marketing without separate consent.",
  "Data minimisation — collect only what you actually need. A delivery tracking bot doesn’t need the user’s date of birth.",
  "Storage limitation — don’t keep data longer than necessary. Implement automated deletion schedules.",
  "Data localisation — sensitive personal data must be stored on Indian servers. Check your cloud provider’s region settings.",
  "Right to erasure — users can request deletion of their data. Your AI system must have a verifiable, documented deletion mechanism.",
  "Breach notification — notify affected users and the Data Protection Board within 72 hours of discovering a breach.",
];

const faqs = [
  {
    q: "Does DPDP apply to B2B AI products?",
    a: "Yes. If your B2B AI product processes the personal data of individuals (even employees of your clients), DPDP applies. The B2B exemption under DPDP is narrow and does not cover processing of individual personal data.",
  },
  {
    q: "Do US-hosted AI APIs (OpenAI, Anthropic) comply with DPDP?",
    a: "Both OpenAI and Anthropic offer data processing agreements and data residency options, but the default API endpoint sends data to US servers. For sensitive personal data, use a regional deployment in India or implement a data-scrubbing layer before sending to any foreign API.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "DPDP Act 2023 & AI — What Every Indian AI Product Must Do",
      description:
        "A practical guide to DPDP Act 2023 obligations for AI products: consent, purpose limitation, data localisation, and deletion.",
      author: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      publisher: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      mainEntityOfPage: "https://voltairtech.com/blog/dpdp-act-2023-ai-compliance",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function DpdpAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "DPDP Act 2023 & AI" },
        ]}
        title="DPDP Act 2023 and AI: what Indian builders must do right now"
        meta="Guide · Compliance · Voltair Tech, Mumbai"
        lead="The Digital Personal Data Protection Act 2023 is India’s first comprehensive data protection law. It applies to every organisation that processes the personal data of Indian users — including every AI product, chatbot, and automation pipeline."
      >
        <h2>What counts as personal data under DPDP?</h2>
        <p>
          Any data that can identify an individual: name, phone number, email, Aadhaar number, location data,
          IP address, financial data, health records, and any combination that makes identification possible.
          Anonymised data that cannot be re-identified is exempt.
        </p>

        <h2>Sensitive personal data (higher obligations)</h2>
        <ul>
          <li>Financial data (bank account, credit card, transaction history)</li>
          <li>Health and medical data (patient records, prescription history)</li>
          <li>Biometric data (fingerprints, facial recognition)</li>
          <li>Caste or religious data</li>
          <li>Sexual orientation</li>
        </ul>

        <h2>7 DPDP obligations for AI products</h2>
        <ul>
          {obligations.map((o, i) => (
            <li key={o}>
              <strong>{i + 1}.</strong> {o}
            </li>
          ))}
        </ul>

        <h2>DPDP compliance checklist for AI builders</h2>
        <ul>
          <li>Consent UI is explicit and granular</li>
          <li>Privacy policy references the DPDP Act 2023</li>
          <li>Vector database and AI model APIs use Indian or approved data centres</li>
          <li>Deletion endpoint is tested and documented</li>
          <li>Third-party APIs (OpenAI, Anthropic, etc.) have data processing agreements</li>
          <li>Breach notification SLA is defined internally</li>
        </ul>

        <h2>How Voltair Tech handles DPDP by default</h2>
        <p>
          Every product we ship includes: DPDP-compliant consent capture, a tested deletion mechanism, pgvector
          on ap-south-1 (Mumbai) as the default vector store, and a privacy policy that explicitly references
          the DPDP Act 2023. We include DPDP documentation in the handover package.
        </p>

        <h2>FAQs — DPDP and AI</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <ProseCta label="Build a DPDP-compliant AI product — compliance on day one, not as an afterthought." />
      </ProsePage>
    </>
  );
}

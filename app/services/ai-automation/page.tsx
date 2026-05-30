import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "AI Automation & n8n Workflows India — Save 20+ Hours/Week",
  description:
    "Voltair Tech builds n8n automation workflows for Indian businesses — Slack, Sheets, WhatsApp, CRMs, and custom APIs. Trigger-to-action pipelines deployed in 1–2 weeks. Fixed price.",
  keywords: [
    "n8n automation India",
    "business automation Mumbai",
    "workflow automation agency India",
    "AI automation consultant India",
    "RPA alternative India",
  ],
  alternates: { canonical: "https://voltairtech.com/services/ai-automation" },
  openGraph: {
    url: "https://voltairtech.com/services/ai-automation",
    title: "AI Automation & n8n Workflows India | Voltair Tech",
    description:
      "n8n automation workflows connecting Slack, Sheets, WhatsApp, CRMs and custom APIs. Deployed in 1–2 weeks. Fixed price.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation & n8n Workflows",
  serviceType: "Business process automation",
  provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://voltairtech.com/services/ai-automation",
  description:
    "AI-powered n8n automation workflows that connect Slack, Google Sheets, WhatsApp, CRMs, and databases into a single intelligent pipeline.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "25000",
    description: "Simple single-trigger automations from ₹25,000; full multi-step workflow suites from ₹75,000–₹2L.",
  },
};

export default function AiAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Automation" },
        ]}
        title="Stop doing manually what a machine can do in milliseconds"
        meta="Service · n8n workflows · 1–2 week delivery · Fixed price"
        lead="We design and deploy AI-powered n8n automation workflows that connect your existing tools — Slack, Google Sheets, WhatsApp, your CRM, your database — into a single intelligent pipeline. Trigger once, chain infinitely."
      >
        <h2>What we automate</h2>
        <ul>
          <li>Lead capture → CRM entry → WhatsApp welcome message → Slack alert (in under 2 seconds)</li>
          <li>Invoice generation → PDF creation → email dispatch → accounting entry</li>
          <li>Support ticket → AI classification → routing → response draft → agent review</li>
          <li>Social media post scheduling across Instagram, LinkedIn, and X</li>
          <li>Daily reporting: pull from Sheets, transform with an LLM, send to Slack</li>
          <li>E-commerce: order placed → inventory update → dispatch notification → review request</li>
        </ul>

        <h2>Why n8n over Zapier or Make?</h2>
        <p>
          n8n is open-source, self-hostable, and India-optimised. Unlike Zapier, there’s no per-task pricing —
          you pay once for the workflow build, not per execution. We host your n8n instance on a low-cost VPS or
          on your own cloud, so your automations run 24/7 at near-zero marginal cost.
        </p>
        <div className="prose-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>n8n (Voltair)</th>
                <th>Zapier</th>
                <th>Make</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pricing model</td>
                <td><strong>Fixed build fee + cheap hosting</strong></td>
                <td>Per task (expensive at scale)</td>
                <td>Per operation</td>
              </tr>
              <tr>
                <td>Self-hostable</td>
                <td><strong>Yes</strong></td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Custom code nodes</td>
                <td><strong>Full JS / Python</strong></td>
                <td>Limited</td>
                <td>Limited</td>
              </tr>
              <tr>
                <td>DPDP-compliant hosting</td>
                <td><strong>Indian server option</strong></td>
                <td>US-only</td>
                <td>EU / US</td>
              </tr>
              <tr>
                <td>WhatsApp Business API</td>
                <td><strong>Native integration</strong></td>
                <td>Via third-party</td>
                <td>Via third-party</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What’s included in an automation build</h2>
        <ul>
          <li>Discovery session to map your current manual workflows</li>
          <li>n8n workflow design, build, and test in a staging environment</li>
          <li>Error handling, retry logic, and alert notifications</li>
          <li>Documentation: flow diagrams + operator runbook</li>
          <li>30-day post-ship support + monitoring dashboard</li>
        </ul>

        <h2>Pricing</h2>
        <p>
          Simple single-trigger automations from <strong>₹25,000</strong>. Full multi-step workflow suites
          from <strong>₹75,000–₹2L</strong> depending on complexity. All fixed-price.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>Do I need technical knowledge to manage automations?</h3>
        <p>
          No. We build a monitoring dashboard and a plain-language runbook so your ops team can manage triggers,
          pause workflows, and read logs without touching code.
        </p>
        <h3>Can you automate WhatsApp Business workflows?</h3>
        <p>
          Yes — WhatsApp Business API is one of our most common automation targets. We handle Meta verification,
          message templates, and payment triggers natively.
        </p>

        <ProseCta label="Tell us what you do manually — we’ll automate it." />
      </ProsePage>
    </>
  );
}

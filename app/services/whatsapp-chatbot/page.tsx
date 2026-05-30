import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "WhatsApp Chatbot Development India — Hindi, Marathi & English",
  description:
    "Build a WhatsApp Business API chatbot for your Indian business. Native Hindi, Marathi & English support. Razorpay payments, RAG grounding, ElevenLabs voice. Built in Mumbai. From ₹1.5L.",
  keywords: [
    "WhatsApp chatbot India",
    "WhatsApp Business API agency India",
    "WhatsApp bot Hindi Marathi",
    "WhatsApp chatbot for SME India",
    "multilingual WhatsApp bot",
  ],
  alternates: { canonical: "https://voltairtech.com/services/whatsapp-chatbot" },
  openGraph: {
    url: "https://voltairtech.com/services/whatsapp-chatbot",
    title: "WhatsApp Chatbot Development India | Voltair Tech",
    description:
      "WhatsApp Business API chatbots in Hindi, Marathi & English. Razorpay payments, RAG grounding, Meta verification handled. From ₹1.5L.",
  },
};

const faqs = [
  {
    q: "How long does Meta Business Verification take?",
    a: "Typically 3–7 business days for verified businesses. We manage all communications with Meta on your behalf and have templates pre-approved for common Indian business categories.",
  },
  {
    q: "Can the bot handle voice messages in Hindi?",
    a: "Yes — with ElevenLabs voice integration, the bot can both receive voice notes (transcribe to text) and respond with a natural Hindi or Marathi voice.",
  },
  {
    q: "Does the chatbot work with my existing CRM?",
    a: "We integrate with HubSpot, Zoho, Salesforce, Leadsquared, and Freshdesk natively. Custom integrations via webhook for any other system.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Chatbot Development",
      serviceType: "WhatsApp Business API chatbot development",
      provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://voltairtech.com/services/whatsapp-chatbot",
      description:
        "Multilingual WhatsApp Business API chatbots that handle FAQs, collect leads, process orders, and accept payments — in Hindi, Marathi, and English.",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "150000",
        description: "WhatsApp chatbot builds from ₹1.5L; RAG-grounded bots from ₹3L.",
      },
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

export default function WhatsappChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "WhatsApp Chatbot" },
        ]}
        title="A WhatsApp chatbot that speaks your customer’s language"
        meta="Service · WhatsApp Business API · 1-week delivery · From ₹1.5L"
        lead="India runs on WhatsApp — 500 million users, 2 billion messages a day. We build WhatsApp Business API chatbots that handle customer queries, collect leads, process orders, and answer FAQs fluently in Hindi, Marathi, and English, on the same bot."
      >
        <h2>What our WhatsApp bots do</h2>
        <ul>
          <li>Answer FAQs from your own knowledge base (RAG-grounded, zero hallucination)</li>
          <li>Collect and qualify leads — name, budget, requirement — before routing to a human</li>
          <li>Process orders and accept UPI / Razorpay payments inside the chat</li>
          <li>Send appointment confirmations, reminders, and follow-ups</li>
          <li>Escalate complex queries to a live agent with full conversation context</li>
          <li>Broadcast campaigns with personalisation tokens (name, location, last order)</li>
        </ul>

        <h2>Languages supported</h2>
        <p>
          Our bots understand and respond in Hindi (Devanagari + Hinglish), Marathi, English, Tamil, Telugu,
          Bengali, and Gujarati. Language detection is automatic — the bot switches mid-conversation if the
          user switches.
        </p>

        <h2>What we handle end-to-end</h2>
        <ul>
          <li>Meta Business Verification — we manage the entire approval process</li>
          <li>Phone number registration and WhatsApp Business Account setup</li>
          <li>Message template creation and Meta approval</li>
          <li>Conversation flow design with decision trees and AI fallback</li>
          <li>Payment integration: Razorpay, UPI, and Stripe for international clients</li>
          <li>CRM sync: HubSpot, Zoho, Salesforce, or custom webhook</li>
          <li>Analytics dashboard: message volume, drop-off rates, CSAT</li>
        </ul>

        <h2>Pricing</h2>
        <p>
          WhatsApp chatbot builds from <strong>₹1.5L</strong> including Meta verification, 3 conversation flows,
          and 30 days of post-ship support. RAG-grounded bots (with a custom knowledge base) from <strong>₹3L</strong>.
        </p>

        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <ProseCta label="Get a WhatsApp bot for your business — live in one week." />
      </ProsePage>
    </>
  );
}

import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "How to Build a WhatsApp Chatbot for Your Business in India (2025 Guide)",
  description:
    "Step-by-step guide: WhatsApp Business API setup, message templates, bot flow design, Razorpay integration, and Hindi/Marathi support. From India’s leading WhatsApp chatbot agency.",
  keywords: [
    "WhatsApp chatbot India guide",
    "WhatsApp Business API setup India",
    "WhatsApp bot for small business",
    "Meta verification India",
    "WhatsApp chatbot cost India",
  ],
  alternates: { canonical: "https://voltairtech.com/blog/whatsapp-chatbot-business-india" },
  openGraph: {
    type: "article",
    url: "https://voltairtech.com/blog/whatsapp-chatbot-business-india",
    title: "How to Build a WhatsApp Chatbot for Your Business in India (2025 Guide) | Voltair Tech",
    description:
      "WhatsApp Business API setup, message templates, bot flow design, Razorpay integration, and Hindi/Marathi support.",
  },
};

const steps = [
  {
    name: "Get Meta Business Verification",
    text: "Before you can use WhatsApp Business API, your business must be verified by Meta. Requirements: a registered Indian company, a business website, and a phone number not already on WhatsApp. Verification takes 3–7 business days if documents are in order.",
  },
  {
    name: "Choose your API access method",
    text: "Two paths: direct Cloud API access (recommended for new builds — managed by Meta, lower latency) or the legacy on-premises API (being sunset). Voltair Tech uses Cloud API for all new builds.",
  },
  {
    name: "Design your conversation flows",
    text: "Map every intent your customers might express — timings, location, returns, order status. Each intent needs a response flow: a fixed answer, a RAG lookup, or a human escalation trigger.",
  },
  {
    name: "Build the bot and integrate AI",
    text: "A basic button-flow bot handles known intents. An AI-powered bot with a language model at its core handles free-text inputs in Hinglish or Hindi without any hardcoded keyword matching.",
  },
  {
    name: "Add payment integration",
    text: "Until WhatsApp Pay (UPI) reaches full coverage, integrate Razorpay to accept UPI, cards, and net banking inside the conversation using payment links. Customers pay without leaving the app.",
  },
  {
    name: "Test, submit templates, and go live",
    text: "Every outbound message must use a Meta-approved template (24–72 hours to approve). Test all flows in staging with a dedicated test number before going live on the business number.",
  },
];

const faqs = [
  {
    q: "Can a WhatsApp bot respond in Hindi and English on the same number?",
    a: "Yes — language detection is automatic. If a customer sends ‘Namaste, appointment chahiye’, the bot responds in Hindi. If they write ‘I need to rebook my order’, it responds in English. Same bot, same number.",
  },
  {
    q: "What is the difference between WhatsApp Business App and WhatsApp Business API?",
    a: "The Business App is a free mobile app for small businesses — one device, manual responses, basic automation. The Business API connects your business to Meta’s cloud infrastructure, enabling bots, bulk messaging, multi-agent support, and payment integrations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Build a WhatsApp Chatbot for Your Business in India (2025 Guide)",
      description:
        "Step-by-step guide to WhatsApp Business API setup, templates, bot flows, Razorpay integration, and Hindi/Marathi support.",
      author: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      publisher: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      mainEntityOfPage: "https://voltairtech.com/blog/whatsapp-chatbot-business-india",
    },
    {
      "@type": "HowTo",
      name: "How to build a WhatsApp chatbot in India",
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
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

export default function WhatsappGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "WhatsApp Chatbot Guide" },
        ]}
        title="How to build a WhatsApp chatbot for your Indian business"
        meta="Guide · 2025 · Voltair Tech, Mumbai"
        lead="India has 500 million WhatsApp users. Your customers are already there. A WhatsApp Business API chatbot can handle FAQs, collect leads, process orders, and speak Hindi — 24/7, without a support team. Here’s exactly how to build one."
      >
        {steps.map((s, i) => (
          <div key={s.name}>
            <h2>
              Step {i + 1} — {s.name}
            </h2>
            <p>{s.text}</p>
          </div>
        ))}

        <h2>How much does a WhatsApp chatbot cost in India?</h2>
        <p>
          A basic button-flow bot: <strong>₹50,000–₹80,000</strong>. An AI-powered bot with free-text
          understanding and RAG grounding: <strong>₹1.5L–₹3L</strong>. WhatsApp API conversation charges from
          Meta run roughly ₹0.60–₹1.50 per conversation depending on category.
        </p>

        <h2>FAQs</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <ProseCta label="Build your WhatsApp bot with Voltair Tech — 1-week delivery, fixed price." />
      </ProsePage>
    </>
  );
}

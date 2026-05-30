import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Blog — Practical AI Guides for Indian Operators",
  description:
    "In-depth guides on building with AI in India: RAG explained, WhatsApp chatbots, DPDP Act 2023 compliance, and n8n automation. Written by the team that ships AI products.",
  alternates: { canonical: "https://voltairtech.com/blog" },
  openGraph: {
    url: "https://voltairtech.com/blog",
    title: "Blog — Practical AI Guides for Indian Operators | Voltair Tech",
    description:
      "RAG explained, WhatsApp chatbot guide, DPDP Act 2023 & AI compliance — practical AI writing for Indian operators.",
  },
};

const POSTS = [
  {
    slug: "what-is-rag-india",
    kicker: "RAG · Explainer",
    title: "What is RAG (Retrieval-Augmented Generation)? A Plain-English Guide for India",
    excerpt:
      "RAG explained without jargon: what it is, why Indian businesses need it, how it works in 7 steps, and when it beats fine-tuning.",
  },
  {
    slug: "whatsapp-chatbot-business-india",
    kicker: "WhatsApp · How-to",
    title: "How to Build a WhatsApp Chatbot for Your Business in India (2025 Guide)",
    excerpt:
      "Step-by-step: WhatsApp Business API setup, message templates, bot flow design, Razorpay integration, and Hindi/Marathi support.",
  },
  {
    slug: "dpdp-act-2023-ai-compliance",
    kicker: "Compliance · Guide",
    title: "DPDP Act 2023 & AI — What Every Indian AI Product Must Do",
    excerpt:
      "The Digital Personal Data Protection Act 2023 applies to every AI product handling Indian user data. Consent, purpose limitation, data localisation, and deletion obligations explained.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Voltair Tech Blog",
  url: "https://voltairtech.com/blog",
  publisher: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://voltairtech.com/blog/${p.slug}`,
    description: p.excerpt,
    author: { "@type": "Organization", name: "Voltair Tech" },
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        title="Practical AI writing for Indian operators"
        meta="No jargon, no hype — written by the team that ships AI products"
        lead="In-depth guides on building with AI in India: compliance, tools, and how-tos."
      >
        <div className="post-list">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <span className="post-kicker">{p.kicker}</span>
              <h2>{p.title}</h2>
              <p>{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </ProsePage>
    </>
  );
}

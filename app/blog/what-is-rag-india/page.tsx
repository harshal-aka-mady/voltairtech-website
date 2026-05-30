import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "What is RAG (Retrieval-Augmented Generation)? A Plain-English Guide for India",
  description:
    "RAG explained without jargon: what it is, why Indian businesses need it, how it works in 7 steps, and when it beats fine-tuning. With real Indian use cases.",
  keywords: [
    "what is RAG",
    "retrieval augmented generation India",
    "RAG vs fine tuning",
    "RAG system explained",
    "AI on company documents",
  ],
  alternates: { canonical: "https://voltairtech.com/blog/what-is-rag-india" },
  openGraph: {
    type: "article",
    url: "https://voltairtech.com/blog/what-is-rag-india",
    title: "What is RAG? A Plain-English Guide for India | Voltair Tech",
    description:
      "RAG explained without jargon: what it is, why Indian businesses need it, how it works in 7 steps, and when it beats fine-tuning.",
  },
};

const steps = [
  "Ingest: your documents (PDFs, DOCX, web pages, Notion pages) are uploaded into the pipeline.",
  "Chunk: documents are split into retrievable units (paragraphs, sections, ~500-token chunks).",
  "Embed: each chunk is converted to a vector (a list of numbers) by an embedding model.",
  "Store: vectors are stored in a vector database (Pinecone, pgvector, or Supabase).",
  "Query: when a user asks a question, the question is also embedded as a vector.",
  "Retrieve: the system finds the chunks whose vectors are closest to the question vector.",
  "Generate: the LLM receives the question + retrieved chunks and generates an answer that cites the source.",
];

const faqs = [
  {
    q: "Does my data leave India if I use a RAG system?",
    a: "Only if you use a US-hosted vector database. Voltair Tech defaults to pgvector on Supabase with an ap-south-1 (Mumbai) region, keeping your data on Indian servers and aligning with DPDP Act 2023 requirements.",
  },
  {
    q: "How long does it take to build a RAG system?",
    a: "A single-corpus RAG system (one knowledge base, one front-end) takes 2–3 weeks from kickoff to production. Multi-tenant or multi-language systems take 4–6 weeks.",
  },
  {
    q: "Can RAG work in Hindi and Marathi?",
    a: "Yes. Embedding models from Cohere and OpenAI support Indic languages, and the LLM (Claude or GPT-4o) generates fluent Hindi and Marathi responses. Retrieval works regardless of whether the query language matches the document language.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "What is RAG (Retrieval-Augmented Generation)? A Plain-English Guide for India",
      description:
        "RAG explained without jargon: what it is, why Indian businesses need it, how it works in 7 steps, and when it beats fine-tuning.",
      author: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      publisher: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      mainEntityOfPage: "https://voltairtech.com/blog/what-is-rag-india",
    },
    {
      "@type": "HowTo",
      name: "How a RAG system works in 7 steps",
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: `Step ${i + 1}`,
        text: s,
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

export default function WhatIsRagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What is RAG?" },
        ]}
        title="What is RAG? The answer your AI should give instead of guessing"
        meta="Guide · RAG · Voltair Tech, Mumbai"
        lead="RAG stands for Retrieval-Augmented Generation. It is the technique that makes an AI answer questions from your documents instead of its training data — the single most important concept for any Indian business buying or building AI."
      >
        <h2>The problem RAG solves</h2>
        <p>
          Large language models like GPT-4 and Claude are trained on data that ends at a cutoff date. They
          don’t know your product catalogue, your return policy, your employee handbook, or your pricing. Ask
          them and they either refuse or — dangerously — make something up. This is called hallucination.
        </p>
        <p>
          RAG fixes this. Instead of relying on training data, a RAG system retrieves the relevant section of
          your actual documents and passes it to the LLM as context. The model answers based on what it was
          just given, not what it vaguely remembers.
        </p>

        <h2>How a RAG system works — 7 steps</h2>
        <ul>
          {steps.map((s, i) => (
            <li key={s}>
              <strong>Step {i + 1} —</strong> {s}
            </li>
          ))}
        </ul>

        <h2>RAG vs fine-tuning — which does India need?</h2>
        <div className="prose-table-wrap">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>RAG</th>
                <th>Fine-tuning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost</td>
                <td>₹4–8L build, low inference cost</td>
                <td>₹10L+ for a quality fine-tune</td>
              </tr>
              <tr>
                <td>Updating your data</td>
                <td>Instant — add docs to the vector DB</td>
                <td>Requires a full retrain (weeks, expensive)</td>
              </tr>
              <tr>
                <td>Hallucination on your data</td>
                <td>Rare (grounded in your docs)</td>
                <td>Sometimes (learned, not retrieved)</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Knowledge bases, FAQs, policies</td>
                <td>Style/tone adaptation, classification</td>
              </tr>
              <tr>
                <td>India compliance</td>
                <td>Data stays in your control</td>
                <td>Training data must be managed carefully</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Real Indian use cases for RAG</h2>
        <ul>
          <li>A legal firm whose associates query 10 years of case files in plain English</li>
          <li>A manufacturer whose service engineers get instant answers from 2,000-page machine manuals</li>
          <li>A bank whose compliance team checks new contracts against RBI circulars automatically</li>
          <li>A hospital whose WhatsApp bot answers patient questions from the clinic’s protocol documents</li>
        </ul>

        <h2>FAQs — RAG for Indian businesses</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <ProseCta label="Build a RAG system on your documents." />
      </ProsePage>
    </>
  );
}

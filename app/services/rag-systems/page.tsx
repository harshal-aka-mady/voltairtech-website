import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "RAG System Development India — Citation-Grade AI Answers from Your Data",
  description:
    "Voltair Tech builds RAG (Retrieval-Augmented Generation) systems grounded in your documents. Pinecone, pgvector, Supabase. Every answer cites its source. Mumbai team. 2–3 weeks delivery.",
  keywords: [
    "RAG system India",
    "retrieval augmented generation India",
    "custom knowledge base AI",
    "AI on company documents India",
    "enterprise chatbot India",
  ],
  alternates: { canonical: "https://voltairtech.com/services/rag-systems" },
  openGraph: {
    url: "https://voltairtech.com/services/rag-systems",
    title: "RAG System Development India | Voltair Tech",
    description:
      "Production RAG systems grounded in your documents. Pinecone, pgvector, Supabase. Every answer cites its source. 2–3 weeks.",
  },
};

const ragSteps = [
  "Ingest your documents",
  "Chunk them into retrievable units",
  "Embed them as vectors",
  "Store in a vector database (Pinecone or pgvector)",
  "Retrieve the most relevant chunks when a query comes in",
  "Pass them to an LLM with the query",
  "Return an answer that links back to the source document and page number",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RAG System Development",
      serviceType: "Retrieval-Augmented Generation system development",
      provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://voltairtech.com/services/rag-systems",
      description:
        "Production RAG systems grounded in your own documents that give citation-grade answers, built on Pinecone or pgvector.",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "400000",
        description: "RAG systems from ₹4L for a single-corpus deployment to ₹8L+ for multi-tenant, multi-language systems.",
      },
    },
    {
      "@type": "HowTo",
      name: "How a RAG system works",
      step: ragSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: `Step ${i + 1}`,
        text: s,
      })),
    },
  ],
};

export default function RagSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "RAG Systems" },
        ]}
        title="Your AI. Your data. Every answer cited to the source."
        meta="Service · Pinecone / pgvector · 2–3 week delivery"
        lead="RAG (Retrieval-Augmented Generation) is how enterprise AI should work: answers grounded in your policies, your manuals, your product docs — not the model’s training data. We build production RAG systems that give citation-grade answers, every time."
      >
        <h2>What is a RAG system?</h2>
        <p>A RAG system works in seven stages:</p>
        <ul>
          {ragSteps.map((s, i) => (
            <li key={s}>
              <strong>Step {i + 1}:</strong> {s}
            </li>
          ))}
        </ul>
        <p>
          The result: an AI that knows exactly what your organisation knows, never makes things up, and shows
          its work.
        </p>

        <h2>When do you need a RAG system?</h2>
        <ul>
          <li>Customer support chatbot grounded in product documentation</li>
          <li>HR bot that answers policy questions from your employee handbook</li>
          <li>Legal assistant that searches contracts and flags risk clauses</li>
          <li>Healthcare clinic FAQ bot trained on treatment protocols (DPDP-compliant)</li>
          <li>Internal knowledge base search across Notion, Confluence, or Google Drive</li>
          <li>Compliance tool that checks new contracts against regulatory documents</li>
        </ul>

        <h2>Our tech stack for RAG</h2>
        <p>
          <strong>Vector databases:</strong> Pinecone (managed, production-grade) · pgvector on Supabase
          (cost-optimised). <strong>Embedding models:</strong> OpenAI text-embedding-3-large · Cohere · Nomic.
          <strong> LLMs:</strong> Claude (Anthropic) · GPT-4o · Gemini. <strong>Frameworks:</strong> LangChain ·
          LlamaIndex · custom pipelines.
        </p>

        <h2>Deliverables</h2>
        <ul>
          <li>Ingestion pipeline (PDF, DOCX, XLSX, web pages, Notion, Confluence)</li>
          <li>Chunking strategy tuned to your document type (policies vs manuals vs FAQs)</li>
          <li>Vector database setup with metadata filters (department, language, date)</li>
          <li>Retrieval pipeline with hybrid search (vector + BM25)</li>
          <li>Guardrails: hallucination detection, out-of-scope deflection</li>
          <li>Front-end: chat UI, WhatsApp integration, or API endpoint</li>
          <li>Monitoring: query logs, citation-accuracy dashboard, re-ranking controls</li>
        </ul>

        <h2>Pricing</h2>
        <p>
          RAG systems from <strong>₹4L</strong> for a single-corpus deployment to <strong>₹8L+</strong> for
          multi-tenant, multi-language enterprise systems. Delivered in 2–3 weeks.
        </p>

        <ProseCta label="Tell us what documents you want your AI to know." />
      </ProsePage>
    </>
  );
}

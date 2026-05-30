import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { RagShowcase } from "@/components/RagShowcase";

export const metadata: Metadata = {
  title: "RAG System Configuration — Citation-Grade AI Answers from Your Data",
  description:
    "How Voltair Tech builds RAG (retrieval-augmented generation) systems: ingest, chunk, embed, vector DB, retrieve, LLM, and cited answers. Pinecone, pgvector, Supabase. Mumbai, India.",
  alternates: { canonical: "https://voltairtech.com/rag" },
  openGraph: {
    url: "https://voltairtech.com/rag",
    title: "RAG System Configuration — Citation-Grade AI Answers | Voltair Tech",
    description:
      "Build a RAG system grounded on your own data. Every answer links back to the source chunk. Voltair Tech, Mumbai.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "RAG System Configuration — Citation-Grade Answers Grounded in Your Data",
  description:
    "A walkthrough of the 7-stage RAG pipeline: ingest, chunk, embed, vector DB, retrieve, LLM, answer with citations.",
  author: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  publisher: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
};

export default function RagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageLayout>
        <RagShowcase />
      </PageLayout>
    </>
  );
}

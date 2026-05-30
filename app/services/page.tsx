import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Services — Apps, Chatbots, RAG, Mobile & Automation",
  description:
    "Six AI services from Voltair Tech Mumbai: websites in 48 hrs, AI automation, WhatsApp chatbots, RAG systems, mobile apps, and custom AI software. Fixed-price, Indian operators.",
  alternates: { canonical: "https://voltairtech.com/services" },
  openGraph: {
    url: "https://voltairtech.com/services",
    title: "AI Services — Apps, Chatbots, RAG, Mobile & Automation | Voltair Tech",
    description:
      "Six AI services from Voltair Tech Mumbai: websites in 48 hrs, AI automation, WhatsApp chatbots, RAG systems, mobile apps, and custom AI software.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Voltair Tech AI Services",
  itemListElement: CONTENT.services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://voltairtech.com/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageLayout>
        <Services />
        <Process />
      </PageLayout>
    </>
  );
}

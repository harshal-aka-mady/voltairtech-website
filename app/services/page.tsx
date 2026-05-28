import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";

export const metadata: Metadata = {
  title: "AI Services — Apps, Chatbots, RAG, Mobile & Automation",
  description:
    "Six AI services from Voltaire Tech Mumbai: websites in 48 hrs, AI automation, WhatsApp chatbots, RAG systems, mobile apps, and custom AI software. Fixed-price, Indian operators.",
  alternates: { canonical: "https://voltairtech.com/services" },
  openGraph: {
    url: "https://voltairtech.com/services",
    title: "AI Services — Apps, Chatbots, RAG, Mobile & Automation | Voltaire Tech",
    description:
      "Six AI services from Voltaire Tech Mumbai: websites in 48 hrs, AI automation, WhatsApp chatbots, RAG systems, mobile apps, and custom AI software.",
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <Services />
      <Process />
    </PageLayout>
  );
}

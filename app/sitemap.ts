import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://voltairtech.com";
  const now = new Date("2026-05-30");

  return [
    { url: `${base}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/ai-websites`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-automation`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/whatsapp-chatbot`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/rag-systems`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/mobile-apps`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-ai-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/timeline`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rag`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,     lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/blog/what-is-rag-india`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/whatsapp-chatbot-business-india`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/dpdp-act-2023-ai-compliance`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dpdp`,     lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
  ];
}

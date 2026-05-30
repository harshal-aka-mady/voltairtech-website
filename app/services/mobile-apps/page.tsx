import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { ProseCta } from "@/components/ProseCta";

export const metadata: Metadata = {
  title: "React Native Mobile App Development Mumbai — iOS & Android",
  description:
    "Voltair Tech builds React Native mobile apps with on-device ML, AI features, and Play Store & App Store deployment. Mumbai team. 4–8 week delivery. Fixed price from ₹8L.",
  keywords: [
    "React Native agency India",
    "mobile app developer Mumbai",
    "AI mobile app development India",
    "cross-platform app India",
    "mobile app startup India",
  ],
  alternates: { canonical: "https://voltairtech.com/services/mobile-apps" },
  openGraph: {
    url: "https://voltairtech.com/services/mobile-apps",
    title: "React Native Mobile App Development Mumbai | Voltair Tech",
    description:
      "React Native + Expo apps for iOS and Android with AI built in. Play Store & App Store deployment. From ₹8L.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  serviceType: "React Native mobile app development",
  provider: { "@type": "Organization", name: "Voltair Tech", url: "https://voltairtech.com" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://voltairtech.com/services/mobile-apps",
  description:
    "React Native + Expo mobile apps for iOS and Android with AI features, on-device ML, and store deployment.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "800000",
    description: "React Native apps from ₹8L (simple MVP) to ₹15L+ (complex multi-role apps).",
  },
};

export default function MobileAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProsePage
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mobile Apps" },
        ]}
        title="One codebase. Two stores. AI built in from day one."
        meta="Service · React Native + Expo · 4–8 week delivery · From ₹8L"
        lead="We build React Native + Expo mobile apps for iOS and Android simultaneously. Every app includes AI features — voice agents, on-device ML, or LLM-powered search — as standard, not an add-on."
      >
        <h2>What we build</h2>
        <ul>
          <li>Consumer apps (marketplaces, social, D2C shopping, booking)</li>
          <li>Enterprise tools (field service, internal dashboards, sales apps)</li>
          <li>Healthcare apps (teleconsultation, medication reminders, DPDP-compliant patient data)</li>
          <li>Fintech apps (UPI integration, portfolio trackers, loan apps)</li>
          <li>EdTech apps (AI tutors, video courses, progress tracking)</li>
        </ul>

        <h2>AI capabilities we ship in mobile apps</h2>
        <p>
          On-device ML with Vision Camera + TensorFlow Lite · LLM-powered in-app search · voice agents with
          ElevenLabs · Indic language support (Hindi, Marathi, Tamil) · AI-personalised recommendations ·
          RAG-grounded in-app chatbots.
        </p>

        <h2>Pricing</h2>
        <p>
          React Native apps from <strong>₹8L</strong> (simple MVP) to <strong>₹15L+</strong> (complex
          multi-role apps). Includes Play Store + App Store submission, one round of review fixes, and 30-day
          post-launch support.
        </p>

        <ProseCta label="Share your app brief — get a fixed-price quote in 24 hours." />
      </ProsePage>
    </>
  );
}

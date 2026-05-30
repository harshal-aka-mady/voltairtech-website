import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { WhyIndia } from "@/components/WhyIndia";
import { MarqueeSection } from "@/components/MarqueeSection";

export const metadata: Metadata = {
  title: "Why Voltair Tech — Indian Operators, Global Standards",
  description:
    "Why choose Voltair Tech over in-house hires or Upwork freelancers: 48-hour delivery, native Indic language support, DPDP Act 2023 compliance, Razorpay-native, EU + APAC + IST time zones.",
  alternates: { canonical: "https://voltairtech.com/work" },
  openGraph: {
    url: "https://voltairtech.com/work",
    title: "Why Voltair Tech — Indian Operators, Global Standards",
    description:
      "DPDP Act 2023 compliant. Razorpay-native. Websites in 48 hours. See how we compare to in-house hires and freelancers.",
  },
};

export default function WorkPage() {
  return (
    <PageLayout>
      <WhyIndia />
      <MarqueeSection />
    </PageLayout>
  );
}

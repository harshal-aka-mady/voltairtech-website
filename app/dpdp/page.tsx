import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "DPDP Act 2023 Compliance",
  description:
    "How Voltair Tech complies with India's Digital Personal Data Protection (DPDP) Act 2023 — data principal rights, consent framework, and grievance redressal.",
  alternates: {
    canonical: "https://voltairtech.com/dpdp",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "DPDP Act 2023 Compliance — Voltair Tech",
  url: "https://voltairtech.com/dpdp",
  description:
    "Voltair Tech's compliance framework under India's Digital Personal Data Protection Act 2023.",
  publisher: {
    "@type": "Organization",
    name: "Voltair Tech",
    url: "https://voltairtech.com",
  },
};

export default function DpdpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout title="DPDP Act 2023 — Our Compliance Framework" lastUpdated="May 2026">
        <p>
          India&apos;s Digital Personal Data Protection (DPDP) Act 2023 is a landmark law that
          governs how organisations collect, process, and store personal data of Indian citizens.
          Voltair Tech takes compliance seriously. This page explains how we implement our
          obligations as a Data Fiduciary and how you can exercise your rights as a Data
          Principal.
        </p>

        <h2>What is the DPDP Act 2023?</h2>
        <p>
          The DPDP Act 2023 (Digital Personal Data Protection Act, 2023) establishes a
          rights-based framework for personal data protection in India. It defines the
          responsibilities of Data Fiduciaries (organisations that process data) and grants
          Data Principals (individuals) specific rights over their personal data.
        </p>
        <p>
          The Act requires lawful, purpose-limited processing; valid consent or legitimate use;
          data minimisation; security safeguards; and mechanisms for grievance redressal.
        </p>

        <h2>Our Role as Data Fiduciary</h2>
        <p>
          When you share personal data with Voltair Tech — via our website, email, WhatsApp,
          or phone — we act as a Data Fiduciary. We determine the purpose and means of
          processing your data and are accountable for its protection.
        </p>
        <p>
          Where we process personal data on behalf of our clients (e.g., user data within an
          app we build), we act as a Data Processor. In those cases, the client is the Data
          Fiduciary and we process data only on their documented instructions.
        </p>

        <h2>Consent Framework</h2>
        <p>
          We collect consent at the point of data collection. Our consent notices are:
        </p>
        <ul>
          <li><strong>Clear</strong> — written in plain English (and available in Hindi on request), not legalese.</li>
          <li><strong>Specific</strong> — we state exactly what data we collect and why.</li>
          <li><strong>Granular</strong> — consent for marketing is separate from consent required for service delivery.</li>
          <li><strong>Revocable</strong> — you can withdraw consent at any time with the same ease as it was given.</li>
        </ul>
        <p>
          We do not use pre-ticked boxes, dark patterns, or bundled consent. Where we rely on
          &quot;legitimate interests&quot; rather than consent, we document this and ensure it does not
          override your fundamental rights.
        </p>

        <h2>Your Rights as a Data Principal</h2>
        <p>Under Section 11–14 of the DPDP Act 2023, you have the right to:</p>
        <ul>
          <li>
            <strong>Right to access (Section 11)</strong> — Request a summary of personal data
            we hold about you and the purposes for which it is processed.
          </li>
          <li>
            <strong>Right to correction and erasure (Section 12)</strong> — Request that we
            correct inaccurate or incomplete data, and request erasure of data processed on the
            basis of consent (subject to legal retention obligations).
          </li>
          <li>
            <strong>Right to grievance redressal (Section 13)</strong> — Lodge a grievance with
            our Grievance Officer and receive a response within 30 days.
          </li>
          <li>
            <strong>Right to nominate (Section 14)</strong> — Nominate another individual to
            exercise your rights on your behalf in the event of your death or incapacity.
          </li>
        </ul>

        <h2>Significant Data Fiduciary</h2>
        <p>
          Voltair Tech does not currently meet the thresholds to be designated a Significant
          Data Fiduciary by the Central Government. We will update this page and our compliance
          programme if we are designated in the future.
        </p>

        <h2>Cross-Border Data Transfers</h2>
        <p>
          Some of our service providers (e.g., Vercel for hosting, OpenAI/Anthropic for LLM
          inference) process data outside India. We ensure such transfers are to countries
          notified by the Central Government as providing adequate data protection, or are
          covered by appropriate contractual safeguards. We will update this section as the
          government&apos;s notification list evolves.
        </p>

        <h2>Data Localisation</h2>
        <p>
          For client projects involving sensitive personal data, we can configure infrastructure
          to store data within India (e.g., AWS ap-south-1, Supabase India region) on request.
          Discuss this requirement during your scoping call.
        </p>

        <h2>Security Measures</h2>
        <p>
          We implement reasonable security safeguards as required by Section 8(5) of the Act,
          including:
        </p>
        <ul>
          <li>TLS 1.2+ encryption for all data in transit.</li>
          <li>Encryption at rest for databases holding personal data.</li>
          <li>Role-based access controls and least-privilege principles.</li>
          <li>Regular security reviews and dependency audits.</li>
          <li>Incident response procedures with breach notification obligations.</li>
        </ul>

        <h2>Data Breach Notification</h2>
        <p>
          In the event of a personal data breach, we will notify the Data Protection Board of
          India and affected data principals in accordance with the timelines prescribed by the
          Act and associated rules. We maintain an incident log and conduct post-incident reviews.
        </p>

        <h2>Grievance Redressal</h2>
        <div className="legal-page__contact">
          <p>
            To exercise any of your rights or raise a data protection concern, contact our
            Grievance Officer:
            <br /><br />
            <strong>Grievance Officer — Voltair Tech</strong><br />
            Andheri West, Mumbai, Maharashtra 400053, India<br />
            Email: <a href="mailto:business@voltairtech.com">business@voltairtech.com</a><br />
            Phone: +91 70210 00764<br />
            Response time: within 30 days of receipt.<br /><br />
            If you are not satisfied with our response, you may escalate your complaint to the
            <strong> Data Protection Board of India</strong> once the Board is constituted under
            the DPDP Act 2023.
          </p>
        </div>
      </LegalLayout>
    </>
  );
}

import type { ServiceGlyphKind } from "@/lib/content";

const stroke = "#E63946";
const sw = 1.5;

export function ServiceGlyph({ kind }: { kind: ServiceGlyphKind }) {
  switch (kind) {
    case "web":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <rect x="6" y="10" width="44" height="32" rx="3" stroke={stroke} strokeWidth={sw} />
          <line x1="6" y1="18" x2="50" y2="18" stroke={stroke} strokeWidth={sw} />
          <circle cx="11" cy="14" r="1" fill={stroke} />
          <circle cx="15" cy="14" r="1" fill={stroke} />
          <circle cx="19" cy="14" r="1" fill={stroke} />
          <rect x="12" y="24" width="22" height="3" rx="1" fill="#F5F5F0" opacity="0.5" />
          <rect x="12" y="30" width="14" height="3" rx="1" fill="#F5F5F0" opacity="0.3" />
        </svg>
      );
    case "auto":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <circle cx="10" cy="14" r="4" stroke={stroke} strokeWidth={sw} />
          <circle cx="46" cy="14" r="4" stroke={stroke} strokeWidth={sw} />
          <circle cx="28" cy="42" r="4" stroke={stroke} strokeWidth={sw} />
          <path d="M13 18 L26 38 M43 18 L30 38 M14 14 L42 14" stroke="#F5F5F0" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <rect x="6" y="12" width="44" height="26" rx="6" stroke={stroke} strokeWidth={sw} />
          <path d="M18 38 L22 46 L28 38" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <circle cx="20" cy="25" r="1.8" fill="#F5F5F0" />
          <circle cx="28" cy="25" r="1.8" fill="#F5F5F0" />
          <circle cx="36" cy="25" r="1.8" fill="#F5F5F0" />
        </svg>
      );
    case "rag":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <rect x="8" y="8" width="40" height="40" rx="2" stroke={stroke} strokeWidth={sw} />
          <path d="M8 20 H48 M8 32 H48 M20 8 V48 M32 8 V48" stroke="#F5F5F0" strokeWidth="1" opacity="0.4" />
          <circle cx="14" cy="14" r="2" fill="#D9FF00" />
          <circle cx="26" cy="26" r="2" fill="#D9FF00" />
          <circle cx="38" cy="20" r="2" fill="#D9FF00" />
          <circle cx="42" cy="38" r="2" fill="#D9FF00" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <rect x="18" y="6" width="20" height="44" rx="4" stroke={stroke} strokeWidth={sw} />
          <line x1="18" y1="14" x2="38" y2="14" stroke={stroke} strokeWidth={sw} />
          <line x1="18" y1="42" x2="38" y2="42" stroke={stroke} strokeWidth={sw} />
          <circle cx="28" cy="46" r="1.5" fill={stroke} />
          <rect x="22" y="18" width="12" height="3" rx="1" fill="#F5F5F0" opacity="0.5" />
          <rect x="22" y="24" width="8" height="3" rx="1" fill="#F5F5F0" opacity="0.3" />
        </svg>
      );
    case "soft":
      return (
        <svg viewBox="0 0 56 56" fill="none">
          <path d="M18 6 L8 28 L18 50" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M38 6 L48 28 L38 50" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M32 8 L24 48" stroke="#F5F5F0" strokeWidth={sw} strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}

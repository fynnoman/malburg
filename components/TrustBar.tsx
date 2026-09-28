import { SITE } from "@/lib/data";

type Item = {
  label: string;
  detail?: string;
};

const DEFAULT_ITEMS: Item[] = [
  { label: "Familienbetrieb", detail: `seit ${SITE.founded}` },
  { label: "In eigener Werkstatt", detail: "gefertigt" },
  { label: "Meisterbetrieb", detail: "Handwerkskammer" },
  { label: "Innung Saar", detail: "Mitglied" },
  { label: "Standort", detail: `${SITE.address.city}` },
];

export function TrustBar({ items = DEFAULT_ITEMS }: { items?: Item[] }) {
  return (
    <div className="border-y border-walnut-500/10 bg-cream-100/70 backdrop-blur">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-5 md:py-6">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-baseline gap-2 text-[0.88rem]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="text-walnut-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-medium text-ink">{it.label}</span>
              {it.detail && (
                <span className="text-ink-muted">{it.detail}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

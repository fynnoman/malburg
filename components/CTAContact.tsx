import Link from "next/link";
import { SITE } from "@/lib/data";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  variant?: "warm" | "quiet";
};

export function CTAContact({
  eyebrow = "Beratung",
  title = "Für Ihre Wünsche nehmen wir uns Zeit.",
  body = "Rufen Sie uns an oder schreiben Sie uns eine kurze Nachricht. Wir melden uns zeitnah zurück.",
  variant = "warm",
}: Props) {
  return (
    <section
      className={[
        "section",
        variant === "quiet" ? "tone-quiet" : "bg-cream-100/70",
      ].join(" ")}
    >
      <div className="container-page grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="eyebrow">{eyebrow}</div>
          <h2
            className={[
              "h-serif mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)]",
              variant === "quiet" ? "text-ink" : "text-walnut-500",
            ].join(" ")}
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
              {SITE.phone} anrufen
            </a>
            <Link href="/kontakt" className="btn-ghost">
              Zum Kontaktformular
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="eyebrow">Werkstatt & Büro</div>
            <div className="h-serif mt-3 text-[1.5rem] text-walnut-500">
              {SITE.name}
            </div>
            <div className="mt-4 grid gap-2 text-[0.98rem] text-ink-soft">
              <div>{SITE.address.street}</div>
              <div>
                {SITE.address.zip} {SITE.address.city}
              </div>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-3 link-formal"
              >
                {SITE.phone}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

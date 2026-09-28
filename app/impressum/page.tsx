import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <div className="eyebrow">Rechtliches</div>
        <h1 className="h-serif mt-4 text-[clamp(2rem,4vw,3rem)] text-walnut-500">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-[1rem] leading-relaxed text-ink-soft">
          <div>
            <h2 className="h-serif text-[1.25rem] text-ink">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              {SITE.name}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
            </p>
          </div>

          <div>
            <h2 className="h-serif text-[1.25rem] text-ink">Vertreten durch</h2>
            <p className="mt-3">
              {SITE.leadership.map((l) => l.name).join(" und ")}
            </p>
          </div>

          <div>
            <h2 className="h-serif text-[1.25rem] text-ink">Kontakt</h2>
            <p className="mt-3">Telefon: {SITE.phone}</p>
          </div>

          <div className="rounded-2xl border border-walnut-500/10 bg-cream-100 p-6 text-[0.95rem]">
            <p>
              Hinweis: Weitere Pflichtangaben wie Umsatzsteuer-Identifikationsnummer,
              zuständige Kammer, verantwortlich für redaktionelle Inhalte
              oder eine EU-Streitschlichtungsplattform ergänzen Sie bitte
              nach Freigabe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

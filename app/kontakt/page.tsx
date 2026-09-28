import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Schreinerei Malburg, ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}. Telefon ${SITE.phone}. Für Bestattungen rund um die Uhr erreichbar.`,
};

export default function KontaktPage() {
  return (
    <>
      {/* Kein Hero-Bild — klare, transaktionale Seite */}
      <section className="pt-32 md:pt-44">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] uppercase tracking-[0.28em] text-walnut-400">
                Kontakt
              </div>
              <h1 className="h-serif mt-5 text-[clamp(2.6rem,5.4vw,4.6rem)] text-walnut-500">
                Kurz mit uns sprechen.
              </h1>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
                Am schnellsten geht es telefonisch. Für die Schreinerei
                werktags, für Bestattungen rund um die Uhr, auch an
                Wochenenden und Feiertagen.
              </p>

              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-10 group inline-flex flex-col rounded-3xl border border-walnut-500/10 bg-cream-100 p-6 md:p-8 hover:bg-cream-50 transition-colors"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.24em] text-walnut-400">
                  Direkte Durchwahl
                </span>
                <span className="h-serif mt-3 text-[clamp(2rem,4vw,3rem)] text-walnut-500 group-hover:underline">
                  {SITE.phone}
                </span>
                <span className="mt-2 text-[0.9rem] text-ink-muted">
                  Persönlich · keine Warteschleife
                </span>
              </a>

              <div className="mt-8 space-y-1 text-[1rem] text-ink-soft">
                <div className="h-serif text-[1.1rem] text-ink">{SITE.name}</div>
                <div>{SITE.address.street}</div>
                <div>
                  {SITE.address.zip} {SITE.address.city}
                </div>
              </div>

              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${SITE.name}, ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-walnut-500 hover:underline"
              >
                Route in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M14 5h5v5" />
                  <path d="M20 5L10 15" />
                  <path d="M20 14v5h-5" />
                  <path d="M4 4h5v5" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <form
                className="grid gap-4 rounded-3xl bg-cream-100 p-6 md:p-10"
                action="mailto:info@schreinerei-malburg.de"
                method="post"
                encType="text/plain"
              >
                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-walnut-400">
                    Projektanfrage
                  </div>
                  <h2 className="h-serif mt-2 text-[clamp(1.6rem,2.8vw,2.2rem)] text-walnut-500">
                    Beschreiben Sie kurz Ihr Vorhaben.
                  </h2>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[0.85rem] font-medium text-ink-soft">Name</span>
                    <input
                      required
                      name="Name"
                      className="rounded-xl border border-walnut-500/15 bg-white/70 px-4 py-3 text-[0.98rem] outline-none focus:border-walnut-500/40"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-[0.85rem] font-medium text-ink-soft">Telefon</span>
                    <input
                      name="Telefon"
                      className="rounded-xl border border-walnut-500/15 bg-white/70 px-4 py-3 text-[0.98rem] outline-none focus:border-walnut-500/40"
                    />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-[0.85rem] font-medium text-ink-soft">E-Mail</span>
                  <input
                    required
                    type="email"
                    name="Email"
                    className="rounded-xl border border-walnut-500/15 bg-white/70 px-4 py-3 text-[0.98rem] outline-none focus:border-walnut-500/40"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.85rem] font-medium text-ink-soft">Bereich</span>
                  <select
                    name="Bereich"
                    className="rounded-xl border border-walnut-500/15 bg-white/70 px-4 py-3 text-[0.98rem] outline-none focus:border-walnut-500/40"
                  >
                    <option>Bauschreinerei</option>
                    <option>Möbelschreinerei</option>
                    <option>Küche</option>
                    <option>Restaurierung</option>
                    <option>Bestattungen</option>
                    <option>Bestattungsvorsorge</option>
                    <option>Sonstiges</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.85rem] font-medium text-ink-soft">
                    Ihre Nachricht
                  </span>
                  <textarea
                    required
                    name="Nachricht"
                    rows={6}
                    className="rounded-xl border border-walnut-500/15 bg-white/70 px-4 py-3 text-[0.98rem] outline-none focus:border-walnut-500/40"
                  />
                </label>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-primary">
                    Anfrage senden
                  </button>
                  <span className="text-[0.8rem] text-ink-muted">
                    Alternativ: Anruf unter {SITE.phone}.
                  </span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kleine Werkstatt-Zeile zum Abschluss */}
      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-walnut-500/10">
              <img
                src={IMG.workshopWide}
                alt="Werkstatt in Schiffweiler"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:pl-6">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-walnut-400">
              Werkstatt
            </div>
            <h2 className="h-serif mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)] text-walnut-500">
              Kommen Sie vorbei.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
              Werktags treffen Sie uns in der Werkstatt in {SITE.address.city}.
              Für einen Beratungstermin bei Ihnen zu Hause reicht ein kurzer
              Anruf.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

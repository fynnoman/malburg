import type { Metadata } from "next";
import Link from "next/link";
import { EditorialTOC } from "@/components/EditorialTOC";
import { BigFinalCTA } from "@/components/BigFinalCTA";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { BESTATTUNG_GROUPS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bestattungen",
  description:
    "Bestattungsdienst der Schreinerei Malburg in Schiffweiler. Erd-, Feuer-, Baum- und Seebestattung, Trauerfeier und Vorsorge. Rund um die Uhr erreichbar. Mitglied der Innung der Bestatter im Saarland.",
};

const SECTIONS = [
  { id: "moment", label: "Der Moment" },
  { id: "so-sind-wir-da", label: "So sind wir für Sie da" },
  { id: "bestattungsarten", label: "Bestattungsarten" },
  { id: "leistungen", label: "Leistungen" },
  { id: "vorsorge", label: "Vorsorge" },
  { id: "kosten", label: "Kosten" },
  { id: "erreichbarkeit", label: "Erreichbarkeit" },
];

export default function BestattungenPage() {
  return (
    <>
      {/* RUHIGER HERO: zentriert, dunkelgrau, kein Overlay-Chaos */}
      <section className="relative flex items-end overflow-hidden bg-ink text-cream-50 -mt-24 min-h-[calc(85svh+96px)] md:min-h-[calc(92svh+96px)]">
        <img
          src={IMG.calmDark}
          alt="Ruhiger Landschaftsblick"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" aria-hidden />
        <div className="container-page pb-16 pt-28 md:pb-24 md:pt-40">
          <Reveal>
            <div className="text-[0.72rem] uppercase tracking-[0.3em] text-cream-100/70">
              Bereich 02 · Bestattungen
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-serif mt-8 max-w-4xl text-[clamp(2.4rem,5.4vw,5rem)] italic text-cream-50">
              Ein Abschied,
              <br />
              der bleibt.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Streifen: 24 Stunden erreichbar */}
      <section className="bg-cream-100">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <div className="text-[0.98rem] text-ink-soft">
            Im Trauerfall rund um die Uhr für Sie erreichbar, auch nachts und an Feiertagen.
          </div>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-3 text-walnut-500 hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M22 16v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2z" />
            </svg>
            <span className="h-serif text-[1.4rem]">{SITE.phone}</span>
          </a>
        </div>
      </section>

      {/* EDITORIAL LAYOUT: Sidebar-TOC + Reading Column */}
      <section className="py-16 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <EditorialTOC items={SECTIONS} />
            </div>
          </aside>

          <div className="md:col-span-9 md:pl-6">
            <article className="max-w-[62ch] space-y-24">
              {/* Abschnitt: Der Moment */}
              <section id="moment" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 01</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  Der Moment, in dem man kaum atmen kann.
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  Wenn ein geliebter Mensch stirbt, wird die Welt für einen
                  Augenblick sehr still. In dieser Stille übernehmen wir das,
                  was jetzt getan werden muss. Wir handeln leise, sorgfältig
                  und mit dem Respekt, den dieser Moment verdient.
                </p>
                <p className="mt-4 text-[1.08rem] leading-relaxed text-ink-soft">
                  Sie behalten die Ruhe. Wir kümmern uns.
                </p>
              </section>

              {/* Grosses ruhiges Bild als Zäsur */}
              <figure className="relative -mx-4 md:-mx-16">
                <img
                  src={IMG.calmForest}
                  alt="Ruhiger Wald mit weichem Licht"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </figure>

              {/* So sind wir da */}
              <section id="so-sind-wir-da" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 02</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  So sind wir für Sie da.
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  Vom ersten Anruf bis zur Beisetzung bleiben Sie mit denselben
                  Ansprechpartnern in Kontakt. Wir übernehmen die Wege zu
                  Behörden, planen die Trauerfeier und begleiten Sie auch in
                  den Wochen danach.
                </p>
                <ol className="mt-10 space-y-8">
                  {[
                    {
                      n: "I",
                      t: "Anruf und erstes Gespräch",
                      b: "Ein kurzer Anruf reicht. Wir kommen zu Ihnen oder besprechen die nächsten Schritte am Telefon.",
                    },
                    {
                      n: "II",
                      t: "Übernahme aller Formalitäten",
                      b: "Sterbeurkunde, Meldungen bei Krankenkasse, Rentenversicherung und Versicherungen. Wir bringen die Wege für Sie zu Ende.",
                    },
                    {
                      n: "III",
                      t: "Vorbereitung der Feier",
                      b: "Trauerdruck, Musik, Blumenschmuck und alle Absprachen mit Friedhof und Kirche.",
                    },
                    {
                      n: "IV",
                      t: "Begleitung danach",
                      b: "Auch nach der Beisetzung. Für Danksagungen, Grabpflege oder offene Fragen.",
                    },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-6">
                      <span className="h-serif w-10 shrink-0 text-[1.4rem] italic text-ink-muted">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="h-serif text-[1.25rem] text-ink">{s.t}</h3>
                        <p className="mt-2 text-[1rem] leading-relaxed text-ink-soft">
                          {s.b}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Bestattungsarten */}
              <section id="bestattungsarten" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 03</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  {BESTATTUNG_GROUPS[0].title}
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  {BESTATTUNG_GROUPS[0].intro}
                </p>
                <dl className="mt-10 space-y-8">
                  {BESTATTUNG_GROUPS[0].items.map((it) => (
                    <div key={it.title}>
                      <dt className="h-serif text-[1.2rem] text-ink">{it.title}</dt>
                      <dd className="mt-2 text-[1rem] leading-relaxed text-ink-soft">
                        {it.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Ruhiges Bild-Duo */}
              <figure className="grid grid-cols-2 gap-3">
                <img
                  src={IMG.candle1}
                  alt="Kerze im ruhigen Licht"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                <img
                  src={IMG.flower}
                  alt="Blume als Erinnerung"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </figure>

              {/* Leistungen */}
              <section id="leistungen" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 04</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  {BESTATTUNG_GROUPS[1].title}
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  {BESTATTUNG_GROUPS[1].intro}
                </p>
                <dl className="mt-10 space-y-8">
                  {BESTATTUNG_GROUPS[1].items.map((it) => (
                    <div key={it.title}>
                      <dt className="h-serif text-[1.2rem] text-ink">{it.title}</dt>
                      <dd className="mt-2 text-[1rem] leading-relaxed text-ink-soft">
                        {it.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Vorsorge */}
              <section id="vorsorge" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 05</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  {BESTATTUNG_GROUPS[2].title}
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  {BESTATTUNG_GROUPS[2].intro}
                </p>
                <dl className="mt-10 space-y-8">
                  {BESTATTUNG_GROUPS[2].items.map((it) => (
                    <div key={it.title}>
                      <dt className="h-serif text-[1.2rem] text-ink">{it.title}</dt>
                      <dd className="mt-2 text-[1rem] leading-relaxed text-ink-soft">
                        {it.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Kosten */}
              <section id="kosten" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 06</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  Transparente Kosten.
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  Sie erhalten eine schriftliche Aufstellung aller Positionen,
                  bevor wir tätig werden. Nichts wird stillschweigend
                  hinzugefügt. Auf Wunsch beraten wir Sie zur
                  Sterbegeldabsicherung und Vorsorge über ein Treuhandkonto.
                </p>
              </section>

              {/* Erreichbarkeit */}
              <section id="erreichbarkeit" className="scroll-mt-28">
                <div className="eyebrow">Kapitel 07</div>
                <h2 className="h-serif mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  Immer erreichbar.
                </h2>
                <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                  Wir nehmen persönlich ab. Rund um die Uhr, auch nachts, an
                  Wochenenden und Feiertagen. Sollten wir gerade nicht
                  abnehmen können, rufen wir umgehend zurück.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
                    {SITE.phone}
                  </a>
                  <Link href="/kontakt" className="btn-ghost">
                    Nachricht senden
                  </Link>
                </div>
                <p className="mt-6 text-[0.9rem] text-ink-muted">
                  Mitglied der {" "}
                  <a
                    href={SITE.innung.url}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Innung der Bestatter im Saarland
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>

      <BigFinalCTA
        tone="quiet"
        image={IMG.calmMountain}
        imageAlt="Ruhige Landschaft"
        eyebrow="Für Sie da"
        title="Rund um die Uhr an Ihrer Seite."
        body="Im Trauerfall genügt ein Anruf. Für ein Vorsorgegespräch nehmen wir uns in Ruhe Zeit."
      />
    </>
  );
}

import type { Metadata } from "next";
import { BigFinalCTA } from "@/components/BigFinalCTA";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Familienbetrieb seit 1930 in Schiffweiler. Geführt von Ralf Malburg und Steffen Grossmann mit einem achtköpfigen Team.",
};

const CHAPTERS = [
  {
    year: String(SITE.founded),
    kicker: "Gründung",
    title: "Ein Traum aus Holz.",
    body: `${SITE.founder} verwirklicht in ${SITE.foundingPlace} den Wunsch, individuelle Möbel und Gebrauchsgegenstände aus Holz zu fertigen. Der Grundgedanke des Familienbetriebs: bleibende Werte schaffen.`,
    image: IMG.woodStack,
    alt: "Gestapelte Holzbretter",
  },
  {
    year: "1960er",
    kicker: "Wachstum",
    title: "Vom Werkstück zur Werkstatt.",
    body: "Die Auftragslage wächst. Aus einer Ein-Mann-Schreinerei entsteht ein Betrieb mit Gesellen und regelmässigen Ausbildungsplätzen. Bauschreinerei und Möbelbau werden zu einem gemeinsamen Kerngeschäft.",
    image: IMG.workshopBench,
    alt: "Werkbank",
  },
  {
    year: String(SITE.leadershipSince),
    kicker: "Neue Generation",
    title: "Zwei Namen, ein Haus.",
    body: `${SITE.leadership[0].name} und ${SITE.leadership[1].name} übernehmen den Geschäftsbetrieb. Sie führen die Schreinerei in der neuen Generation fort und erweitern das Haus gezielt um den Bereich Bestattungen.`,
    image: IMG.workshopHands,
    alt: "Handwerkerhände",
  },
  {
    year: "heute",
    kicker: "Zwei Bereiche",
    title: "Ein Familienbetrieb, der bleibt.",
    body: `Ein ${SITE.teamSize} deckt Bau- und Möbelschreinerei sowie Bestattungen ab. Der Standort ist unverändert: ${SITE.address.street} in ${SITE.address.city}.`,
    image: IMG.workshopWide,
    alt: "Werkstatt heute",
  },
];

export default function UnternehmenPage() {
  return (
    <>
      {/* MAGAZINE-COVER Hero */}
      <section className="relative bg-cream-50 pt-32 md:pt-44">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[0.72rem] uppercase tracking-[0.3em] text-walnut-400">
                Über uns · Ausgabe {new Date().getFullYear()}
              </div>
              <div className="mt-6 space-y-2 text-[0.9rem] text-ink-muted">
                <div>Familienbetrieb seit {SITE.founded}</div>
                <div>Schiffweiler, Saarland</div>
                <div>{SITE.teamSize}</div>
              </div>
            </div>
            <div className="md:col-span-8">
              <h1 className="h-serif text-[clamp(2.8rem,7vw,7rem)] leading-[1] text-walnut-500">
                Das Haus <span className="italic">Malburg.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
                Eine Chronik in vier Kapiteln. Vom ersten Werkstück in {" "}
                {SITE.foundingPlace} bis zur Schreinerei und Bestattung, die
                Sie heute in {SITE.address.city} finden.
              </p>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-walnut-500/10">
            <img
              src={IMG.workshopWide2}
              alt="Werkstatt der Schreinerei Malburg"
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* KENNZAHLEN */}
      <section className="border-y border-walnut-500/10 bg-cream-100/60">
        <div className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          <StatCounter value={2026 - SITE.founded} suffix="+" label="Jahre am gleichen Ort" />
          <StatCounter value={4} label="Generationen" />
          <StatCounter value={8} label="Fachkräfte" />
          <StatCounter value={2} label="Bereiche" />
        </div>
      </section>

      {/* CHRONIK: vertical timeline mit zentraler Linie und alternierenden Karten */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">Chronik</div>
              <h2 className="h-serif mt-4 text-[clamp(2rem,3.8vw,3rem)] text-walnut-500">
                Vier Kapitel, ein Haus.
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16 md:mt-20">
            <div
              aria-hidden
              className="absolute left-4 top-0 h-full w-px bg-walnut-500/15 md:left-1/2 md:-translate-x-1/2"
            />

            <ol className="space-y-16 md:space-y-24">
              {CHAPTERS.map((c, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal as="li" key={c.year}>
                    <div className="relative grid gap-6 md:grid-cols-2 md:gap-16">
                      <span
                        aria-hidden
                        className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-walnut-500 md:left-1/2"
                      />

                      <div
                        className={[
                          "pl-10 md:pl-0",
                          left ? "md:order-1 md:text-right md:pr-16" : "md:order-2 md:pl-16",
                        ].join(" ")}
                      >
                        <div className="h-serif text-[clamp(2rem,5vw,4rem)] italic text-walnut-400">
                          {c.year}
                        </div>
                        <div className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-walnut-400">
                          {c.kicker}
                        </div>
                        <h3
                          className={[
                            "h-serif mt-3 text-[clamp(1.4rem,2.6vw,2.2rem)] text-ink",
                            left ? "md:ml-auto md:max-w-md" : "md:max-w-md",
                          ].join(" ")}
                        >
                          {c.title}
                        </h3>
                        <p
                          className={[
                            "mt-4 text-[0.98rem] leading-relaxed text-ink-soft",
                            left ? "md:ml-auto md:max-w-md" : "md:max-w-md",
                          ].join(" ")}
                        >
                          {c.body}
                        </p>
                      </div>

                      <div className={left ? "pl-10 md:pl-0 md:order-2" : "pl-10 md:pl-0 md:order-1"}>
                        <div className="overflow-hidden rounded-2xl border border-walnut-500/10">
                          <img
                            src={c.image}
                            alt={c.alt}
                            className="aspect-[4/3] w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative bg-walnut-600 py-24 text-cream-50 md:py-32">
        <img
          src={IMG.woodGrain}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container-page relative">
          <blockquote className="max-w-4xl">
            <div className="h-serif text-[1.2rem] italic text-cream-100/70">
              Unser Grundsatz
            </div>
            <p className="h-serif mt-6 text-[clamp(2rem,4vw,3.6rem)] italic leading-tight text-cream-50">
              „Wir liefern nichts aus dem Haus, was wir nicht selbst geprüft haben."
            </p>
            <div className="mt-8 text-[0.9rem] text-cream-100/70">
              Ralf Malburg und Steffen Grossmann
            </div>
          </blockquote>
        </div>
      </section>

      {/* GESCHÄFTSFÜHRUNG - Duo, full width */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">Geschäftsführung</div>
              <h2 className="h-serif mt-4 text-[clamp(2rem,3.8vw,3rem)] text-walnut-500">
                Die Menschen, mit denen Sie sprechen.
              </h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
                Von der Beratung bis zur Übergabe sind es dieselben zwei
                Personen, die Sie im Ort begegnen.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SITE.leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <article className="overflow-hidden rounded-3xl bg-cream-100">
                  <img
                    src={i === 0 ? IMG.workshopHands : IMG.workshopSaw}
                    alt={`${p.name}, ${p.role}`}
                    className="aspect-[5/6] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="px-6 py-6 md:px-10 md:py-8">
                    <div className="text-[0.72rem] uppercase tracking-[0.24em] text-walnut-400">
                      {p.role}
                    </div>
                    <div className="h-serif mt-3 text-[1.6rem] text-walnut-500">
                      {p.name}
                    </div>
                    <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
                      Seit {SITE.leadershipSince} verantwortlich für den
                      Betrieb. Erreichbar unter {SITE.phone}.
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BigFinalCTA
        image={IMG.workshopTools}
        imageAlt="Werkzeug in der Werkstatt"
        eyebrow="Kennenlernen"
        title="Kommen Sie in Schiffweiler vorbei."
        body="Werktags treffen Sie uns in der Werkstatt. Ein kurzer Anruf reicht für einen Termin."
      />
    </>
  );
}

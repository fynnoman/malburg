import Link from "next/link";
import { HeroImage } from "@/components/HeroImage";
import { TrustBar } from "@/components/TrustBar";
import { PathChooser } from "@/components/PathChooser";
import { Pillars, Icon } from "@/components/Pillars";
import { StickyProcess } from "@/components/StickyProcess";
import { StickyGallery } from "@/components/StickyGallery";
import { FAQ } from "@/components/FAQ";
import { StatCounter } from "@/components/StatCounter";
import { BigFinalCTA } from "@/components/BigFinalCTA";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroImage
        src={IMG.workshopWide}
        alt="Blick in die Werkstatt der Schreinerei Malburg"
        overlay="warm"
      >
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-cream-100/90">
              Schiffweiler · seit {SITE.founded}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-serif mt-6 text-[clamp(2.8rem,6.4vw,5.6rem)] text-cream-50">
              Handwerk aus Holz.
              <br />
              <span className="italic text-cream-100/85">Vertrauen aus Tradition.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-[1.1rem] leading-relaxed text-cream-100/90">
              Familienbetrieb im Saarland. Bau- und Möbelschreinerei sowie
              Bestattungen aus einer Hand. Persönlich, verlässlich, seit fast
              einem Jahrhundert am gleichen Ort.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-cream">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M22 16v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2z" />
                </svg>
                {SITE.phone}
              </a>
              <Link href="/kontakt" className="btn-outline-light">
                Beratungstermin anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </HeroImage>

      <TrustBar />

      {/* KENNZAHLEN */}
      <section className="section">
        <div className="container-page grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="eyebrow">Warum Malburg</div>
              <h2 className="h-serif mt-4 text-[clamp(2rem,3.8vw,3rem)] text-walnut-500">
                Ein Betrieb, der bleibt.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
                Wer bei uns beauftragt, findet uns auch in fünf Jahren an der
                gleichen Adresse in Schiffweiler. Beständigkeit ist unser
                wichtigstes Versprechen.
              </p>
            </div>
          </Reveal>

          <div className="md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2">
            <StatCounter value={2026 - SITE.founded} suffix="+" label="Jahre am gleichen Ort" />
            <StatCounter value={4} label="Generationen im Familienbetrieb" />
            <StatCounter value={8} label="Fachkräfte in eigener Werkstatt" />
            <StatCounter value={2} label="Bereiche unter einem Dach" />
          </div>
        </div>
      </section>

      <PathChooser />

      <Pillars
        eyebrow="Was uns auszeichnet"
        title="Vier Prinzipien, die für beide Bereiche gelten."
        intro="Was seit Generationen funktioniert, geben wir nicht wegen einer Mode auf."
        items={[
          {
            title: "Meisterhand",
            body: "Jedes Werkstück verlässt die Werkstatt erst, wenn wir selbst zufrieden sind. Keine Zwischenlösungen, keine schnellen Auslieferungen.",
            icon: Icon.hammer,
          },
          {
            title: "Persönlich",
            body: "Sie sprechen mit denselben Menschen von der ersten Beratung bis zur letzten Montage. Kein Callcenter, keine Weiterleitungen.",
            icon: Icon.handshake,
          },
          {
            title: "Erreichbar",
            body: "Für Bestattungen sind wir rund um die Uhr erreichbar. Für Schreinerei-Anfragen melden wir uns werktags noch am selben Tag.",
            icon: Icon.clock,
          },
          {
            title: "Verbindlich",
            body: "Termine, Preise und Absprachen halten wir schriftlich fest. Was wir zusagen, das kommt.",
            icon: Icon.shield,
          },
        ]}
      />

      <StickyProcess
        eyebrow="Ablauf"
        title="So arbeiten wir mit Ihnen."
        intro="Ein transparenter Ablauf, egal ob Sie eine neue Küche planen oder einen Angehörigen verabschieden."
        steps={[
          {
            step: "01",
            title: "Erstes Gespräch",
            body: "Kurzer Anruf oder Nachricht genügt. Wir hören zu, klären den Umfang und schlagen einen Termin vor.",
            image: IMG.workshopHands,
            imageAlt: "Ein Handwerker im Gespräch",
          },
          {
            step: "02",
            title: "Beratung vor Ort",
            body: "Wir kommen zu Ihnen. Aufmass, Materialauswahl und Planung immer im Raum, in dem später das Ergebnis stehen wird.",
            image: IMG.workshopTools,
            imageAlt: "Werkzeugwand in der Werkstatt",
          },
          {
            step: "03",
            title: "Angebot und Fertigung",
            body: "Klare, schriftliche Aufstellung aller Positionen. Nach Ihrer Freigabe fertigen wir in eigener Werkstatt.",
            image: IMG.workshopBench,
            imageAlt: "Werkbank in der Schreinerei",
          },
          {
            step: "04",
            title: "Montage und Übergabe",
            body: "Wir montieren, prüfen und übergeben. Sauber, pünktlich und immer mit einer persönlichen Einweisung.",
            image: IMG.interiorLiving,
            imageAlt: "Fertig eingerichteter Wohnraum",
          },
        ]}
      />

      <StickyGallery
        eyebrow="Referenzen"
        title="Auszug aus unserer Arbeit."
        intro="Detailaufnahmen und Innenräume aus abgeschlossenen Projekten. Weitere Referenzen zeigen wir gern persönlich in der Werkstatt."
        items={[
          { image: IMG.interiorKitchen, alt: "Küche in warmem Holz", caption: "Küche mit massiven Fronten" },
          { image: IMG.interiorShelf, alt: "Regalwand aus Massivholz", caption: "Wohnraum-Einbaumöbel" },
          { image: IMG.interiorRoom, alt: "Wohnzimmer mit Holzdecke", caption: "Innenausbau Wohnraum" },
          { image: IMG.interiorRoom2, alt: "Ausgebauter Wohnbereich", caption: "Komplettausbau Neubau" },
        ]}
      />

      <FAQ
        title="Antworten, bevor Sie fragen müssen."
        intro="Wenn Ihre Frage nicht dabei ist, greifen Sie zum Telefon. Persönlich geht es schneller."
        items={[
          {
            q: "Kommen Sie für ein Aufmass zu mir nach Hause?",
            a: "Ja, immer. Aufmass, Beratung und Materialauswahl finden bei Ihnen zu Hause oder in Ihrem Betrieb statt. So sehen wir Licht, Wände, Anschlüsse und alles, was für die Planung wichtig ist.",
          },
          {
            q: "In welchem Umkreis arbeiten Sie?",
            a: "Wir sind vorrangig im Saarland und der Region unterwegs. Für grössere Projekte fahren wir auch weiter. Sprechen Sie uns einfach an.",
          },
          {
            q: "Wie schnell erhalte ich ein Angebot?",
            a: "Nach dem Aufmass innerhalb weniger Werktage. Wir listen jede Position transparent auf, damit Sie nichts nachfragen müssen.",
          },
          {
            q: "Sind Sie auch für Bestattungen nachts erreichbar?",
            a: "Ja. Im Trauerfall erreichen Sie uns telefonisch zu jeder Zeit. Wir kümmern uns umgehend um alles Weitere.",
          },
          {
            q: "Bieten Sie auch Reparaturen und Restaurierungen an?",
            a: "Ja. Wir richten Möbel, Türen, Fenster und Einbauten wieder her. Was sich reparieren lässt, muss nicht ersetzt werden.",
          },
        ]}
      />

      <BigFinalCTA
        image={IMG.workshopWide2}
        imageAlt="Werkstatt der Schreinerei Malburg"
        eyebrow="Nächster Schritt"
        title="Rufen Sie an. Wir kümmern uns."
        body="Ob Möbel, Bauschreinerei oder Bestattung. Ein Anruf reicht, damit sich der richtige Ansprechpartner bei Ihnen zurückmeldet."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { AsymmetricHero } from "@/components/AsymmetricHero";
import { HorizontalScroller } from "@/components/HorizontalScroller";
import { MarqueeStatement } from "@/components/MarqueeStatement";
import { SplitTwoBranches } from "@/components/SplitTwoBranches";
import { StickyGallery } from "@/components/StickyGallery";
import { BigFinalCTA } from "@/components/BigFinalCTA";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schreinerei",
  description:
    "Bau- und Möbelschreinerei aus Schiffweiler. Fenster, Türen, Innenausbau, Küchen und individueller Möbelbau in eigener Werkstatt. Meisterbetrieb, Familientradition seit 1930.",
};

export default function SchreinereiPage() {
  return (
    <>
      <AsymmetricHero
        eyebrow="Bereich 01 · Schreinerei"
        title={
          <>
            Bau- und Möbelschreinerei
            <br />
            <span className="italic text-walnut-400">aus einer Hand.</span>
          </>
        }
        intro={
          <>
            Fenster, Türen, Innenausbau, Küchen und individueller Möbelbau.
            Alles bei uns geplant, in eigener Werkstatt gefertigt und von
            unserem Team montiert.
          </>
        }
        cta={
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
              Kostenloses Aufmass anfragen
            </a>
            <Link href="#bereiche" className="btn-ghost">
              Leistungen ansehen
            </Link>
          </div>
        }
        images={[
          { src: IMG.workshopWide, alt: "Werkstatt-Weitwinkel" },
          { src: IMG.interiorKitchen, alt: "Küche in Massivholz" },
          { src: IMG.workshopDetail, alt: "Detail Handwerk" },
        ]}
      />

      {/* Kennzahlen-Zeile statt Trust bar */}
      <section className="border-y border-walnut-500/10 bg-cream-100/60">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[
            { k: "Werkstatt", v: `${SITE.address.city}` },
            { k: "Familienbetrieb", v: `seit ${SITE.founded}` },
            { k: "Team", v: SITE.teamSize },
            { k: "Anfahrt zum Aufmass", v: "kostenlos" },
          ].map((s) => (
            <div key={s.k} className="flex flex-col">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-walnut-400">
                {s.k}
              </span>
              <span className="h-serif mt-2 text-[1.15rem] text-walnut-500">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HORIZONTALES SCROLL-DOSSIER */}
      <HorizontalScroller
        eyebrow="Was wir bauen"
        title="Ein Dossier unserer Arbeit."
        intro="Scrollen Sie weiter, um durch unsere Bereiche zu blättern."
        cards={[
          {
            eyebrow: "Fenster · Türen",
            title: "Fassaden aus Holz.",
            body: "Fenster und Türen nach Mass. Für Neubau, Sanierung und denkmalgeschützte Gebäude.",
            image: IMG.interiorHouse,
            alt: "Fenster und Fassade",
          },
          {
            eyebrow: "Haustüren",
            title: "Der erste Eindruck bleibt.",
            body: "Solide Haustüren aus eigener Fertigung. Individuell in Form, Material und Beschlag.",
            image: IMG.workshopWood,
            alt: "Haustüren",
          },
          {
            eyebrow: "Innenausbau",
            title: "Räume, die zusammenpassen.",
            body: "Türen, Böden, Decken und Wandverkleidungen aus einer Hand. Ein Ansprechpartner für alles.",
            image: IMG.interiorRoom3,
            alt: "Innenausbau",
          },
          {
            eyebrow: "Küchen",
            title: "Küchen für Jahre.",
            body: "Fronten aus Massivholz, präzise geplante Funktion. Beratung bei Ihnen zu Hause oder bei uns.",
            image: IMG.interiorKitchen,
            alt: "Küche",
          },
          {
            eyebrow: "Individualmöbel",
            title: "Möbel, die zum Raum gehören.",
            body: "Kommoden, Regale, Sideboards und Einbaumöbel. Wir entwickeln Möbel für Ihre Räume, nicht umgekehrt.",
            image: IMG.interiorShelf,
            alt: "Individualmöbel",
          },
          {
            eyebrow: "Restaurierung",
            title: "Alten Möbeln neues Leben.",
            body: "Behutsam, materialgerecht, ehrlich. Was sich reparieren lässt, muss nicht ersetzt werden.",
            image: IMG.workshopHands,
            alt: "Restaurierung",
          },
        ]}
      />

      {/* MARQUEE STATEMENT */}
      <MarqueeStatement
        tone="dark"
        image={IMG.woodGrain}
        imageAlt="Holzstruktur"
        words={[
          "Massiv",
          "Ehrlich",
          "In eigener Werkstatt",
          "Nach Mass",
          "Für Generationen",
        ]}
      />

      {/* SPLIT ZWEI ZWEIGE */}
      <div id="bereiche">
        <SplitTwoBranches
          eyebrow="Zwei Zweige"
          title="Bauschreinerei und Möbelschreinerei."
          branches={[
            {
              label: "Zweig 01",
              title: "Bauschreinerei",
              body:
                "Alles, was am und im Gebäude aus Holz gemacht wird. Von Fenstern und Haustüren über Innenausbau bis zu Decken, Böden und Terrassen.",
              image: IMG.interiorHouse,
              alt: "Bauschreinerei",
              items: [
                "Fenster und Türen nach Mass",
                "Haustüren aus Massivholz",
                "Innenausbau, Decken und Böden",
                "Wintergärten und Garagentore",
              ],
              variant: "warm",
            },
            {
              label: "Zweig 02",
              title: "Möbelschreinerei",
              body:
                "Einzelmöbel, Einbaumöbel und komplette Einrichtungen. Für Wohnräume, Küchen, Bäder, Büros, Praxen und Gastronomie.",
              image: IMG.interiorLiving,
              alt: "Möbelschreinerei",
              items: [
                "Küchen und Einbaumöbel",
                "Wohn-, Bade- und Büroausstattung",
                "Gastronomie und Ladenbau",
                "Restaurierung und Reparatur",
              ],
              variant: "dark",
            },
          ]}
        />
      </div>

      <StickyGallery
        eyebrow="Referenzen"
        title="Aus abgeschlossenen Projekten."
        items={[
          { image: IMG.interiorKitchen, alt: "Küche in Massivholz", caption: "Küchen und Kochinseln" },
          { image: IMG.interiorShelf, alt: "Regalwand aus Holz", caption: "Einbau- und Anbaumöbel" },
          { image: IMG.interiorRoom, alt: "Innenausbau Wohnzimmer", caption: "Wohnraum-Innenausbau" },
          { image: IMG.interiorRoom3, alt: "Ausgebauter Innenraum", caption: "Böden, Decken und Türen" },
          { image: IMG.interiorBath, alt: "Badausstattung in Holz", caption: "Badmöbel und Ausbauten" },
        ]}
      />

      <BigFinalCTA
        image={IMG.workshopWood}
        imageAlt="Werkstück in der Schreinerei"
        eyebrow="Ihr Projekt"
        title="Beschreiben Sie uns Ihr Vorhaben."
        body="Ein Satz reicht. Wir melden uns zurück und vereinbaren einen Termin vor Ort."
      />
    </>
  );
}

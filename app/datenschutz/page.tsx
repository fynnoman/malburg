import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <div className="eyebrow">Rechtliches</div>
        <h1 className="h-serif mt-4 text-[clamp(2rem,4vw,3rem)] text-walnut-500">
          Datenschutz
        </h1>

        <div className="mt-10 space-y-8 text-[1rem] leading-relaxed text-ink-soft">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website
            verzichtet auf externe Tracking-Dienste. Personenbezogene Daten
            werden ausschliesslich erhoben, wenn Sie uns diese über das
            Kontaktformular oder per E-Mail freiwillig zusenden.
          </p>

          <div>
            <h2 className="h-serif text-[1.25rem] text-ink">Kontaktformular</h2>
            <p className="mt-3">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
              lassen, verarbeiten wir die von Ihnen mitgeteilten Daten zur
              Bearbeitung Ihrer Anfrage. Wir geben diese Daten nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="h-serif text-[1.25rem] text-ink">Speicherdauer</h2>
            <p className="mt-3">
              Ihre Daten werden gelöscht, sobald sie für die Zwecke, für die
              sie erhoben wurden, nicht mehr benötigt werden und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div className="rounded-2xl border border-walnut-500/10 bg-cream-100 p-6 text-[0.95rem]">
            <p>
              Hinweis: Eine vollständige Datenschutzerklärung mit den
              individuellen Angaben Ihres Betriebs ergänzen Sie bitte nach
              Freigabe. Der oben stehende Text dient als Ausgangsbasis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

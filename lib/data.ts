export const SITE = {
  name: "Schreinerei Malburg",
  short: "Malburg",
  claim: "Handwerk aus Holz. Seit 1930 in Schiffweiler.",
  founded: 1930,
  founder: "Johann Malburg",
  foundingPlace: "Landsweiler",
  leadershipSince: 2003,
  leadership: [
    { name: "Ralf Malburg", role: "Geschäftsführer" },
    { name: "Steffen Grossmann", role: "Geschäftsführer" },
  ],
  teamSize: "achtköpfiges Team",
  address: {
    street: "Saarbrücker Straße 1-3",
    zip: "66578",
    city: "Schiffweiler",
  },
  phone: "(06821) 62 78",
  phoneRaw: "+4968216278",
  innung: {
    name: "Innung der Bestatter im Saarland",
    url: "https://www.bestatter-saar.de",
  },
} as const;

export type LeistungGroup = {
  eyebrow: string;
  title: string;
  intro: string;
  items: { title: string; body: string }[];
};

export const SCHREINEREI_GROUPS: LeistungGroup[] = [
  {
    eyebrow: "Bauschreinerei",
    title: "Massives Handwerk für Gebäude, das über Generationen bleibt.",
    intro:
      "Fenster, Türen und Innenausbau in allen Stilrichtungen. Wir planen, fertigen und montieren mit einem Team, das sich seit Jahren kennt.",
    items: [
      {
        title: "Fenster und Türen",
        body: "Nach Maß gefertigt, in klassischen und modernen Ausführungen. Für Neubau, Sanierung und denkmalgeschützte Gebäude.",
      },
      {
        title: "Haustüren",
        body: "Solide Haustüren, individuell aus Holz gearbeitet. Ruhig im Auftritt, präzise in der Fertigung.",
      },
      {
        title: "Innenausbau",
        body: "Vom Türblatt bis zur kompletten Raumverkleidung. Wir verbinden Handwerk mit ruhigen, klaren Formen.",
      },
      {
        title: "Decken und Böden",
        body: "Holzdecken, Fußböden und Parkett. Wir liefern Materialien und Verlegung aus einer Hand.",
      },
      {
        title: "Haus und Garten",
        body: "Wintergärten, Garagentore, Terrassen und Nebenräume. Was aus Holz sein soll, machen wir aus Holz.",
      },
    ],
  },
  {
    eyebrow: "Möbelschreinerei",
    title: "Möbel, die zum Raum gehören, weil sie für ihn entstanden sind.",
    intro:
      "Individuell entworfen, in eigener Werkstatt gefertigt. Von der ersten Skizze bis zur Montage sind wir Ihre Ansprechpartner.",
    items: [
      {
        title: "Individueller Möbelbau",
        body: "Kommoden, Schränke, Regale, Sideboards. Wir entwickeln Möbel für Ihre Räume, nicht umgekehrt.",
      },
      {
        title: "Küchen",
        body: "Küchen aus Holz mit langlebigen Fronten und präzise geplanter Funktion. Beratung bei Ihnen zu Hause oder bei uns.",
      },
      {
        title: "Gastronomie",
        body: "Tresen, Wandvertäfelungen und komplette Einrichtungen für Restaurants, Cafés und Praxen.",
      },
      {
        title: "Büromöbel",
        body: "Empfangstresen, Schreibtisch-Anlagen und Stauraum-Lösungen für Büros und Kanzleien.",
      },
      {
        title: "Restaurierungen",
        body: "Alten Möbeln und Bauteilen zu neuer Nutzung verhelfen. Behutsam, materialgerecht, ehrlich.",
      },
    ],
  },
];

export const BESTATTUNG_GROUPS: LeistungGroup[] = [
  {
    eyebrow: "Bestattungsarten",
    title: "Jede Bestattung folgt einem eigenen, stillen Weg.",
    intro:
      "Wir begleiten Angehörige durch die verschiedenen Formen der Bestattung und beraten ruhig und ohne Zeitdruck.",
    items: [
      {
        title: "Erdbestattung",
        body: "Die klassische Beisetzung im Reihen- oder Wahlgrab. Wir übernehmen Organisation, Trauerdruck und Grabgestaltung.",
      },
      {
        title: "Feuerbestattung",
        body: "Beisetzung der Urne in Urnengrab, Urnenwand oder anonymer Grabstätte.",
      },
      {
        title: "Baumbestattung",
        body: "Naturnahe Beisetzung an einem Ruheort im Wald. Wir vermitteln geeignete Grabfelder in der Region.",
      },
      {
        title: "Seebestattung",
        body: "Beisetzung der Urne auf See. Organisation in Zusammenarbeit mit Reedereien an Nord- und Ostsee.",
      },
    ],
  },
  {
    eyebrow: "Leistungen",
    title: "Wir nehmen Ihnen die Formalitäten ab.",
    intro:
      "Von der ersten Absprache bis zur Beisetzung übernehmen wir die Schritte, die in dieser Zeit besonders schwer fallen.",
    items: [
      {
        title: "Überführung und Versorgung",
        body: "Abholung des Verstorbenen zu jeder Zeit, hygienische Versorgung, würdevolle Aufbahrung.",
      },
      {
        title: "Behördengänge",
        body: "Sterbeurkunde, Meldungen bei Krankenkasse, Rentenversicherung und Versicherungen.",
      },
      {
        title: "Trauerdruck",
        body: "Trauerbriefe, Danksagungen, Traueranzeigen. Ruhig und typografisch sauber gestaltet.",
      },
      {
        title: "Trauerfeier",
        body: "Kirchliche oder freie Feier, musikalische Begleitung, Blumenschmuck und Absprache mit dem Friedhof.",
      },
    ],
  },
  {
    eyebrow: "Vorsorge",
    title: "Vorsorge nimmt Angehörigen später sehr viel ab.",
    intro:
      "In einem ruhigen Gespräch halten wir Ihre Wünsche schriftlich fest, damit später niemand raten muss.",
    items: [
      {
        title: "Bestattungsvorsorge",
        body: "Persönliches Gespräch bei uns oder bei Ihnen zu Hause. Ihre Wünsche werden dokumentiert und sicher verwahrt.",
      },
      {
        title: "Treuhandkonto",
        body: "Absicherung der späteren Kosten über ein anerkanntes Treuhandkonto. Auf Wunsch vermitteln wir den Weg.",
      },
    ],
  },
];

export const NAV_MAIN = [
  { href: "/", label: "Start" },
  { href: "/schreinerei", label: "Schreinerei" },
  { href: "/bestattungen", label: "Bestattungen" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const NAV_FOOTER = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

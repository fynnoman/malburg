import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · Schreinerei und Bestattungen in Schiffweiler`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Familienbetrieb seit 1930 in Schiffweiler. Bau- und Möbelschreinerei sowie Bestattungen aus einer Hand. Meisterbetrieb, Innungsmitglied, persönliche Ansprechpartner vor Ort.",
  metadataBase: new URL("https://www.schreinerei-malburg.de"),
  openGraph: {
    title: SITE.name,
    description:
      "Bau- und Möbelschreinerei sowie Bestattungen aus einer Hand. Familienbetrieb seit 1930 in Schiffweiler.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-cream-50 text-ink">
        <Header />
        <main className="relative flow-root">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

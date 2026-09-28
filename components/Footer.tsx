import Link from "next/link";
import { NAV_FOOTER, NAV_MAIN, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-walnut-500/10 bg-cream-100">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="h-serif text-lg text-walnut-500">
            {SITE.name}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Familienbetrieb aus dem Saarland. Bau- und Möbelschreinerei sowie
            Bestattungen aus einer Hand.
          </p>
        </div>

        <div>
          <div className="eyebrow">Kontakt</div>
          <div className="mt-3 space-y-1 text-sm text-ink-soft">
            <div>{SITE.address.street}</div>
            <div>
              {SITE.address.zip} {SITE.address.city}
            </div>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 inline-block text-walnut-500 hover:underline"
            >
              {SITE.phone}
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow">Bereiche</div>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_MAIN.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink-soft hover:text-walnut-500">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Rechtliches</div>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_FOOTER.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink-soft hover:text-walnut-500">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-walnut-500/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-muted md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Schreinerei Malburg. Alle Rechte vorbehalten.</div>
          <div>Mitglied der {" "}
            <a
              href={SITE.innung.url}
              className="hover:text-walnut-500"
              target="_blank"
              rel="noreferrer"
            >
              Innung der Bestatter im Saarland
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

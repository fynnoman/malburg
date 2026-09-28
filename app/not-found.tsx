import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <div className="eyebrow">404</div>
        <h1 className="h-serif mt-4 text-[clamp(2rem,4vw,3rem)] text-walnut-500">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft">
          Vielleicht wurde die Seite umbenannt oder der Link ist veraltet. Über
          das Menü finden Sie zurück zu unseren Bereichen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">Zur Startseite</Link>
          <Link href="/kontakt" className="btn-ghost">Kontakt</Link>
        </div>
      </div>
    </section>
  );
}

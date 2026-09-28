"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_MAIN, SITE } from "@/lib/data";

const HERO_PAGES = new Set<string>(["/", "/bestattungen"]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const heroPage = HERO_PAGES.has(pathname);
  const lightMode = !scrolled && !open && heroPage;

  const navBase = lightMode
    ? "text-cream-100/85 hover:text-cream-50"
    : "text-ink-soft hover:text-walnut-500";
  const navActive = lightMode ? "text-cream-50" : "text-walnut-500";
  const activePillBg = lightMode ? "bg-cream-50/12" : "bg-walnut-500/8";
  const menuBtnClass = lightMode
    ? "border-cream-50/40 text-cream-50"
    : "border-walnut-500/15 text-walnut-500";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Safe darkening under header when transparent-light so text stays readable */}
      {lightMode && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/45 via-black/15 to-transparent"
        />
      )}

      <div className="container-page flex items-center justify-between gap-4 py-3 md:py-4">
        <div
          className={[
            "flex w-full items-center justify-between gap-4 rounded-full px-3 py-2 md:px-5 md:py-3",
            "transition-colors duration-300",
            scrolled ? "glass" : "bg-transparent",
          ].join(" ")}
        >
          <Logo compact variant={lightMode ? "light" : "dark"} />

          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-1">
            {NAV_MAIN.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative rounded-full px-4 py-2 text-[0.92rem] transition-colors",
                    active ? navActive : navBase,
                  ].join(" ")}
                >
                  {active && (
                    <span
                      aria-hidden
                      className={`absolute inset-0 rounded-full ${activePillBg}`}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={[
                "text-[0.9rem] transition-colors",
                lightMode ? "text-cream-100/90 hover:text-cream-50" : "text-ink-soft hover:text-walnut-500",
              ].join(" ")}
            >
              {SITE.phone}
            </a>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
            className={[
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
              menuBtnClass,
            ].join(" ")}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — covers viewport, header stays visible on top (higher z) */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="h-full overflow-y-auto bg-cream-50/98 backdrop-blur">
            <div className="container-page pt-24 pb-10">
              <nav className="flex flex-col gap-1">
                {NAV_MAIN.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "flex items-center justify-between rounded-2xl px-5 py-4 text-[1.05rem] transition-colors",
                        active
                          ? "bg-walnut-500/8 text-walnut-500"
                          : "text-ink hover:bg-walnut-500/5",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-2xl border border-walnut-500/10 bg-cream-100 p-5">
                <div className="text-[0.7rem] uppercase tracking-[0.24em] text-walnut-400">
                  Direkt anrufen
                </div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-2 block h-serif text-[1.6rem] text-walnut-500"
                >
                  {SITE.phone}
                </a>
                <div className="mt-1 text-[0.85rem] text-ink-muted">
                  Werkstatt und Bestattungen erreichbar
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

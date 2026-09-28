"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const HIDDEN_ON = new Set<string>(["/kontakt", "/impressum", "/datenschutz"]);

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (HIDDEN_ON.has(pathname)) {
      setVisible(false);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (HIDDEN_ON.has(pathname)) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="cta"
          href={`tel:${SITE.phoneRaw}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-2 md:gap-3 rounded-full py-2 pl-2 pr-4 md:py-3 md:pl-3 md:pr-5 shadow-card hover:bg-cream-50"
          aria-label={`Direkt anrufen: ${SITE.phone}`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-walnut-500 text-cream-50">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              <path d="M22 16v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2z" />
            </svg>
          </span>
          <span className="hidden md:flex flex-col leading-tight">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
              Direkt anrufen
            </span>
            <span className="text-[0.98rem] font-medium text-walnut-500">
              {SITE.phone}
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";

const islandScrollDistance = 120;

export function ScrollHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let progress = -1;
    const updateHeader = () => {
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / islandScrollDistance));
      if (nextProgress === progress) return;

      progress = nextProgress;
      header.style.setProperty("--scroll-progress", String(progress));
      header.toggleAttribute("data-scrolled", progress > 0);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return <header ref={headerRef} className="topbar frame">{children}</header>;
}

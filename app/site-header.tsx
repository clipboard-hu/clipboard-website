import { ConsultationButton } from "./consultation-button";
import { ScrollHeader } from "./scroll-header";

export function SiteHeader({ onHomepage = false }: { onHomepage?: boolean }) {
  const homepage = onHomepage ? "" : "/";

  return (
    <ScrollHeader>
      <a className="signature" href={`${homepage}#kezdolap`} aria-label="Clipboard – kezdőlap">
        <svg viewBox="0 0 36 40" width="32" height="36" aria-hidden="true">
          <path d="M9 7H6a3 3 0 0 0-3 3v23a3 3 0 0 0 3 3h15m5-29h2a3 3 0 0 1 3 3v11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M11 5h3a4 4 0 0 1 8 0h3v6H11zm8 15 1 15 4-4 4 8 4-2-4-8 7-1z" fill="currentColor"/>
          <path d="M9 16h12m-12 5h5" stroke="currentColor" strokeWidth="2.4"/>
        </svg>
        <span>clipboard</span>
      </a>
      <nav aria-label="Fő navigáció">
        <a href={`${homepage}#marketingaudit`} aria-label="Marketing audit">
          <span className="nav-audit-label">Marketing audit</span>
          <span className="nav-audit-short">Audit</span>
        </a>
        <a href={`${homepage}#szakteruletek`}>Szakterületek</a>
        <ConsultationButton className="nav-cta">Konzultáció</ConsultationButton>
      </nav>
    </ScrollHeader>
  );
}

export function ConsultationDialog() {
  return (
    <dialog id="consultation" aria-labelledby="consultation-title">
      <form method="dialog">
        <h2 id="consultation-title">Ingyenes konzultáció</h2>
        <p>60 perc, hogy átbeszéljük, miben tudunk segíteni.</p>
        <p className="preview-note">Az időpontfoglalás előkészítés alatt áll.</p>
        <button className="primary-cta" type="submit" autoFocus>Vissza</button>
      </form>
    </dialog>
  );
}

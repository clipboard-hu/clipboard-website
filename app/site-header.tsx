import Image from "next/image";
import { ConsultationButton } from "./consultation-button";
import { ScrollHeader } from "./scroll-header";

export function SiteHeader({ onHomepage = false }: { onHomepage?: boolean }) {
  const homepage = onHomepage ? "" : "/";

  return (
    <ScrollHeader>
      <a className="signature" href={`${homepage}#kezdolap`} aria-label="Clipboard – kezdőlap">
        <Image
          src="/brand/clipboard-header.png"
          width={40}
          height={40}
          alt=""
          unoptimized
        />
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

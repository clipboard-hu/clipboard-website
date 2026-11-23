import Image from "next/image";
import { ConsultationButton } from "./consultation-button";
import styles from "./site-footer.module.css";

export function SiteFooter({ onHomepage = false }: { onHomepage?: boolean }) {
  const homepage = onHomepage ? "" : "/";

  return (
    <footer id="kapcsolat" className={styles.footer} aria-labelledby="contact-title">
      <div className={`frame ${styles.top}`}>
        <div className={styles.contact}>
          <h2 id="contact-title">Beszéljük át, hol érdemes kezdeni.</h2>
          <p>Az ingyenes, 60 perces konzultáción átbeszéljük, min szeretnél változtatni, és hogyan tudunk segíteni.</p>
          <ConsultationButton className="primary-cta">Ingyenes konzultáció</ConsultationButton>
        </div>
        <nav className={styles.links} aria-label="Lábléc navigáció">
          <a href={`${homepage}#szakteruletek`}>Szakterületek</a>
          <a href={`${homepage}#marketingaudit`}>Marketing audit</a>
          <a href={`${homepage}#kozos-munka`}>Közös munka</a>
          <a href={onHomepage ? "#kezdolap" : "#"}>Vissza az elejére <span aria-hidden="true">↑</span></a>
          <a className={styles.attribution} href="https://www.openstreetmap.org/copyright">Térképadatok © OpenStreetMap</a>
        </nav>
      </div>

      <div className={styles.art}>
        <Image
          src="/assets/budapest-footer.svg"
          alt="Budapest stilizált tervrajza. A narancssárga útvonal a Lánchídon kel át a Dunán."
          fill
          unoptimized
        />
      </div>
    </footer>
  );
}

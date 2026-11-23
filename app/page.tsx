import { ConsultationButton } from "./consultation-button";
import styles from "./clipboard-hero.module.css";
import { HomeSections } from "./home-sections";
import { MarketingAudit } from "./marketing-audit";
import { serviceTitles, ServicesBlueprint } from "./services-blueprint";
import { SiteFooter } from "./site-footer";
import { ConsultationDialog, SiteHeader } from "./site-header";

export default function Home() {
  return (
    <>
      <div className={styles.masthead}>
        <SiteHeader onHomepage />
        <section id="kezdolap" className={`frame ${styles.hero}`} aria-labelledby="hero-title">
          <div className={styles.light} aria-hidden="true" />
          <h1 id="hero-title">Teljes digitális<br />lefedettség.</h1>
          <div className={styles.lead}>
            <p>Weboldalakat és appokat építünk, kampányokat tervezünk, és segítünk bevezetni az AI-t. Egy csapattal dolgozol az első ötlettől az indulásig.</p>
            <ConsultationButton className={styles.consult}>
              Ingyenes konzultáció <span>60 perc</span>
              <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M4 10h11m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            </ConsultationButton>
          </div>
        </section>
      </div>

      <main className="frame">
        <ul className="coverage" aria-label="Szakterületek röviden">
          {serviceTitles.map((service) => (
            <li key={service}>
              <span className="service-dot" aria-hidden="true" />
              {service}
            </li>
          ))}
        </ul>
        <MarketingAudit />
        <ServicesBlueprint />
        <HomeSections />
      </main>

      <SiteFooter onHomepage />

      <ConsultationDialog />
    </>
  );
}

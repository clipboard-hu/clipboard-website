import { ConsultationButton } from "./consultation-button";
import { HeroBlueprint } from "./hero-blueprint";
import { HomeSections } from "./home-sections";
import { MarketingAudit } from "./marketing-audit";
import { serviceTitles, ServicesBlueprint } from "./services-blueprint";
import { SiteFooter } from "./site-footer";
import { ConsultationDialog, SiteHeader } from "./site-header";

export default function Home() {
  return (
    <>
      <SiteHeader onHomepage />

      <main className="frame">
        <section id="kezdolap" className="hero" aria-labelledby="hero-title">
          <HeroBlueprint />
          <div className="hero-copy">
            <h1 id="hero-title">Teljes digitális<br />lefedettség.</h1>
            <p className="intro">
              A stratégiától a kampányokig egy csapattal dolgozol. Segítünk bevezetni az AI-t,
              felépíteni a weboldaladat vagy appodat, és elérni a vevőidet.
            </p>
            <div className="hero-action">
              <ConsultationButton className="primary-cta">
                Ingyenes konzultáció
                <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
                  <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ConsultationButton>
              <span className="duration">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7.5V12l2.7 1.7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                60 perc
              </span>
            </div>
          </div>
        </section>

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

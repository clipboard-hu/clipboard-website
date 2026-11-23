import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../site-footer";
import { ConsultationDialog, SiteHeader } from "../site-header";
import { AuditStudy, BrandStudy, CartStudy, DeliveryStudy, ReadingFlowStudy } from "./principle-illustrations";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Weboldalkészítés | Digitális ügynökség",
  description: "Egyedi weboldalakat és webes alkalmazásokat tervezünk, a márka bemutatásától az ajánlatkérésig.",
};

function ArchitectureDrawing() {
  return (
    <svg className={styles.architectureDrawing} viewBox="0 0 1000 563" preserveAspectRatio="xMidYMid slice">
      <g className={styles.drawingGuides}>
        <path d="M52 423 920 362M23 198 678 104 979 320M166 42v416m243-338v335m151-263v237M137 414h480" />
        <path d="M149 416h26m-13-13v26m233-23h28m-14-14v28m137-24h28m-14-14v28" />
      </g>
      <g className={styles.drawingLines}>
        <path d="M4 2 167 46l4 384L4 508M172 418l96-28 732-49" />
        <path d="m283 191 395-87 273 205-1 15-272-180-394 74Z" />
        <path d="m284 218 5 167 72-9V206m0 170 48-2 2-179m-2 179 151 4V166m0 212 330-34 58-9 2-11" />
        <path d="m415 205 126-21v185l-128 2Zm-52 18 45-9m-45 27 45-8m-45 25 45-6m-45 25 45-4m-45 23 45-3m-45 22 45-1" />
        <path d="m296 224 53-9v148l-55 9Zm13-2v149m15-152v149m14-151v149m239-156 61-10v172m64-178v171m83-119v111m53-80v76m44-48v39" />
        <path d="m246 399 314-22 334-34m-698 77 355-31 357-39M171 430l380-33 372-42m-473 49-237 85m308-85-114 156" />
        <path d="m166 165 19-51 2-110m-12 340 29-171 20-51 22-115m-29 352 12-120 38-102 17-81m-70 326 15-23" />
        <path d="m429 211-8 12m26-16-17 26m32-29-23 36m39-39-27 42m43-45-18 29M18 440l98-35m-78 44 106-36m-55 38 66-21" opacity=".52" />
      </g>
    </svg>
  );
}

function StudioWebsite({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className={`${styles.sample} ${wireframe ? styles.wireframe : styles.finished}`} aria-hidden="true">
      <div className={styles.sampleNav}>
        <span className={styles.sampleBrand}>Metszet<span>Építésziroda</span></span>
        <span className={styles.sampleLinks}><span>Munkáink</span><span>Rólunk</span><span>Kapcsolat ↗</span></span>
      </div>
      <div className={styles.sampleHero}>
        {wireframe ? (
          <ArchitectureDrawing />
        ) : (
          <picture className={styles.architecturePhoto}>
            <source media="(max-width: 560px)" srcSet="/assets/architecture-hero-1000.webp" />
            <img src="/assets/architecture-hero-1672.webp" width={1672} height={941} alt="" fetchPriority="high" />
          </picture>
        )}
        <p className={styles.sampleTitle}>Ház a fák között</p>
      </div>
      <div className={styles.projectBar}>
        <span>Lakóház a Budai-hegységben</span>
        <span className={styles.projectLink}>Projekt megtekintése <span>↗</span></span>
      </div>
    </div>
  );
}

function AuditLink() {
  return (
    <Link href="/#marketingaudit" className={`primary-cta ${styles.audit}`}>
      Ingyenes weboldal audit
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
        <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function WebDesignPhilosophy() {
  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-title">
      <h2 id="philosophy-title">Szerintünk ilyen egy jó weboldal.</h2>
      <div className={styles.principles}>
        <article>
          <div className={styles.study}><BrandStudy /></div>
          <h3>Számít az első benyomás</h3>
          <p>Az első látogatáskor már látszódjon, <strong>mitől sajátos a céged.</strong></p>
        </article>
        <article>
          <div className={styles.study}><CartStudy /></div>
          <h3>A céllal kezdünk.</h3>
          <p>Ajánlatkérés, vásárlás vagy időpontfoglalás? <strong>A fő célhoz tervezzük az oldalt.</strong></p>
        </article>
        <article>
          <div className={styles.study}><ReadingFlowStudy /></div>
          <h3>Mutassunk utat a látogatónak</h3>
          <p>A jó sorrend segít, hogy a látogató <strong>megtalálja a választ és a következő lépést.</strong></p>
        </article>
        <article>
          <div className={styles.study}><DeliveryStudy /></div>
          <h3>Egy webprojektnek nem kell hónapokig elhúzódnia.</h3>
          <p>Előre egyeztetjük a tartalmat és a döntési pontokat, így <strong>a jóváhagyott tervből építkezünk.</strong></p>
        </article>
      </div>
    </section>
  );
}

function BrandCircle({ y }: { y: number }) {
  return (
    <path transform={`translate(0 ${y})`} d="M189 1C146-5 48-3 30 6S17 29 91 30s126-8 121-18c-2-6-14-9-28-11"
      fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" />
  );
}

function VisibilityStudy({ ai = false }: { ai?: boolean }) {
  return (
    <div className={styles.study}>
      <svg viewBox="0 0 430 270" className={styles.visibilityArt} role="img"
        aria-label={ai ? "Szemléltető AI-csevegés a Metszet Építésziroda egyik budai házáról." : "Szemléltető Google-oldal, első találatként a Metszet Építészirodával."}>
        <rect x="2" y="2" width="426" height="266" rx="12" fill="white" stroke="#adc0da" />
        <path d="M3 32h424" stroke="#d6dce4" />
        <g fill="#bcc8d9"><circle cx="18" cy="17" r="3" /><circle cx="28" cy="17" r="3" /><circle cx="38" cy="17" r="3" /></g>
        <text x="215" y="21" textAnchor="middle" fill="#566478" fontSize="11">{ai ? "AI-asszisztens" : "google.hu"}</text>
        {ai ? (
          <>
            <rect x="100" y="49" width="309" height="38" rx="17" fill="#eaf0f8" />
            <text x="116" y="73" fontSize="15">Mutatsz egy erdőszéli házat Budán?</text>
            <path d="m29 104 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="var(--blueprint-ink)" />
            <text x="47" y="120" fontSize="13" fontWeight="650">Asszisztens</text>
            <text x="30" y="153" fontSize="19" fontWeight="600">Metszet Építésziroda</text>
            <BrandCircle y={132} />
            <text x="30" y="182" fontSize="15">A „Ház a fák között” egy családi ház</text>
            <text x="30" y="202" fontSize="15">a Budai-hegységben.</text>
            <rect x="17" y="222" width="396" height="31" rx="15" fill="#fafbfc" stroke="#d4dce7" />
            <text x="32" y="242" fontSize="13" fill="#697483">Üzenet írása…</text>
            <circle cx="396" cy="237" r="11" fill="#27364b" />
            <path d="M396 243v-11m-4 4 4-4 4 4" fill="none" stroke="white" strokeWidth="1.6" />
          </>
        ) : (
          <>
            <text x="18" y="71" fontSize="24" fontWeight="650" letterSpacing="-1.5"><tspan fill="#4285f4">G</tspan><tspan fill="#ea4335">o</tspan><tspan fill="#fbbc05">o</tspan><tspan fill="#4285f4">g</tspan><tspan fill="#34a853">l</tspan><tspan fill="#ea4335">e</tspan></text>
            <rect x="100" y="46" width="309" height="36" rx="18" fill="white" stroke="#d6dce4" />
            <text x="116" y="69" fontSize="15">budai építészirodák</text>
            <g stroke="#687485" fill="none" strokeWidth="1.6"><circle cx="384" cy="62" r="5" /><path d="m388 66 5 5" /></g>
            <g fontSize="13"><text x="24" y="105">Összes</text><text x="92" y="105">Képek</text><text x="149" y="105">Térkép</text></g>
            <path d="M3 114h424" stroke="#e1e4e8" /><path d="M22 114h45" stroke="#1a73e8" strokeWidth="3" />
            <text x="29" y="139" fontSize="12" fill="#506057">metszet.example</text>
            <text x="30" y="168" fontSize="19" fill="#1a0dab">Metszet Építésziroda</text>
            <BrandCircle y={147} />
            <text x="29" y="195" fontSize="14">Családi házak a Budai-hegységben.</text>
            <text x="29" y="228" fontSize="12" fill="#506057">tervjegyzek.example</text>
            <text x="29" y="249" fontSize="16" fill="#1a0dab">Építészirodák Budapesten</text>
          </>
        )}
      </svg>
    </div>
  );
}

function SearchVisibility() {
  return (
    <section className={styles.philosophy} aria-labelledby="kereshetoseg">
      <h2 id="kereshetoseg">Egy weboldal akkor igazán jó, ha meg is találják.</h2>
      <div className={styles.principles}>
        <article>
          <VisibilityStudy />
          <h3>Keresőoptimalizálás (SEO)</h3>
          <p>Azokra a keresésekre építjük az oldalaidat, amelyekkel az ügyfeleid hozzád hasonló céget keresnek.</p>
        </article>
        <article>
          <VisibilityStudy ai />
          <h3>AI SEO</h3>
          <p>Úgy mutatjuk be a munkáidat, hogy az AI konkrét példaként hivatkozhasson rájuk.</p>
        </article>
      </div>
      <p className={styles.caption}>Szemléltető példa egy fiktív építészirodával.</p>
    </section>
  );
}

export default function Weboldalkeszites() {
  return (
    <>
      <SiteHeader />
      <main className={`frame ${styles.page}`}>
        <nav aria-label="Oldal helye">
          <ol className={styles.breadcrumb}>
            <li><Link href="/">Kezdőlap</Link></li>
            <li><Link href="/#szakteruletek">Szakterületek</Link></li>
            <li aria-current="page">Weboldalkészítés</li>
          </ol>
        </nav>

        <section className={styles.hero} aria-labelledby="weboldalkeszites-title">
          <div className={styles.heroCopy}>
            <h1 id="weboldalkeszites-title">Weboldalkészítés</h1>
            <div className={styles.heroIntro}>
              <p>
                Egyedi weboldalakat és webes alkalmazásokat tervezünk és fejlesztünk. Segítünk bemutatni a márkádat,
                érthetővé tenni a kínálatodat és megkönnyíteni az ajánlatkérést.
              </p>
              <ul className={styles.formats} aria-label="Webes szolgáltatások">
                <li><span className="service-dot" aria-hidden="true" />Céges weboldalak</li>
                <li><span className="service-dot" aria-hidden="true" />Kampányoldalak</li>
                <li><span className="service-dot" aria-hidden="true" />Termékkatalógusok</li>
                <li><span className="service-dot" aria-hidden="true" />Egyedi webes alkalmazások</li>
              </ul>
            </div>
            <AuditLink />
          </div>

          <figure className={styles.figure}>
            <div className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <span className={styles.browserDots}><i /><i /><i /></span>
                <span className={styles.address}>metszet.example</span>
              </div>
              <div className={styles.comparison}>
                <StudioWebsite wireframe />
                <StudioWebsite />
              </div>
            </div>
            <figcaption className={styles.caption}>Egy építésziroda nyitóoldala a drótváztól a kész tervig. Illusztráció.</figcaption>
          </figure>
        </section>

        <WebDesignPhilosophy />
        <SearchVisibility />

        <section className={styles.auditBand} aria-labelledby="web-audit-title">
          <div>
            <h2 id="web-audit-title">Van már weboldalad?</h2>
            <p>Átnézzük a weboldaladat és a méréseidet, hogy lásd, melyik javítással érdemes kezdened.</p>
            <AuditLink />
          </div>
          <AuditStudy />
        </section>
      </main>
      <SiteFooter />
      <ConsultationDialog />
    </>
  );
}

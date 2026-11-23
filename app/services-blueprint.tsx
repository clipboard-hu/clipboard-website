import Link from "next/link";

const serviceGroups = [
  {
    id: "web-es-mobil",
    href: "/weboldalkeszites",
    title: "Weboldalkészítés",
    description: "Weboldalak és webes alkalmazások egy konkrét üzleti feladatra.",
    items: ["Weboldaltervezés és -fejlesztés", "Egyedi webes termékek"],
    drawing: (
      <svg className="service-drawing" viewBox="0 0 320 156" aria-hidden="true">
        <g className="service-drawing-guides">
          <path d="M45 29h228M45 126h228M57 20v117m205-117v117M51 29h12m-6-6v12m199 91h12m-6-6v12" />
          <path d="m73 36 21-13m150 13 17-13m-22 99 16-13m-188 13 17-13" strokeDasharray="3 4" />
        </g>
        <g className="service-drawing-outline">
          <path d="m81 32 10-9 170 1-1 87-13 9M69 36l178 1-1 86-178-1Z M69 52l178 1M78 44h3m5 0h3m5 0h3m121 1h19" />
          <path d="M80 61h155m-154 8h22m75 0h12m8 0h12m8 0h15m-152 8 154 1m-153 8h63m-63 8h49m-49 17h23" />
          <path d="M159 85l74 1v27h-74Z M164 108l17-16 14 10 14-10 19 17" />
          <path d="m165 88 7 7m-2-8 5 5m47 18 7-6m-2 7 4-3" opacity=".45" />
        </g>
        <path className="service-drawing-accent" d="M182 69h9m-76 34h30v11h-30Z" />
      </svg>
    ),
  },
  {
    id: "marketing-es-hirdetesek",
    title: "PPC-hirdetések",
    description: "Elkészítjük a hirdetéseidet és kezeljük a kampányaidat.",
    items: ["Hirdetéskészítés és kampánykezelés", "Analitika és konverziómérés"],
    drawing: (
      <svg className="service-drawing" viewBox="0 0 320 156" aria-hidden="true">
        <g className="service-drawing-guides">
          <path d="M17 35h287M17 123h287M27 25v109m265-109v109M21 35h12m-6-6v12m259 82h12m-6-6v12" />
          <path d="M105 83h122m-105 17h75" strokeDasharray="3 4" />
        </g>
        <g className="service-drawing-outline">
          <path d="m33 42 66 1-1 73H33Z M33 53l65 1M40 48h13m24 0h13M40 60h51v30H40Z m3 26 13-13 8 8 10-13 14 18m-47 11h41m-41 7h23" />
          <circle cx="54" cy="68" r="3" />
          <path d="m147 69 7 30 6-10 10-3Z m13 20 6 9m-23-34-3-5m12 4 3-5m-15 16-6-1" />
          <path d="m221 57 64 1v47l-64-1Z m0 2 32 25 32-25m-62 43 21-21m39 21-20-21" />
        </g>
        <path className="service-drawing-accent" d="M104 83h31m-6-5 6 5-6 5m48-5h35m-6-5 6 5-6 5" />
      </svg>
    ),
  },
  {
    id: "ai-es-automatizalas",
    title: "AI",
    href: "/ai",
    description: "A lehetőségek feltérképezésétől a működő eszközig.",
    items: ["AI-tanácsadás", "Gyakorlati AI-workshopok", "Egyedi AI-eszközök és automatizálás"],
    drawing: (
      <svg className="service-drawing" viewBox="0 0 320 156" aria-hidden="true">
        <g className="service-drawing-guides">
          <path d="M16 39h288M16 121h288M26 28v104m268-104v104M20 39h12m-6-6v12m262 70h12m-6-6v12" />
          <path d="M80 80h161M127 47h65m-64 65h63" strokeDasharray="3 4" />
        </g>
        <g className="service-drawing-outline">
          <path d="m31 47 34 1 15 16-1 49-49-1Z M65 48v17h15M39 75l30 1m-30 9h29m-29 10h21" />
          <path d="m135 52 49-1 9 9 1 40-10 10-49-1-9-9V61Z M143 62h33l7 7v23l-7 7-33 1-7-8V69Z" />
          <path d="M143 52v-9m12 8V41m12 10v-9m11 9v-9m-35 68v8m12-8v10m12-10v9m11-10v9m-52-50h-8m8 25h-9m76-25h8m-7 25h8" />
          <path d="m149 81 7 6 13-14M241 54l50 1v41l-27 1-15 13v-13l-8-1Z M250 68l32 1m-32 9h25m-25 8h18" />
        </g>
        <path className="service-drawing-accent" d="M87 81h31m-6-5 6 5-6 5m88-5h33m-6-5 6 5-6 5" />
      </svg>
    ),
  },
  {
    id: "mobilappok",
    title: "Mobilapp-fejlesztés",
    description: "Mobilalkalmazásokat tervezünk és fejlesztünk az ötlettől az áruházi megjelenésig.",
    items: ["iOS- és Android-appok"],
    drawing: (
      <svg className="service-drawing" viewBox="0 0 320 156" aria-hidden="true">
        <g className="service-drawing-guides">
          <path d="M60 24h202M60 134h202M73 14v131m174-131v131M67 24h12m-6-6v12m168 104h12m-6-6v12" />
          <path d="M75 113h170m-89 16h22" strokeDasharray="3 4" />
        </g>
        <g className="service-drawing-outline">
          <path d="M86 29h46q8 0 8 8v86q0 8-8 8H86q-8 0-8-8V37q0-8 8-8Z M90 36h38q5 0 5 5v76q0 6-5 6H90q-5 0-5-6V41q0-5 5-5Z" />
          <path d="M188 29h46q8 0 8 8v86q0 8-8 8h-46q-8 0-8-8V37q0-8 8-8Z M192 36h38q5 0 5 5v76q0 6-5 6h-38q-5 0-5-6V41q0-5 5-5Z" />
          <path d="M102 41h14m88 0h14m-118 76h18m84 0h18M91 52h36v29H91Z m3 24 11-13 7 8 6-5 6 10m-33 12h32m-32 6h20" />
          <circle cx="211" cy="74" r="14" />
          <path d="m204 74 5 5 9-10m-20 27h26m-21 7h16" />
        </g>
        <path className="service-drawing-accent" d="M91 101h28v10H91Z m53 5c14 0 19-8 19-18V79h12m-6-5 6 5-6 5" />
      </svg>
    ),
  },
];

export const serviceTitles = serviceGroups.map(({ title }) => title);

export function ServicesBlueprint() {
  return (
    <section id="szakteruletek" className="home-section services-blueprint" aria-labelledby="services-title">
      <h2 id="services-title">Miben tudunk segíteni?</h2>
      <p className="home-intro">
        Egy konkrét feladattal is fordulhatsz hozzánk, vagy összekapcsolhatjuk a fejlesztést, a marketinget és a mérést.
      </p>
      <div className="service-sheet">
        {serviceGroups.map(({ id, href, title, drawing, description, items }) => href ? (
          <Link id={id} key={id} href={href} className="service-panel service-choice">
            {drawing}
            <span className="service-label">
              <span>{title}</span>
              <svg className="service-toggle" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13m-5-5 5 5-5 5" />
              </svg>
            </span>
          </Link>
        ) : (
          <details id={id} key={id} className="service-panel" name="agency-services">
            <summary className="service-choice">
              {drawing}
              <span className="service-label">
                <span>{title}</span>
                <svg className="service-toggle" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </span>
            </summary>
            <div className="service-description">
              <p>{description}</p>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

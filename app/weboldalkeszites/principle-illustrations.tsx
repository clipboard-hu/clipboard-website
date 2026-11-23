import styles from "./page.module.css";

export function BrandStudy() {
  return (
    <svg className={styles.studyArt} viewBox="0 0 400 176" role="img" aria-label="Arculati tervlap egy minta logóval, betűmintával és négy színnel.">
      <path className={styles.studyGuide} d="M24 18H376M24 158H376M35 11v154M365 11v154" />
      <path d="M35 18h330v140H35zM185 18v140m0-49h180" />
      <path className={styles.studyGuide} d="M52 49h117m-117 77h117M60 40v95m101-95v95m-101-9 101-77m-101 0 101 77" />
      <path className={styles.studyLogo} d="m110 52 40 36-40 36-39-36zm0 14 25 22-25 22-24-22z" />
      <path d="m110 79 10 9-10 9-10-9z" />
      <text className={styles.studyType} x="203" y="82">Aa</text>
      <path d="M282 54h63m-63 15h48m-48 15h55" />
      <rect x="203" y="121" width="35" height="24" fill="var(--blueprint-ink)" />
      <rect x="239" y="121" width="35" height="24" fill="var(--ink)" stroke="var(--ink)" />
      <rect x="275" y="121" width="35" height="24" fill="var(--orange)" stroke="var(--orange)" />
      <rect x="311" y="121" width="35" height="24" fill="var(--paper)" />
    </svg>
  );
}

export function CartStudy() {
  return (
    <svg className={styles.studyArt} viewBox="0 0 400 176" role="img" aria-label="Három termékkártya egy webshop vázlatán. A középső kártya Kosárba gombját narancssárga vonal karikázza be. A kosár mellett narancssárga plusz egy jelzés látszik.">
      <path d="M28 15h344v143H28zM28 46h344m-328-15h51m161 0h32m17 0h19M330 24h3l3 10h11l3-8h-16" />
      <circle cx="338" cy="37" r="1" /><circle cx="345" cy="37" r="1" />
      <path className={styles.studyAccent} d="M353 23h6m-3-3v6m6-5 3-2v8" />
      {[43, 153, 263].map((left) => (
        <g key={left} transform={`translate(${left} 56)`}>
          <path d="M0 0h94v91H0zM7 7h80v37H7zM7 53h48m-48 9h31" />
          <path className={styles.studyGuide} d="m7 7 80 37m0-37L7 44" />
          <rect x="7" y="71" width="59" height="15" />
          <text x="36.5" y="82" textAnchor="middle">Kosárba</text>
        </g>
      ))}
      <path className={styles.studyAccent} d="M155 125c10-6 58-8 70 0 9 6 4 15-6 18-13 5-58 6-68-2-6-5-1-13 7-17" />
    </svg>
  );
}

export function ReadingFlowStudy() {
  return (
    <svg className={styles.studyArt} viewBox="0 0 400 176" role="img" aria-label="Egy weboldal vázlatán a navigáció és a nyitóblokk gombja be van karikázva. A lefelé mutató narancssárga nyíl az aláhúzott szakaszcímhez vezet.">
      <path className={styles.studyGuide} d="M81 29h223m-223 66h223m-223 68h223M86 8v162m210-162v162" />
      <path d="M94 7h194v160H94zM94 29h194m-184-12 5-4 5 4-5 4zm126-4h44v10h-44zM104 94h173" />
      <path d="m121 18 3-2 3 2 4-2 4 1m50 0 3-2 3 2 5-1m9 1 4-2 3 2 5-1m24 2 4-2 4 2 5-2 4 1m6-1 3 1" />
      <path d="m108 46 6-5 5 4 7-4 5 4 7-4 5 3 6-4 6 4 7-3 5 2 7-2m-66 14 5-3 5 2 6-3 6 2 5-2 7 2 6-3 6 2 7-2 6 2 6-1 6 1 5-2m-76 11 5-2 6 2 6-3 5 2 7-2 5 2 7-2 5 1" />
      <rect x="108" y="71" width="65" height="13" />
      <path d="m117 78 4-2 4 2 5-2 5 2 6-2 5 2 6-2 6 1m5-2 3 2-3 2" />
      <path d="M203 40h72v44h-72z" />
      <path className={styles.studyGuide} d="m204 41 70 42m0-42-70 42" />
      <path d="m108 111 7-5 6 4 6-5 6 4 8-4 7 3 7-4 8 4 7-3m-61 25 4-2 6 2 5-3 6 2 6-2 5 2 6-2 5 1 6-2 5 2m-54 11 6-2 5 2 7-2 5 1 6-2 6 2 7-2m38-5h37v24h-37zm47 0h37v24h-37z" />
      <path className={styles.studyAccent} d="M232 10c9-5 37-5 44 0 8 6 2 14-7 16-9 2-33 2-40-3-7-4-3-10 4-13M107 70c10-6 57-7 67 0 8 5 4 13-4 16-10 4-53 5-65-1-6-4-4-11 3-15m-1 47c16-2 40-1 67-3m109-91c27 4 35 25 29 47-5 18 8 36-6 57m-5-10 5 10 9-5" />
    </svg>
  );
}

export function DeliveryStudy() {
  return (
    <svg className={styles.studyArt} viewBox="0 0 400 176" role="img" aria-label="Óra és egy nyitóblokk három tervfázisa: vázlat, jóváhagyott terv és kész oldal.">
      <circle cx="200" cy="18" r="14" />
      <path d="M200 7v2m0 18v2m-11-11h2m18 0h2" />
      <path className={styles.studyAccent} d="M200 11v7l5 3" />
      {[11, 146, 281].map((left, index) => (
        <g key={left} transform={`translate(${left} 38)`}>
          <path d="M0 0h108v74H0zM0 15h108M8 8h17m48 0h26M9 27h32m-32 9h23m-23 9h26M9 55h23v10H9z" />
          <rect x="51" y="24" width="48" height="41" fill={index === 0 ? "none" : index === 1 ? "rgb(25 69 160 / 12%)" : "var(--blueprint-ink)"} />
          {index === 0 ? (
            <path className={styles.studyGuide} d="m51 24 48 41m0-41L51 65" />
          ) : (
            <path d="m59 59 13-17 9 9 8-12 6 20z" fill={index === 1 ? "none" : "var(--paper)"} />
          )}
          <text x="54" y="95" textAnchor="middle">{["Vázlat", "Jóváhagyott terv", "Kész oldal"][index]}</text>
        </g>
      ))}
      <path className={styles.studyAccent} d="M124 78h16m-5-4 5 4-5 4m124-4h16m-5-4 5 4-5 4" />
    </svg>
  );
}

export function AuditStudy() {
  return (
    <svg className={styles.auditStudy} viewBox="0 0 400 220" aria-hidden="true">
      <rect x="21" y="12" width="358" height="196" rx="5" />
      <path d="M21 40h358M42 57h47m169 0h26m13 0h23m13 0h25" />
      <circle cx="35" cy="26" r="2" />
      <circle cx="45" cy="26" r="2" />
      <circle cx="55" cy="26" r="2" />
      <path d="M42 84h108m-108 10h83" strokeWidth="2.5" />
      <path d="M42 111h122m-122 9h99m-99 9h74" opacity=".58" />
      <rect x="225" y="77" width="133" height="91" />
      <path d="m225 77 133 91m0-91-133 91M42 169h130" opacity=".42" strokeDasharray="3 5" />
      <rect x="42" y="181" width="76" height="16" />
      <path d="M53 189h32m13 0h9m-4-3 4 3-4 3" />
      <g className={styles.auditMark}>
        <rect x="42" y="140" width="76" height="17" strokeDasharray="4 4" strokeWidth="1.6" />
        <path d="M42 178c17-4 67-5 81 0 11 4 12 17-1 22-18 6-72 7-86 0-11-5-7-17 6-22Z" />
        <path d="M133 186c41-2 48-36-7-37m8-6-8 6 8 6" />
      </g>
    </svg>
  );
}

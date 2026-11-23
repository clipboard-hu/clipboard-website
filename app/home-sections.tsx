import styles from "./partnership.module.css";

const steps = [
  {
    title: "Ingyenes audittal kezdünk",
    description: "Az AI korában szerintünk még fontosabb, hogy először megértsük, mire van szüksége az ügyfeleinknek. Az ingyenes audit és a 60 perces konzultáció során közösen megnézzük, mi működik már jól, hol van elakadás, és melyik megoldás segítene a legtöbbet a vállalkozásnak.",
    number: "M34 38Q42 34 49 25Q46 46 45 66M34 67Q46 65 57 67",
    drawing: (
      <>
        <path className={styles.guides} d="M24 39H147M24 70H147M55 16v78m53-78v78M82 14v81M27 54h124" />
        <circle cx="82" cy="54" r="27" />
        <path d="M56 32l-9 8v29l9 8m51-45 9 8v29l-9 8M74 54h16m-8-8v16M103 73l23 20 8-9-23-20" />
        <circle className={styles.annotation} cx="82" cy="54" r="9" />
      </>
    ),
  },
  {
    title: "Részletes árajánlatot adunk",
    description: "Szerintünk a jó együttműködés alapja a transzparencia, hogy már az elején világos legyen, miről születik döntés. Az ingyenes ajánlatban leírjuk, milyen feladatokból áll a munka, mennyi időt vesz igénybe, és mennyibe kerül. Fontos nekünk, hogy gyorsan adjunk ajánlatot, és az ár arányban legyen azzal, amit vállalunk.",
    number: "M32 34C38 22 62 22 59 38C57 48 40 56 32 67Q47 63 62 65",
    drawing: (
      <>
        <path className={styles.guides} d="M25 23h128M25 88h128M44 13v83m82-83v83M32 64h114" />
        <path d="M44 23h66l16 16v49H44ZM110 23v16h16M58 43h32M58 55h53M58 66h53M58 76h35" />
        <path className={styles.annotation} d="M54 99h64m-59-4-5 4 5 4m54-8 5 4-5 4M54 94v9m64-9v9" />
      </>
    ),
  },
  {
    title: "Rendszeresen egyeztetünk a haladásról",
    description: "A fontos döntéseket közösen hozzuk meg. Munka közben rendszeresen megmutatjuk, mi készült el és mi következik. Így van idő visszajelzést adni és szükség esetén alakítani a terveken.",
    number: "M32 33C42 24 63 23 59 35C57 41 48 45 43 46C58 45 65 52 58 61C52 70 39 70 31 64",
    drawing: (
      <>
        <path className={styles.guides} d="M22 31h130M22 84h130M45 13v85m82-85v85M28 57h125M87 12v87" />
        <path d="M37 24h62v39H61L49 74V63H37ZM106 44h29v38h-12v11l-12-11H76V70M49 37h37M49 48h27M109 56h14M88 70h35" />
        <path className={styles.annotation} d="M89 55q11-3 18 2l-5-8m5 8-9 2" />
      </>
    ),
  },
  {
    title: "Felkészülünk az indulásra",
    description: "Átadáskor közösen áttekintjük az elkészült munkát, tisztázzuk a felmerülő kérdéseket, és megbeszéljük az induláshoz szükséges teendőket.",
    number: "M51 24Q43 38 29 52Q45 49 63 50M55 27Q52 48 52 68",
    drawing: (
      <>
        <path className={styles.guides} d="M25 77h127M26 91h128M48 17v83m80-83v83M89 10v92M30 56h115" />
        <path d="M48 77l40-18 40 18-40 18ZM48 77v8l40 16 40-16v-8M88 95v6M67 75l21 9 21-9" />
        <path className={styles.annotation} d="M88 69V25M73 40l15-15 15 15M68 59l-8-6m49 6 8-6" />
      </>
    ),
  },
  {
    title: "Az indulás után is lehet ránk számítani",
    description: "Hiszünk a hosszú távú együttműködésben. Az indulás után is szívesen válaszolunk a felmerülő kérdésekre, átbeszéljük az első eredményeket, és segítünk eldönteni, mit érdemes továbbfejleszteni.",
    number: "M61 26Q49 28 36 27L32 45C49 39 63 44 58 56C54 68 40 71 31 64",
    drawing: (
      <>
        <path className={styles.guides} d="M25 30h126M25 81h126M54 14v85m66-85v85M87 12v87M24 55h130" />
        <path d="M63 29a35 35 0 0 1 59 27m-10 25a35 35 0 0 1-59-27m60 1 9 7 7-9m-67 3-9-7-7 9M74 55h6m7 0h5m7 0h5" />
        <path className={styles.annotation} d="M118 36a36 36 0 0 1 4 26m-9-7 9 7 7-9" />
      </>
    ),
  },
];

export function HomeSections() {
  return (
    <section id="kozos-munka" className={`home-section ${styles.partnership}`} aria-labelledby="partnership-title">
      <h2 id="partnership-title">Így dolgozunk együtt.</h2>

      <ol className={styles.plan} role="list">
        {steps.map(({ title, description, number, drawing }) => (
          <li className={styles.step} key={title}>
            <svg className={styles.route} viewBox="0 0 24 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M12 0C5 14 17 32 12 50C7 68 18 85 12 100" vectorEffect="non-scaling-stroke" />
            </svg>
            <svg className={styles.number} viewBox="0 0 96 94" aria-hidden="true">
              <path className={styles.ring} d="M66 14C46 4 20 13 12 33C3 54 14 78 36 84C58 91 84 80 88 57C93 36 76 16 55 13C38 10 23 17 17 25" />
              <path className={styles.ringTrace} d="M71 78C83 70 91 57 88 44M29 18C19 24 12 32 10 43" />
              <path className={styles.digit} d={number} />
            </svg>
            <div className={styles.copy}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <svg className={styles.sketch} viewBox="0 0 178 110" aria-hidden="true">
              {drawing}
            </svg>
          </li>
        ))}
      </ol>
    </section>
  );
}

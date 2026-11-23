import styles from "./page.module.css";

export function CampaignWorkflow() {
  return (
    <section className={styles.workflow} aria-labelledby="campaign-workflow-title">
      <div className={styles.workflowIntro}>
        <h2 id="campaign-workflow-title">Túl a chatablakon.</h2>
        <p>
          Ha az AI ismeri a feladat célját, és hozzáfér a szükséges céges adatokhoz és eszközökhöz,
          több lépést is elvégezhet egy munkafolyamatban. Egy heti kampányértékelésnél például
          összevetheti az adatokat, kiszámolhatja a változásokat és elkészítheti az összefoglaló első változatát.
        </p>
      </div>

      <figure className={styles.workflowExample}>
        <figcaption>Szemléltető példa egy heti kampányértékelésre</figcaption>
        <ol className={styles.workflowSteps}>
          <li>
            <h3>Megadjuk a célt és a forrásokat</h3>
            <p>Az AI megkapja a kampány briefjét és a heti riportokat. A cél, hogy ugyanabból a keretből több ajánlatkérés érkezzen.</p>
            <table className={styles.workflowTable}>
              <caption>Heti kampányriport</caption>
              <thead>
                <tr><td /><th scope="col">Előző hét</th><th scope="col">Ezen a héten</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Költés</th><td>120 000 Ft</td><td>120 000 Ft</td></tr>
                <tr><th scope="row">Ajánlatkérés</th><td>24</td><td>30</td></tr>
              </tbody>
            </table>
          </li>
          <li>
            <h3>Az AI összeveti az adatokat</h3>
            <p>Kiszámolja, mennyibe került egy ajánlatkérés a két héten, és kiemeli, mi változott.</p>
            <dl className={styles.workflowAnalysis}>
              <dt>Egy ajánlatkérés költsége</dt>
              <dd>5 000 Ft <span aria-hidden="true">→</span><span className="sr-only"> helyett </span> 4 000 Ft</dd>
            </dl>
          </li>
          <li>
            <h3>A csapat ellenőriz és dönt</h3>
            <p>A kampányfelelős visszanézi a forrást és a számítást. Ezután a csapat dönt a következő heti keretről.</p>
            <blockquote className={styles.workflowFinding}>
              <p>Ugyanakkora költésből <strong>25%-kal több ajánlatkérés</strong> érkezett.</p>
            </blockquote>
          </li>
        </ol>
      </figure>
    </section>
  );
}

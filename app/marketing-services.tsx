import styles from "./marketing-services.module.css";

const conversions = [
  { channel: "Google Ads", count: 13 },
  { channel: "Meta Ads", count: 8 },
  { channel: "TikTok Ads", count: 3 },
];
const totalConversions = conversions.reduce((total, { count }) => total + count, 0);

export function MarketingServices() {
  return (
    <section id="marketing" className={`home-section ${styles.marketing}`} aria-labelledby="marketing-title" tabIndex={-1}>
      <h2 id="marketing-title">PPC-hirdetések</h2>

      <div className={styles.feature}>
        <div className={styles.copy}>
          <h3>PPC-kampánykezelés</h3>
          <p>Elkészítjük a hirdetéseidet és kezeljük a kampányaidat.</p>
          <ul className={styles.platforms} aria-label="Hirdetési platformok">
            <li>Google Ads</li>
            <li>Meta Ads (Facebook és Instagram)</li>
            <li>TikTok Ads</li>
            <li>Apple Ads</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.feature} ${styles.measurement}`}>
        <figure className={`${styles.capture} ${styles.report}`} aria-label="Kampányriport mintaadatokkal">
          <div className={styles.reportHeader}>
            <strong>Kampányriport</strong>
            <span>Mintaadatok</span>
          </div>
          <div className={styles.reportBody}>
            <div className={styles.metric}>
              <span>Ajánlatkérések</span>
              <strong>{totalConversions}</strong>
            </div>
            <table className={styles.channels} aria-label="Ajánlatkérések hirdetési csatornánként">
              <tbody>
                {conversions.map(({ channel, count }) => (
                  <tr key={channel}>
                    <th scope="row">{channel}</th>
                    <td className={styles.trackCell} aria-hidden="true">
                      <div className={styles.track}>
                        <span style={{ width: `${count / totalConversions * 100}%` }} />
                      </div>
                    </td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
        <div className={styles.copy}>
          <h3>Analitika és konverziómérés</h3>
          <p>Beállítjuk a mérést, hogy lásd, melyik kampányból jönnek az ajánlatkérések és a vásárlások.</p>
          <a className="home-text-link" href="#marketingaudit">Megnézem az ingyenes auditot</a>
        </div>
      </div>
    </section>
  );
}

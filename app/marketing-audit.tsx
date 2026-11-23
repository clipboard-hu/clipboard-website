import Image from "next/image";
import { ConsultationButton } from "./consultation-button";

export function MarketingAudit() {
  return (
    <section id="marketingaudit" aria-labelledby="marketing-audit-title" className="marketing-audit">
      <div className="marketing-audit-copy">
        <h2 id="marketing-audit-title">Ingyenes marketing audit</h2>
        <p>Átnézzük a hirdetéseidet, a céloldalaidat és a konverziómérést.</p>
        <ConsultationButton className="primary-cta" dialogId="marketing-audit-request">
          Kérem az ingyenes auditot
          <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
            <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ConsultationButton>
      </div>

      <Image
        className="marketing-audit-art"
        src="/assets/marketing-audit-projection.svg"
        width={700}
        height={420}
        alt="A vetítő egy példát mutat: a hirdetésből érkező látogató ajánlatot kér a céloldalon, de az ajánlatkérés kimarad a konverziómérésből."
        unoptimized
      />

      <dialog id="marketing-audit-request" aria-labelledby="marketing-audit-request-title">
        <form method="dialog">
          <h2 id="marketing-audit-request-title">Ingyenes marketing audit</h2>
          <p>Megmutatjuk, hol szakad meg a mérés, és melyik javítással érdemes kezdened.</p>
          <button className="primary-cta" type="submit" autoFocus>Vissza</button>
        </form>
      </dialog>
    </section>
  );
}

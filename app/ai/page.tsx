import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationButton } from "../consultation-button";
import { ConsultationDialog, SiteHeader } from "../site-header";
import { CampaignWorkflow } from "./campaign-workflow";
import styles from "./page.module.css";

const title = "AI tanácsadás és fejlesztés";
const description = "Segítünk kiválasztani a megfelelő AI-eszközöket, gyakorlati workshopon felkészítjük a csapatot, és egyedi megoldásokat fejlesztünk a napi munkához.";

export const metadata: Metadata = {
  title: `${title} | Digitális ügynökség`,
  description,
};

function WorkflowIllustration() {
  return (
    <figure className={styles.figure}>
      <picture>
        <source media="(max-width: 760px)" srcSet="/assets/ai-exploded-blueprint-960.webp" />
        <Image
          src="/assets/ai-exploded-blueprint.webp"
          width={1448}
          height={1086}
          alt="Robbantott tervrajz három rétegben. Egy narancssárga vonal köti össze a kampányadatokat, az elemzést és az ellenőrzött jelentést."
          loading="eager"
          fetchPriority="high"
          unoptimized
        />
      </picture>
      <figcaption>Szemléltető példa egy kampány értékelésére.</figcaption>
    </figure>
  );
}

export default function AiPage() {
  return (
    <>
      <SiteHeader />
      <main className={`frame ${styles.page}`}>
        <nav aria-label="Oldal helye">
          <ol className={styles.breadcrumb}>
            <li><Link href="/">Kezdőlap</Link></li>
            <li><Link href="/#szakteruletek">Szakterületek</Link></li>
            <li aria-current="page">AI</li>
          </ol>
        </nav>
        <section className={styles.hero} aria-labelledby="ai-title">
          <div className={styles.copy}>
            <h1 id="ai-title">{title}</h1>
            <p>{description}</p>
            <ConsultationButton className="primary-cta">Ingyenes, 60 perces konzultáció</ConsultationButton>
          </div>
          <WorkflowIllustration />
        </section>
        <CampaignWorkflow />
      </main>
      <ConsultationDialog />
    </>
  );
}

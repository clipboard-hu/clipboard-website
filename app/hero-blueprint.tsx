import Image from "next/image";

export function HeroBlueprint() {
  return (
    <figure className="hero-blueprint">
      <Image
        src="/assets/hero-folded-blueprint.webp"
        width={1448}
        height={1086}
        alt="Absztrakt, hajtogatott tervrajz. Egy narancssárga vonal fut végig az eltérő ritmusú kék mezőkön."
        loading="eager"
        fetchPriority="high"
        unoptimized
      />
    </figure>
  );
}

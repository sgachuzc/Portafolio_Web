import { useSearchParams } from "@/hooks/useSearchParams";
import { AuroraText } from "@/components/ui/aurora-text"
import { CVButton, SocialMediaButton } from "@/components";
import { socialMedia } from "@/mocks";

interface HeroProps {
  isHighlighting: boolean;
}

const hightlightClass = "border border-blue-500/80 shadow-cyan-500/50 scale-125 transition-all duration-300";

export const HeroSection = ({ isHighlighting }: HeroProps) => {

  const { showElement } =useSearchParams();

  return (
    <section className="relative overflow-hidden sm:py-15 py-5 flex justify-center items-center h-dvh">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <img
                src="./images/black_logo.png"
                alt="logo"
                className="h-16 filter saturate-10"
              />
            </div>
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-pretty lg:text-6xl">
                <span className="text-primary">SERGIO </span>
                <AuroraText>GACHÚZ</AuroraText>
              </h1>
              <p className="mx-auto max-w-3xl w-4/5 text-muted-foreground lg:text-xl">
                Programar es convertir la complejidad en claridad. Es crear sistemas que no solo funcionan, sino que se adaptan, crecen y conectan con las personas
              </p>
            </div>
            { showElement && ( <CVButton/> ) }
            <div className="mt-10 sm:mt-16 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
                Encuentrame en:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {
                  socialMedia.map( ({ linkTo, imgUrl, altText }) => (
                    <SocialMediaButton
                      key={altText}
                      linkTo={linkTo}
                      imgUrl={imgUrl}
                      altText={altText}
                      isHighlighting={isHighlighting}
                      hightlightClass={hightlightClass}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
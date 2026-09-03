import { useSearchParams } from "@/hooks/useSearchParams";
import { AuroraText } from "@/components/ui/aurora-text"
import { CVButton } from "@/components";

export const HeroSection = () => {

  const { showElement } =useSearchParams();

  return (
    <section className="dark relative overflow-hidden sm:py-15 py-5 flex justify-center items-center h-dvh ">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="./images/square-alt-grid-dark.svg"
          className="h-full w-full object-cover [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-white/5 p-4 shadow-sm backdrop-blur-sm">
              <img
                src="./images/black_logo.png"
                alt="logo"
                className="h-16"
              />
            </div>
            <div>
              <h1 className="mb-0 text-6xl font-bold tracking-tighter text-pretty lg:text-9xl leading-none text-white">
                <span className="text-black">SERGIO </span>
                <br></br>
                <AuroraText>GACHÚZ</AuroraText>
              </h1>
            </div>
            <div className="mt-4 mb-6 flex flex-col items-center gap-5">
              <p className="font-medium text-muted lg:text-left">
                DESARROLLADOR WEB
              </p>
            </div>
            { showElement && ( <CVButton/> ) }
          </div>
        </div>
      </div>
    </section>
  );
}
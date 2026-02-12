import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 bg-background">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Hero Image */}
        <div className="relative w-full md:w-1/2">
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/hero-vase.png"
              alt="Vase en ceramique blanc fait main"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex w-full flex-col items-start md:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-5">
            Nouveautés
          </span>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
             Façonné à la main, inspiré par la terre.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {
              "Découvrez notre nouvelle collection de céramiques artisanales, conçue pour une maison où le bien-être est au cœur de tout. Chaque pièce raconte l'histoire de l'argile dont elle est issue."
            }
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/collection"
              className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-chart-5 text-white text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all"
            >
              Explorer la collection
            </Link>
            <Link
              href="#process"
              className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 border-2 border-chart-5 text-chart-5 text-base font-bold leading-normal tracking-[0.015em] hover:bg-chart-5 hover:text-white transition-all"
            >
              Notre Processus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

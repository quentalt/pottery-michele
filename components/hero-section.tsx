import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
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
            New Arrivals
          </span>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Formed by hand, inspired by earth.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {
              "Discover our latest collection of artisanal ceramics, designed for the intentional home. Every piece tells a story of the clay it came from."
            }
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/collection"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-chart-5 px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Collection
            </Link>
            <Link
              href="#process"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-chart-5 px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

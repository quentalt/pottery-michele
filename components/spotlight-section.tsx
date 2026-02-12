import Image from "next/image";
import Link from "next/link";
import {Eye} from "lucide-react";

export function SpotlightSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="overflow-hidden rounded-sm bg-secondary">
        <div className="flex flex-col md:flex-row">
          {/* Spotlight Image */}
          <div className="relative aspect-square w-full md:aspect-auto md:w-1/2">
            <Image
              src="/images/spotlight-bowl.jpg"
              alt="Poterie du moment - Sable Curve"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Spotlight Content */}
          <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:p-16">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="inline-block h-px w-6 bg-primary" />
              Featured Spotlight
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Poterie du moment
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                'This month, we celebrate the "Sable Curve" \u2014 a vessel born from a week-long meditation on coastal forms. Hand-coiled with a unique blend of local river sand and dark stoneware, its raw exterior contrasts beautifully with a soft, moonstone-white glaze inside.'
              }
            </p>
            <blockquote className="mt-6 border-l-0 italic text-muted-foreground">
              <p className="text-sm">
                {'"A tribute to the quiet persistence of erosion."'}
              </p>
              <cite className="mt-1 block text-xs not-italic uppercase tracking-widest text-muted-foreground">
                {"— Master Ceramist, Lena V."}
              </cite>
            </blockquote>
            <Link
              href="/product"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Eye/>
              Découvrir
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

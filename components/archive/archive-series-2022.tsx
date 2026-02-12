import Image from "next/image";
import Link from "next/link";

export function ArchiveSeries2022() {
    return (
        <section className="px-6 pb-20">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <div className="flex items-end justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                        <span className="block h-8 w-1 rounded-full bg-chart-5" />
                        <h2 className="font-serif text-2xl font-bold text-foreground">
                            The 2022 Series
                        </h2>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            08 Works
          </span>
                </div>

                {/* Bento grid layout */}
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
                    {/* Featured retrospective card - spans left side */}
                    <div className="relative md:col-span-1 lg:col-span-5 lg:row-span-2">
                        <div className="group relative aspect-[3/4] overflow-hidden bg-secondary lg:h-full">
                            <Image
                                src="/images/archive-terre-brulee.jpg"
                                alt="Terre Brulee Collection"
                                fill
                                className="object-cover brightness-50 transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 42vw"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                  Retrospective
                </span>
                                <h3 className="mt-2 font-serif text-2xl font-bold italic text-primary-foreground md:text-3xl">
                                    {"Terre Br\u00fbl\u00e9e Collection"}
                                </h3>
                                <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                                    {
                                        "An exploration of scorched earth textures and volcanic glaze chemistry conducted during the winter of 2022."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Top-right small images - 2x2 grid on the right */}
                    <div className="group relative aspect-square overflow-hidden bg-secondary lg:col-span-4 lg:col-start-6">
                        <Image
                            src="/images/archive-vessels.jpg"
                            alt="Pottery tools in ceramic holder"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 30vw"
                        />
                    </div>

                    <div className="group relative aspect-square overflow-hidden bg-secondary lg:col-span-3 lg:col-start-10">
                        <Image
                            src="/images/archive-vessels.jpg"
                            alt="Abstract ceramic texture"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 30vw"
                        />
                    </div>

                    {/* Bottom-right */}
                    <div className="group relative aspect-square overflow-hidden bg-secondary lg:col-span-4 lg:col-start-6 lg:row-start-2">
                        <Image
                            src="/images/archive-vessels.jpg"
                            alt="Minimalist ceramic plate"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 30vw"
                        />
                    </div>

                    {/* View more cell */}
                    <Link
                        href="/collection"
                        className="flex aspect-square items-center justify-center border border-dashed border-border bg-accent/40 transition-colors hover:bg-accent lg:col-span-3 lg:col-start-10 lg:row-start-2"
                    >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              View More
            </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

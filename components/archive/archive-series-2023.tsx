import Image from "next/image";

const works = [
    {
        id: "23.01",
        title: "Sculptural Vessels \u2013 Form I",
        description: "Raw stoneware, white slip glaze",
        image: "/images/archive-vessels.jpg",
    },
    {
        id: "23.04",
        title: "Earth & Ash",
        description: "Reduction fired, natural ash finish",
        image: "/images/archive-earth-ash.jpg",
    },
    {
        id: "23.09",
        title: "Minimalist Triptych",
        description: "Set of three, black matte basalt",
        image: "/images/archive-triptych.jpg",
    },
];

export function ArchiveSeries2023() {
    return (
        <section className="px-6 pb-16 pt-4">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <div className="flex items-end justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                        <span className="block h-8 w-1 rounded-full bg-chart-5" />
                        <h2 className="font-serif text-2xl font-bold text-foreground">
                            The 2023 Series
                        </h2>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            12 Works
          </span>
                </div>

                {/* Staggered grid */}
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            className={`${index === 1 ? "md:mt-12" : ""}`}
                        >
                            <div className="group relative aspect-[3/4] overflow-hidden bg-secondary">
                                <Image
                                    src={work.image || "/placeholder.svg"}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Archive {work.id}
                </span>
                                <h3 className="mt-1 font-serif text-lg font-bold text-foreground">
                                    {work.title}
                                </h3>
                                <p className="mt-1 font-serif text-sm italic text-muted-foreground">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

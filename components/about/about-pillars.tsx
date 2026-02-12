import Image from "next/image";

const pillars = [
    {
        image: "/images/about-earth.jpg",
        title: "Earth",
        description:
            "Sourcing raw materials from the local terrain, respecting the minerals that give our work its unique grit.",
        alt: "Blocs d'argile brute sur une surface en bois",
    },
    {
        image: "/images/about-form.jpg",
        title: "Form",
        description:
            "Centering, pulling, and shaping. A meditative state where the hand follows the intuition of the material.",
        alt: "Potier faconnant un vase sur le tour",
    },
    {
        image: "/images/about-fire.jpg",
        title: "Fire",
        description:
            "The final transformation. Temperatures reaching 2300F forge the bond between clay and glass.",
        alt: "Bols en ceramique finis sur une etagere en bois",
    },
];

export function AboutPillars() {
    return (
        <section className="px-6 pb-20">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
                {pillars.map((pillar, index) => (
                    <div
                        key={pillar.title}
                        className={`flex flex-col ${index === 1 ? "sm:mt-10" : ""}`}
                    >
                        <div className="overflow-hidden rounded-sm">
                            <Image
                                src={pillar.image || "/placeholder.svg"}
                                alt={pillar.alt}
                                width={400}
                                height={500}
                                className={`w-full object-cover ${
                                    index === 1
                                        ? "h-[340px] md:h-[380px]"
                                        : "h-[280px] md:h-[320px]"
                                }`}
                            />
                        </div>
                        <h3 className="mt-5 font-serif text-lg italic text-foreground">
                            {pillar.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

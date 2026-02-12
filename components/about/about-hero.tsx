import Image from "next/image";

export function AboutHero() {
    return (
        <section className="px-6 pt-8 pb-0">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-sm">
                <Image
                    src="/images/about-hero.jpg"
                    alt="Mains d'artisan faconnant l'argile sur un tour de potier"
                    width={1200}
                    height={500}
                    className="h-[320px] w-full object-cover md:h-[420px]"
                    priority
                />
            </div>
        </section>
    );
}

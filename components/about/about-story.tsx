export function AboutStory() {
    return (
        <section className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
                {/* Section label */}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    The Artisan
                </p>

                {/* Title */}
                <h1 className="mt-4 font-serif text-5xl italic text-foreground md:text-6xl">
                    {"L'Artisanat"}
                </h1>

                {/* Divider */}
                <div className="mx-auto mt-6 h-[2px] w-12 bg-primary" />

                {/* Quote */}
                <blockquote className="mt-10 font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
                    {
                        '"Dans la danse silencieuse entre la terre et la main, nous trouvons l\'âme de chaque récipient. Notre processus est un lent dialogue avec le temps, où l\'argile brute est transformée par la patience, le feu et l\'intention."'
                    }
                </blockquote>
            </div>

            {/* Body paragraphs */}
            <div className="mx-auto mt-14 max-w-xl">
                <p className="text-justify text-[15px] leading-relaxed text-foreground">
                    Niché dans un coin ensoleillé de la côte, notre atelier est né d&#39;&apos;un désir de renouer avec le monde physique. Chaque pièce qui sort de notre four porte l'empreinte de son créateur, témoignant de la beauté de l'imperfection et de la poésie tactile des objets du quotidien.
                    Nous croyons que les objets qui nous entourent doivent raconter une histoire. Non pas celle de la production de masse et de la rapidité, mais celle des saisons, des minéraux et du rythme immuable du tour de potier. Chaque émail est préparé à la main, à partir d'argiles locales et de pigments organiques, afin de refléter les paysages qui nous inspirent.
                </p>

                <p className="mt-8 text-justify text-[15px] leading-relaxed text-foreground">
                    {
                        "Nous croyons que les objets qui nous entourent doivent raconter une histoire. Non pas celle de la production de masse et de la rapidité, mais celle des saisons, des minéraux et du rythme immuable du tour de potier. Chaque émail est préparé à la main, à partir d'argiles locales et de pigments organiques, afin de refléter les paysages qui nous inspirent."
                    }
                </p>
            </div>
        </section>
    );
}

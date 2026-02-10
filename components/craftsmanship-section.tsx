import Image from "next/image";

const steps = [
  {
    number: "I",
    title: "The Centering",
    description:
      "Everything begins with balance. The clay is wedged and centered on the wheel, a moment of intense focus where the raw material finds its equilibrium.",
    image: "/images/centering.jpg",
  },
  {
    number: "II",
    title: "The Shaping",
    description:
      "Pressure and heat from the hands guide the clay upwards. Each finger mark is a signature of the craft, a physical dialogue between the maker and the earth.",
    image: "/images/shaping.jpg",
  },
  {
    number: "III",
    title: "The Firing",
    description:
      "Transformed by fire at 1,000\u00B0C. The kiln vitrifies the clay, locking in the form forever and bringing out the deep, earthy oranges of the terracotta.",
    image: "/images/firing.jpg",
  },
];

export function CraftsmanshipSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Craftsmanship
        </span>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {"The Artisan's Touch"}
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-10 bg-primary" />
      </div>

      {/* Steps Grid */}
      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
              <Image
                src={step.image || "/placeholder.svg"}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="mt-5 font-serif text-base font-semibold italic text-foreground">
              {step.number}. {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

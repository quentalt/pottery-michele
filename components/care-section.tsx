import Image from "next/image";
import { Droplets, Thermometer, Sparkles } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    text: "Hand wash only with mild soap to preserve the natural terracotta finish.",
  },
  {
    icon: Thermometer,
    text: "Avoid sudden temperature shifts. Allow to reach room temperature naturally.",
  },
  {
    icon: Sparkles,
    text: "Over time, the unglazed surface may develop a unique patina based on its environment.",
  },
];

export function CareSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted md:w-1/2">
          <Image
            src="/images/care-shelf.jpg"
            alt="Ceramiques artisanales sur etagere en bois"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Care Tips */}
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Caring for your Piece
          </h2>
          <ul className="mt-8 flex flex-col gap-6">
            {tips.map((tip) => {
              const Icon = tip.icon;
              return (
                <li key={tip.text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tip.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

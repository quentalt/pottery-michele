import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Speckled Stoneware Mug",
    description: "Hand-thrown, ivory glaze",
    image: "/images/stoneware-mug.png",
    badge: "Limited",
  },
  {
    name: "Minimalist Bud Vase",
    description: "Raw exterior, glazed interior",
    image: "/images/bud-vase.png",
    badge: null,
  },
  {
    name: "Ribbed Terra Bowl",
    description: "Warm earth tone, textured finish",
    image: "/images/terra-bowl.png",
    badge: null,
  },
];

export function FeaturedCollection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 bg-background">
      {/* Section Header */}
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Featured Collection
          </h2>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            Autumn 2024 Series
          </p>
        </div>
        <Link
          href="/collection"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {"Voir Tout \u2192"}
        </Link>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.name}
            href="/product"
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {product.badge && (
                <span className="absolute bottom-3 left-3 rounded-sm bg-foreground/80 px-3 py-1 text-[10px] uppercase tracking-widest text-background">
                  {product.badge}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-serif text-base font-medium text-foreground">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

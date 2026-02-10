"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

const thumbnails = [
  "/images/terracotta-vase.jpg",
  "/images/tall-vase.jpg",
  "/images/terra-bowl.jpg",
];

export function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Fil d'ariane">
        <Link href="/" className="transition-colors hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/collection"
          className="transition-colors hover:text-foreground"
        >
          Gallery
        </Link>
        <span>/</span>
        <span className="text-foreground">Terracotta Vase</span>
      </nav>

      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        {/* Image Gallery */}
        <div className="flex w-full gap-4 md:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {thumbnails.map((thumb, i) => (
              <button
                key={thumb}
                type="button"
                onClick={() => setSelectedImage(i)}
                className={`relative h-16 w-16 overflow-hidden rounded-sm transition-opacity ${
                  selectedImage === i
                    ? "opacity-100 ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Voir image ${i + 1}`}
              >
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src={thumbnails[selectedImage] || "/placeholder.svg"}
              alt="Hand-thrown Terracotta Vase"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex w-full flex-col md:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Series No. 042
          </span>
          <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Hand-thrown Terracotta Vase
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {
              "Born from the rich, iron-heavy clay of the valley, each vase is a unique testament to the rhythmic dance between hand and wheel. No two pieces are identical, capturing the raw energy of the earth."
            }
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {
              "The unglazed exterior celebrates the natural porosity of terracotta, while the interior is treated with a clear, waterproof glaze to ensure longevity and function."
            }
          </p>

          {/* Add to Wishlist */}
          <button
            type="button"
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-foreground text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background md:max-w-xs"
          >
            <Heart className="h-4 w-4" />
            Add to Wishlist
          </button>

          {/* Specs */}
          <div className="mt-8 flex gap-12">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Dimensions
              </span>
              <p className="mt-1 text-sm font-medium text-foreground">
                {"12\" H x 6\" W"}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Material
              </span>
              <p className="mt-1 text-sm font-medium text-foreground">
                Local Terracotta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

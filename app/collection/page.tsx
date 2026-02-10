'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
    "View All",
    "Dining Sets",
    "Coffee & Tea",
    "Decor",
    "Limited Edition",
];

const products = [
    {
        name: "Speckled Stoneware Bowl",
        description: "Hand-thrown, ivory glaze",
        image: "/images/stoneware-mug.jpg",
        category: "Dining Sets",
    },
    {
        name: "Ochre Dinner Plate",
        description: "Warm earth tones, dishwasher safe construction",
        image: "/images/dinner-plate.jpg",
        category: "Dining Sets",
    },
    {
        name: "Nesting Bowls Set",
        description: "Three graduated sizes, storage efficient design",
        image: "/images/nesting-bowls.jpg",
        category: "Dining Sets",
    },
    {
        name: "Matte Charcoal Mug",
        description: "Textured finish, 12oz capacity",
        image: "/images/charcoal-mug.jpg",
        category: "Coffee & Tea",
    },
    {
        name: "Terra Tall Vase",
        description: "Raw exterior contrast, glazed internal finish",
        image: "/images/tall-vase.jpg",
        badge: "Collection Highlight",
        category: "Decor",
    },
    {
        name: "Zen Teapot",
        description: "Hand-carved spout, includes precision mesh strainer",
        image: "/images/zen-teapot.jpg",
        category: "Coffee & Tea",
    },
];

export default function CollectionPage() {
    const [activeCategory, setActiveCategory] = useState("View All");

    const filteredProducts =
        activeCategory === "View All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    <span className="text-balance">{"Handcrafted Earth & Fire"}</span>
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {
                        "Experience the quiet beauty of intentional living. Each piece is hand-thrown in our studio, carrying the unique marks of the maker."
                    }
                </p>
            </div>

            {/* Category Tabs */}
            <nav className="mt-10 flex flex-wrap items-center justify-center gap-6 border-b border-border pb-4" aria-label="Filtrer par categorie">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm transition-colors ${
                            activeCategory === cat
                                ? "border-b-2 border-foreground pb-[14px] font-medium text-foreground"
                                : "pb-[16px] text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {/* Product Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
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
                            {"badge" in product && product.badge && (
                                <span className="absolute left-3 top-3 rounded-sm bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
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

            {/* Load More */}
            <div className="mt-16 flex justify-center">
                <button
                    type="button"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-foreground px-8 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                    Discover More Pieces
                </button>
            </div>
        </div>
    );
}

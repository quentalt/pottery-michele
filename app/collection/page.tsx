'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
    "Voir Tout",
    "Dining Sets",
    "Coffee & Tea",
    "Decor",
    "Limited Edition",
];

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    badge?: string | null;
    price?: number | null;
}

export default function CollectionPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "Voir Tout";

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, [activeCategory]);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const categoryParam = activeCategory !== "Voir Tout"
                ? `?category=${encodeURIComponent(activeCategory)}`
                : "";

            const response = await fetch(`/api/products${categoryParam}`);

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError("Impossible de charger les produits");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);

        // Update URL without page reload
        if (category === "Voir Tout") {
            router.push("/collection");
        } else {
            router.push(`/collection?category=${encodeURIComponent(category)}`);
        }
    };

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
                {/* Page Header */}
                <div className="text-center">
                    <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        <span className="text-balance">{"Handcrafted Earth & Fire"}</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                        {
                            "Goûtez à la beauté paisible d'une vie vécue en pleine conscience. Chaque pièce est façonnée à la main dans notre atelier, portant ainsi la marque unique de son créateur."
                        }
                    </p>
                </div>

                {/* Category Tabs */}
                <nav className="mt-10 flex flex-wrap items-center justify-center gap-6 border-b border-border pb-4" aria-label="Filtrer par catégorie">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => handleCategoryChange(cat)}
                            disabled={loading}
                            className={`text-sm transition-colors disabled:opacity-50 ${
                                activeCategory === cat
                                    ? "border-b-2 border-foreground pb-[14px] font-medium text-foreground"
                                    : "pb-[16px] text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>

                {/* Active Filter Display */}
                {activeCategory !== "Voir Tout" && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="text-sm text-muted-foreground">
                            Catégorie active : <strong className="text-foreground">{activeCategory}</strong>
                        </span>
                        <button
                            onClick={() => handleCategoryChange("Voir Tout")}
                            className="text-xs text-primary hover:text-primary/80 underline underline-offset-2"
                        >
                            Réinitialiser
                        </button>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="mt-12 text-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-foreground border-r-transparent"></div>
                        <p className="mt-4 text-sm text-muted-foreground">Chargement des produits...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="mt-12 text-center">
                        <p className="text-sm text-red-600">{error}</p>
                        <button
                            onClick={fetchProducts}
                            className="mt-4 rounded-full border border-foreground px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                        >
                            Réessayer
                        </button>
                    </div>
                )}

                {/* Product Grid */}
                {!loading && !error && (
                    <>
                        {products.length === 0 ? (
                            <div className="mt-12 text-center">
                                <p className="text-sm text-muted-foreground">
                                    Aucun produit trouvé dans cette catégorie.
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className="mt-8 text-center text-sm text-muted-foreground">
                                    {products.length} produit{products.length > 1 ? "s" : ""} trouvé{products.length > 1 ? "s" : ""}
                                </p>
                                <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                    {products.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.id}`}
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
                                            {product.price && (
                                                <p className="mt-2 text-sm font-medium text-foreground">
                                                    {product.price.toFixed(2)} €
                                                </p>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
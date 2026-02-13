// app/product/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function getProduct(idStr: string) {
    try {
        const id = parseInt(idStr, 10);
        if (Number.isNaN(id)) return null;

        const product = await prisma.product.findUnique({
            where: { id },
        });
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
                <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/" className="transition-colors hover:text-foreground">
                        Accueil
                    </Link>
                    <span>/</span>
                    <Link href="/collection" className="transition-colors hover:text-foreground">
                        Collection
                    </Link>
                    <span>/</span>
                    <span className="text-foreground">{product.name}</span>
                </nav>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {product.badge && (
                                <span className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1.5 text-xs uppercase tracking-widest text-primary-foreground">
                                    {product.badge}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="space-y-6">
                            <div>
                                <Link
                                    href={`/collection?category=${product.category}`}
                                    className="text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
                                >
                                    {product.category}
                                </Link>
                            </div>

                            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                                {product.name}
                            </h1>

                            {product.price && (
                                <div className="text-2xl font-light text-foreground">
                                    {product.price.toFixed(2)} €
                                </div>
                            )}

                            <div className="space-y-4 border-t border-border pt-6">
                                <p className="text-base leading-relaxed text-muted-foreground">
                                    {product.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                {product.stock > 0 ? (
                                    <>
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-muted-foreground">
                                            En stock ({product.stock} disponible{product.stock > 1 ? "s" : ""})
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                        <span className="text-sm text-muted-foreground">Rupture de stock</span>
                                    </>
                                )}
                            </div>

                            <div className="space-y-4 pt-6">
                                <button
                                    type="button"
                                    disabled={product.stock === 0}
                                    className="w-full rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {product.stock > 0 ? "Ajouter au panier" : "Indisponible"}
                                </button>
                            </div>

                            <div className="space-y-4 border-t border-border pt-8">
                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-foreground">
                                        Détails du produit
                                        <span className="transition-transform group-open:rotate-180">↓</span>
                                    </summary>
                                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        <p>• Fait main avec soin</p>
                                        <p>• Matériaux durables</p>
                                        <p>• Pièce unique</p>
                                    </div>
                                </details>

                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-foreground">
                                        Livraison & Retours
                                        <span className="transition-transform group-open:rotate-180">↓</span>
                                    </summary>
                                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        <p>• Livraison en France : 5-7 jours ouvrés</p>
                                        <p>• Retours acceptés sous 14 jours</p>
                                        <p>• Emballage soigné inclus</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="mb-8 text-center font-serif text-3xl font-medium text-foreground">
                        Vous pourriez aussi aimer
                    </h2>
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { id: idStr } = await params;
    const id = parseInt(idStr, 10);
    if (Number.isNaN(id)) {
        return { title: "Produit non trouvé" };
    }

    const product = await getProduct(idStr);
    if (!product) {
        return { title: "Produit non trouvé" };
    }

    return {
        title: `${product.name} | Ogres de la Terre`,
        description: product.description,
    };
}
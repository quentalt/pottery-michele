import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET - Récupérer tous les produits
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get("category");

        // Build the query based on whether a category filter is provided
        const products = await prisma.product.findMany({
            where: category
                ? {
                    category: {
                        equals: category,
                        mode: "insensitive", // Case-insensitive matching
                    },
                }
                : {},
            orderBy: {
                createdAt: "desc", // Most recent first
            },
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}
// POST - Créer un nouveau produit
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description, price, category, image, badge, slug, stock, featured } = body;

        // Validation de base
        if (!name || !price) {
            return NextResponse.json(
                { error: "Name and price are required" },
                { status: 400 }
            );
        }

        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                category,
                image,
                badge,
                slug,
                stock: stock ? parseInt(stock) : null,
                featured: featured || false,
            },
        });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}
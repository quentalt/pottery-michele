import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type UpdateProductBody = {
    name?: string;
    description?: string;
    price?: string | number | null;
    category?: string;
    image?: string;
    badge?: string;
    slug?: string;
    stock?: string | number;
    featured?: boolean | string;
};

type MaybeParams = Promise<{ id: string }> | { id: string };

export async function GET(
    request: NextRequest,
    { params }: { params: MaybeParams }
) {
    try {
        const { id: idRaw } = await params;
        const id = parseInt(idRaw, 10);
        if (Number.isNaN(id)) {
            return NextResponse.json({ error: "Invalid id" }, { status: 400 });
        }

        const product = await prisma.product.findUnique({ where: { id } });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: MaybeParams }
) {
    try {
        const { id: idRaw } = await params;
        const id = parseInt(idRaw, 10);
        if (Number.isNaN(id)) {
            return NextResponse.json({ error: "Invalid id" }, { status: 400 });
        }

        const body = (await request.json()) as UpdateProductBody;
        const {
            name,
            description,
            price,
            category,
            image,
            badge,
            slug,
            stock,
            featured,
        } = body;

        const existingProduct = await prisma.product.findUnique({ where: { id } });
        if (!existingProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        const updatedProduct = await prisma.product.update({
            where: { id },
            data: {
                name,
                description,
                price: price !== undefined ? parseFloat(price as string) : undefined,
                category,
                image,
                badge,
                slug,
                stock: stock !== undefined ? parseInt(stock as string) : undefined,
                featured: featured !== undefined ? (featured === "true" || featured === true) : undefined,
            },
        });

        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: MaybeParams }
) {
    try {
        const { id: idRaw } = await params;
        const id = parseInt(idRaw, 10);
        if (Number.isNaN(id)) {
            return NextResponse.json({ error: "Invalid id" }, { status: 400 });
        }

        const existingProduct = await prisma.product.findUnique({ where: { id } });
        if (!existingProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        await prisma.product.delete({ where: { id } });
        return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
    }
}
import React from "react"
import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const manrope = Manrope({
    subsets: ["latin"],
    variable : "--font-manrope",
    weight: ["200","400", "500", "600", "700"],
});
export const metadata: Metadata = {
    title: "Ogredelaterre | Ceramique Artisanale",
    description:
        "Céramiques intentionnelles conçues avec amour",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={manrope.variable}>
        <body className="bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}

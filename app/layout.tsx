import React from "react"
import type { Metadata } from "next";
import {Manrope} from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Manrope({
    subsets: ["latin"],
    variable : "--font-inter",
    weight: "500",
});
export const metadata: Metadata = {
    title: "Terra Studio | Ceramique Artisanale",
    description:
        "Intentional ceramics crafted for the modern sanctuary. Minimalist design, maximal craft.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}

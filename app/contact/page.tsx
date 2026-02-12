import type { Metadata } from "next";
import {Contact} from "@/components/contact"

export const metadata: Metadata = {
    title: "L'Artisanat | Ogresdelaterre",
    description:
        "In the quiet dance between earth and hand, we find the soul of every vessel. Discover our story.",
};

export default function ContactPage() {
    return (
        <>
            <Contact/>
        </>
    );
}

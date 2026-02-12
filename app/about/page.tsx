import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutPillars } from "@/components/about/about-pillars";
import { AboutClosing } from "@/components/about/about-closing";

export const metadata: Metadata = {
    title: "L'Artisanat | Ogresdelaterre",
    description:
        "In the quiet dance between earth and hand, we find the soul of every vessel. Discover our story.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutPillars />
            <AboutClosing />
        </>
    );
}

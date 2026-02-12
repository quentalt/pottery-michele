import type { Metadata } from "next";
import { ArchiveHero } from "@/components/archive/archive-hero";
import { ArchiveSeries2023 } from "@/components/archive/archive-series-2023";
import { ArchiveSeries2022 } from "@/components/archive/archive-series-2022";
import {ArchiveEraFilter} from "@/components/archive/archive-era-filter";

export const metadata: Metadata = {
    title: "Archive | Ogresdelaterre",
    description:
        "A curated archival record documenting the evolution of texture, silhouette, and technique through a decade of handmade ceramics.",
};

export default function ArchivePage() {
    return (
        <>
            <ArchiveHero />
            <ArchiveEraFilter />
            <ArchiveSeries2023 />
            <ArchiveSeries2022 />
        </>
    );
}

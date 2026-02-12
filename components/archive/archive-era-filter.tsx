"use client";

import { useState } from "react";

const eras = ["All Eras", "2024", "2023", "2022", "2021", "2020 & Prior"];

export function ArchiveEraFilter({
                                     onFilterChange,
                                 }: {
    onFilterChange?: (era: string) => void;
}) {
    const [activeEra, setActiveEra] = useState("All Eras");

    const handleClick = (era: string) => {
        setActiveEra(era);
        onFilterChange?.(era);
    };

    return (
        <div className="px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
                {eras.map((era) => (
                    <button
                        key={era}
                        type="button"
                        onClick={() => handleClick(era)}
                        className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                            activeEra === era
                                ? "bg-chart-5 text-primary-foreground"
                                : "border border-border bg-background text-foreground hover:bg-secondary"
                        }`}
                    >
                        {era}
                    </button>
                ))}
            </div>
        </div>
    );
}

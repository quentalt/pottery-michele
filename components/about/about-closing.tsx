import Link from "next/link";
import { Wind } from "lucide-react";

export function AboutClosing() {
    return (
        <section className="border-t border-border px-6 py-16 md:py-20">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                {/* Icon */}
                <Wind className="h-6 w-6 text-primary" strokeWidth={1.5} />

                {/* Quote */}
                <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                    {
                        '"I hope these vessels bring a moment of stillness to your morning ritual."'
                    }
                </blockquote>

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/collection"
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                        View the Collection
                    </Link>
                    <Link
                        href="#follow"
                        className="rounded-full border border-foreground px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                        Follow our Journey
                    </Link>
                </div>
            </div>
        </section>
    );
}

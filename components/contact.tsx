import Image from "next/image";
import Link from "next/link";

export function Contact() {
    return (
        <div className="min-h-screen">
            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-32">
                    {/* Left Column - Contact Info */}
                    <div className="flex flex-col justify-center space-y-12 lg:space-y-16">
                        {/* Header */}
                        <div className="space-y-6 text-center lg:text-left">
                           {/* <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
                                Entrer en contact
                            </p>*/}
                            <h1
                                className="font-light tracking-tight text-foreground"
                                style={{
                                    fontSize: 'clamp(3.5rem, 12vw, 7rem)',
                                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                                    lineHeight: '0.95'
                                }}
                            >
                                Contact
                            </h1>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
                            <div>
                                <a
                                    href="mailto:rey.michele@hotmail.fr"
                                    className="inline-block text-xl font-light tracking-wide text-foreground transition-colors hover:text-primary sm:text-2xl lg:text-3xl"
                                >
                                    rey.michele@hotmail.fr
                                </a>
                            </div>

                            <div>
                                <a
                                    href="tel:+33612345678"
                                    className="inline-block text-xl font-light tracking-wide text-foreground transition-colors hover:text-primary sm:text-2xl lg:text-3xl"
                                >
                                    +33 6 12 34 56 78
                                </a>
                            </div>
                        </div>

                        {/* Location & Hours */}
                        <div className="grid gap-10 pt-6 sm:grid-cols-2 sm:gap-12 lg:pt-8">
                            {/* Location */}
                            <div className="space-y-4 text-center sm:text-left">
                                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                    Localisation
                                </h3>
                                <div className="space-y-1.5 text-base font-light leading-relaxed text-foreground">
                                    <p>9 rue basse</p>
                                    <p>Auxonne,21130</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="space-y-4 text-center sm:text-left">
                                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                    Horaires
                                </h3>
                                <div className="space-y-1.5 text-base font-light leading-relaxed text-foreground">
                                    <p>Mar – Sam</p>
                                    <p>10h – 18h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative aspect-[3/4] w-full max-w-md">
                                {/* Image Container */}
                                <div className="relative h-full w-full p-8 sm:p-12">
                                    <div className="relative flex h-full items-center justify-center">
                                        {/* Replace with your actual image */}
                                        <div className="relative h-96 w-64">
                                            <Image
                                                src="/images/vase.png"
                                                alt="Céramique artisanale Ogres de la Terre"
                                                fill
                                                className="object-cover rounded-2xl"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Series Label */}
                            <div className="absolute -bottom-2 right-4">
                                <p className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                                    Collection Nº 04
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Footer */}
        </div>
    );
}
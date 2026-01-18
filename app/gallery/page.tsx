"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {AlchemyCircle, CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>("all");

    const {gallery} = SITE_DATA;

    const years = ["all", ...new Set(gallery.images.map((img) => img.year))];

    const filteredImages =
        filter === "all"
            ? gallery.images
            : gallery.images.filter((img) => img.year === filter);

    return (
        <main className="min-h-screen bg-charcoal">
            {/* Background - replaced images with CSS */}
            <div className="fixed inset-0 z-0 bg-section-dark">
                {/* Noise overlay - CSS texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-noise"/>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-8 pb-4 px-6">
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-3 font-mono text-parchment/70 hover:text-parchment transition-colors"
                    >
                        <span className="text-phosphor">{SIGILS.arrowLeft}</span>
                        <span>Return to Portal</span>
                    </Link>

                    <div className="font-mono text-xs text-parchment/40">
                        ARCHIVE_ACCESS :: LEVEL_PUBLIC
                    </div>
                </nav>
            </header>

            {/* Page Title */}
            <section className="relative z-10 py-16 px-6 text-center">
                <p className="font-mono text-phosphor text-sm tracking-[0.3em] mb-4">
                    {SIGILS.leftFloral} VISUAL_DOCUMENTATION {SIGILS.rightFloral}
                </p>
                <h1 className="font-serif text-4xl md:text-6xl text-parchment mb-6">
                    {gallery.title}
                </h1>
                <p className="font-mono text-parchment/60 max-w-2xl mx-auto">
                    {gallery.description}
                </p>

                <SigilDivider variant="ornate" className="mt-8 max-w-md mx-auto text-parchment/40"/>

                {/* Decorative circle */}
                <div className="flex justify-center mt-8 opacity-30">
                    <AlchemyCircle className="text-parchment"/>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="relative z-10 px-6 mb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-mono text-xs text-parchment/50 mr-4">
              FILTER_BY_CYCLE:
            </span>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setFilter(year)}
                                className={`font-mono text-sm px-4 py-2 border transition-all ${
                                    filter === year
                                        ? "border-phosphor text-phosphor bg-phosphor/10"
                                        : "border-parchment/20 text-parchment/60 hover:border-parchment/40 hover:text-parchment"
                                }`}
                            >
                                {year === "all" ? "ALL_CYCLES" : `CYCLE_${year}`}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Masonry-like collage */}
            <section className="relative z-10 px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredImages.map((img, index) => {
                            // Create varied sizes for collage effect
                            const isLarge = index % 5 === 0;
                            const isTall = index % 7 === 3;
                            const isWide = index % 6 === 2;

                            return (
                                <div
                                    key={img.key}
                                    className={`
                    group relative overflow-hidden cursor-pointer
                    ${isLarge ? "col-span-2 row-span-2" : ""}
                    ${isTall && !isLarge ? "row-span-2" : ""}
                    ${isWide && !isLarge ? "col-span-2" : ""}
                  `}
                                    onClick={() => setSelectedImage(img.key)}
                                >
                                    <div
                                        className={`
                      relative w-full
                      ${isLarge ? "aspect-square" : isTall ? "aspect-3/5" : isWide ? "aspect-2/1" : "aspect-square"}
                    `}
                                    >
                                        <Image
                                            src={IMAGES.gallery[img.key] || "/placeholder.svg"}
                                            alt={IMAGE_ALT.gallery[img.key]}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors"/>

                                        {/* Corner sigils */}
                                        <CornerSigils
                                            className="text-parchment/30 text-xs group-hover:text-phosphor/50 transition-colors"
                                            sigil="diamond"/>

                                        {/* Info overlay */}
                                        <div
                                            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-ink/80 backdrop-blur-sm p-3 border border-parchment/20">
                        <span className="font-mono text-xs text-phosphor block mb-1">
                          CYCLE_{img.year}
                        </span>
                                                <p className="font-mono text-sm text-parchment">
                                                    {img.caption}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Scan line effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-scanlines"/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Stats */}
                    <div className="mt-16 text-center">
                        <SigilDivider variant="terminal" className="max-w-sm mx-auto text-parchment/30 mb-8"/>
                        <p className="font-mono text-xs text-parchment/40">
                            TOTAL_RECORDS: {filteredImages.length} {SIGILS.bullet}
                            DISPLAY_MODE: COLLAGE {SIGILS.bullet}
                            STATUS: ARCHIVED
                        </p>
                    </div>
                </div>
            </section>

            {/* Back to home */}
            <section className="relative z-10 pb-16 px-6 text-center">
                <ParchmentButton href="/" variant="secondary" size="lg">
                    Return to Main Portal
                </ParchmentButton>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 font-mono text-parchment/60 hover:text-parchment transition-colors text-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        {SIGILS.cross} CLOSE
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[80vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={IMAGES.gallery[selectedImage as keyof typeof IMAGES.gallery] || "/placeholder.svg"}
                                alt={IMAGE_ALT.gallery[selectedImage as keyof typeof IMAGE_ALT.gallery]}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Image info */}
                        {(() => {
                            const imgData = gallery.images.find((i) => i.key === selectedImage);
                            return imgData ? (
                                <div className="mt-4 text-center">
                  <span className="font-mono text-xs text-phosphor">
                    CYCLE_{imgData.year}
                  </span>
                                    <p className="font-mono text-parchment mt-2">{imgData.caption}</p>
                                </div>
                            ) : null;
                        })()}
                    </div>
                </div>
            )}
        </main>
    );
}

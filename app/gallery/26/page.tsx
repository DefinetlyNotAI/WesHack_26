"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {AlchemyCircle, CornerSigils, SigilDivider} from "@/components/ui/alchemy-sigils";
import {SIGILS} from "@/lib/sigils";
import {SITE_DATA} from "@/lib/data";

export default function WesHack26Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const {gallery} = SITE_DATA;

    return (
        <main className="min-h-screen bg-charcoal">
            <div className="fixed inset-0 z-0 bg-section-dark">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-noise"/>
            </div>

            <header className="relative z-10 pt-8 pb-4 px-6">
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/"
                          className="flex items-center gap-3 font-mono text-parchment/70 hover:text-parchment transition-colors">
                        <span className="text-phosphor">{SIGILS.arrowLeft}</span>
                        <span>Return to Portal</span>
                    </Link>
                    <div className="font-mono text-xs text-parchment/40">WESHACK_2026 :: THE_GREAT_WORK</div>
                </nav>
            </header>

            <section className="relative z-10 py-16 px-6 text-center">
                <p className="font-mono text-phosphor text-sm tracking-[0.3em] mb-4">
                    {SIGILS.leftFloral} THE_GREAT_WORK {SIGILS.rightFloral}
                </p>
                <h1 className="font-serif text-4xl md:text-6xl text-parchment mb-6">WesHack 2026 Chronicles</h1>
                <p className="font-mono text-parchment/60 max-w-2xl mx-auto">
                    A visual record of the Great Work. 75+ participants, 30+ teams and projects, 48 hours of
                    transmutation and creation.
                </p>
                <SigilDivider variant="ornate" className="mt-8 max-w-md mx-auto text-parchment/40"/>
                <div className="flex justify-center mt-8 opacity-30">
                    <AlchemyCircle className="text-parchment"/>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {gallery.images26.map((img, index) => {
                            const isLarge = index % 5 === 0;
                            const isTall = index % 7 === 3;
                            const isWide = index % 6 === 2;
                            return (
                                <div key={img.key}
                                     className={`group relative overflow-hidden cursor-pointer ${isLarge ? "col-span-2 row-span-2" : ""} ${isTall && !isLarge ? "row-span-2" : ""} ${isWide && !isLarge ? "col-span-2" : ""}`}
                                     onClick={() => setSelectedImage(img.key)}>
                                    <div
                                        className={`relative w-full ${isLarge ? "aspect-square" : isTall ? "aspect-3/5" : isWide ? "aspect-2/1" : "aspect-square"}`}>
                                        <Image src={img.path} alt={"Wes:Hack 2026 Image"} fill
                                               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                                        <div
                                            className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors"/>
                                        <CornerSigils
                                            className="text-parchment/30 text-xs group-hover:text-phosphor/50 transition-colors"
                                            sigil="diamond"/>
                                        <div
                                            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-ink/80 backdrop-blur-sm p-3 border border-parchment/20">
                                                <span
                                                    className="font-mono text-xs text-phosphor block mb-1">WESHACK_2026</span>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-scanlines"/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-16 text-center">
                        <SigilDivider variant="terminal" className="max-w-sm mx-auto text-parchment/30 mb-8"/>
                        <p className="font-mono text-xs text-parchment/40">
                            TOTAL_RECORDS: {gallery.images26.length} {SIGILS.bullet} PARTICIPANTS:
                            75+ {SIGILS.bullet} TEAMS: 30+ {SIGILS.bullet} STATUS: COMPLETED
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 pb-16 px-6 text-center">
                <ParchmentButton href="/" variant="secondary" size="lg">Return to Main Portal</ParchmentButton>
            </section>

            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
                     onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 font-mono text-parchment/60 hover:text-parchment transition-colors text-xl"
                        onClick={() => setSelectedImage(null)}>
                        {SIGILS.flower} CLOSE
                    </button>
                    <div className="relative max-w-5xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-video">
                            {(() => {
                                const imgData = gallery.images26.find((i) => i.key === selectedImage);
                                return imgData ? (
                                    <>
                                        <Image src={imgData.path} alt={"Wes:Hack 2026 Image"} fill
                                               className="object-contain"/>
                                        <div className="mt-4 text-center">
                                            <span className="font-mono text-xs text-phosphor">WESHACK_2026</span>
                                        </div>
                                    </>
                                ) : null;
                            })()}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}


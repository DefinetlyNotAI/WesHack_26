"use client";

import Image from "next/image";
import {IMAGE_ALT, IMAGES, SITE_DATA} from "@/lib/images";
import {CornerSigils, SigilDivider, SIGILS,} from "@/components/ui/alchemy-sigils";

export function PrizesSection() {
    const {prizes} = SITE_DATA;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.sections.prizes || "/placeholder.svg"}
                    alt={IMAGE_ALT.sections.prizes}
                    fill
                    className="object-cover grayscale opacity-15"
                />
                <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/95 to-ink"/>
            </div>

            {/* Paper texture overlay */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url(${IMAGES.backgrounds.paper})`,
                    backgroundSize: "cover",
                    mixBlendMode: "overlay",
                }}
            />

            <div className="container relative mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="font-mono text-phosphor text-sm tracking-[0.3em] mb-4">
                        {SIGILS.gold} TRANSMUTATION_REWARDS {SIGILS.gold}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-6">
                        {prizes.title}
                    </h2>
                    <p className="font-mono text-parchment/60 max-w-xl mx-auto text-sm leading-relaxed">
                        {prizes.description}
                    </p>

                    {/* Alchemical symbols for wealth */}
                    <div className="flex justify-center gap-6 mt-8 text-amber/40 text-2xl">
                        <span>{SIGILS.gold}</span>
                        <span>{SIGILS.diamond}</span>
                        <span>{SIGILS.gold}</span>
                    </div>
                </div>

                {/* Main Prizes */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {prizes.main.map((prize, index) => (
                        <div
                            key={prize.rank}
                            className={`relative group ${index === 0 ? "lg:-mt-8" : ""}`}
                        >
                            {/* Prize Card */}
                            <div
                                className="relative border border-parchment/20 bg-charcoal/50 backdrop-blur-sm overflow-hidden">
                                <CornerSigils sigil="starFilled" className="text-amber/30 text-xs z-10"/>

                                {/* Prize Image */}
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <Image
                                        src={IMAGES.prizes[prize.imageKey] || "/placeholder.svg"}
                                        alt={IMAGE_ALT.prizes[prize.imageKey]}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent"/>

                                    {/* Rank badge with sigil */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-xs bg-ink/80 text-phosphor px-3 py-1 border border-phosphor/30">
                      {index === 0 && SIGILS.gold}
                        {index === 1 && SIGILS.silver}
                        {index === 2 && SIGILS.copper}
                        {" "}{prize.rank}
                    </span>
                                    </div>

                                    {/* Value */}
                                    <div className="absolute bottom-4 right-4">
                    <span className="font-serif text-3xl text-amber">
                      {prize.value}
                    </span>
                                    </div>
                                </div>

                                {/* Prize Details */}
                                <div className="p-6">
                                    <h3 className="font-serif text-2xl text-parchment mb-3">
                                        {prize.title}
                                    </h3>
                                    <p className="font-mono text-parchment/60 text-sm mb-6 leading-relaxed">
                                        {prize.description}
                                    </p>

                                    <SigilDivider variant="simple" className="text-parchment/20 mb-4"/>

                                    {/* Perks List */}
                                    <div className="space-y-2">
                                        {prize.perks.map((perk, perkIndex) => (
                                            <div key={perkIndex} className="flex items-start gap-3">
                                                <span className="text-phosphor">{SIGILS.arrowRight}</span>
                                                <span className="font-mono text-parchment/70 text-sm">
                          {perk}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div
                                    className="absolute inset-0 border-2 border-amber/0 group-hover:border-amber/30 transition-colors pointer-events-none"/>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-parchment/30"/>
                            <div
                                className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-parchment/30"/>
                            <div
                                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-parchment/30"/>
                            <div
                                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-parchment/30"/>
                        </div>
                    ))}
                </div>

                {/* Special Awards */}
                <div className="border-t border-parchment/10 pt-16">
                    <div className="text-center mb-12">
                        <p className="font-mono text-amber text-sm tracking-[0.2em] mb-2">
                            {SIGILS.pentagram} SPECIAL_RECOGNITIONS {SIGILS.pentagram}
                        </p>
                        <h3 className="font-serif text-2xl text-parchment">
                            Additional Honors
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {prizes.special.map((award) => (
                            <div
                                key={award.title}
                                className="group relative p-6 border border-parchment/10 bg-ink/30 hover:border-phosphor/30 transition-colors"
                            >
                                <CornerSigils sigil="diamond" className="text-parchment/20 text-xs"/>

                                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-phosphor text-xs">
                    {SIGILS.star}
                  </span>
                                    <span className="font-serif text-amber text-lg">
                    {award.value}
                  </span>
                                </div>
                                <h4 className="font-serif text-lg text-parchment mb-2">
                                    {award.title}
                                </h4>
                                <p className="font-mono text-parchment/50 text-xs leading-relaxed">
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total prize pool */}
                <div className="flex flex-col items-center mt-16">
                    <Image
                        src={IMAGES.prizes.special || "/placeholder.svg"}
                        alt={IMAGE_ALT.prizes.special}
                        width={200}
                        height={200}
                        className="opacity-20 grayscale"
                    />
                    <div className="text-center -mt-16 relative">
                        <div className="flex justify-center gap-2 text-amber/40 mb-2">
                            <span>{SIGILS.diamond}</span>
                            <span>{SIGILS.gold}</span>
                            <span>{SIGILS.diamond}</span>
                        </div>
                        <span className="font-mono text-parchment/60 text-sm tracking-widest">
              TOTAL PRIZE POOL: {prizes.totalPool}
            </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

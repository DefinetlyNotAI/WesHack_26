"use client";

import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {AlchemyCircle, SigilDivider, SIGILS,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";

export function HeroSection() {
    const {event, hero} = SITE_DATA;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.backgrounds.hero || "/placeholder.svg"}
                    alt={IMAGE_ALT.backgrounds.hero}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Noise overlay */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                    <Image
                        src={IMAGES.backgrounds.noise || "/placeholder.svg"}
                        alt={IMAGE_ALT.backgrounds.noise}
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Scanline effect */}
                <div className="absolute inset-0 z-20 opacity-10 pointer-events-none">
                    <Image
                        src={IMAGES.backgrounds.scanlines || "/placeholder.svg"}
                        alt={IMAGE_ALT.backgrounds.scanlines}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
                {/* Decorative alchemy circle */}
                <div className="mb-8 flex justify-center">
                    <AlchemyCircle className="text-ink opacity-40"/>
                </div>

                {/* Elemental sigils row */}
                <div className="flex justify-center gap-8 mb-6 text-ink/40">
                    <span className="text-2xl">{SIGILS.fire}</span>
                    <span className="text-2xl">{SIGILS.water}</span>
                    <span className="text-2xl">{SIGILS.earth}</span>
                    <span className="text-2xl">{SIGILS.air}</span>
                </div>

                {/* Title as Digital Formula */}
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink mb-6 tracking-tight">
          <span className="font-mono text-phosphor text-lg md:text-xl block mb-4">
            {hero.subtitle}
          </span>
                    {event.name}
                    <span className="block text-2xl md:text-3xl mt-4 text-ink/70 font-mono">
            {event.tagline}
          </span>
                </h1>

                {/* Sigil divider */}
                <SigilDivider variant="ornate" className="my-8 max-w-xs mx-auto text-ink"/>

                {/* Description with sigils */}
                <div
                    className="font-mono text-sm md:text-base text-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed space-y-1">
                    {hero.description.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>

                {/* Alchemical symbols row */}
                <div className="flex justify-center gap-6 mb-8 text-charcoal/30 text-sm">
                    <span>{SIGILS.gold}</span>
                    <span>{SIGILS.mercury}</span>
                    <span>{SIGILS.pentagram}</span>
                    <span>{SIGILS.silver}</span>
                    <span>{SIGILS.lead}</span>
                </div>

                {/* CTA Button */}
                <ParchmentButton href="#register" size="lg">
                    {hero.ctaText}
                </ParchmentButton>

                {/* Hex coordinates */}
                <p className="mt-12 font-mono text-xs text-charcoal/50 tracking-wider">
                    {event.hexCode} :: {event.location}
                </p>

                {/* Bottom decorative sigils */}
                <div className="mt-8 flex justify-center gap-4 text-charcoal/20">
                    <span>{SIGILS.triangle}</span>
                    <span>{SIGILS.diamond}</span>
                    <span>{SIGILS.circle}</span>
                    <span>{SIGILS.diamond}</span>
                    <span>{SIGILS.triangleDown}</span>
                </div>
            </div>
        </section>
    );
}

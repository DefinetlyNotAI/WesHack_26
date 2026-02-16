"use client";

import {ParchmentButton} from "@/components/ui/parchment-button";
import {AlchemyCircle, SigilDivider} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";
import {usePathname} from 'next/navigation'
import {useState} from "react";

export function HeroSection() {
    const {event, hero} = SITE_DATA;
    const [showRules, setShowRules] = useState(false);
    const {title, sections} = SITE_DATA.event.rules;
    const pathname = usePathname()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-hero-parchment">
                {/* Noise overlay - CSS texture */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay bg-noise"/>
                {/* Scanline effect - CSS */}
                <div className="absolute inset-0 z-20 opacity-10 pointer-events-none bg-scanlines"/>
            </div>

            {/* Content */}
            <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
                {/* Decorative alchemy circle */}
                <br/>
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

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <ParchmentButton href={pathname === '/' ? '#thankyou' : '#register'} size="lg">
                        {hero.ctaText}
                    </ParchmentButton>

                    {pathname === '/' ? (
                        <ParchmentButton href="/mirror-history" size="lg">
                            VIEW_MIRROR_HISTORY
                        </ParchmentButton>
                    ) : (
                        <ParchmentButton size="lg" onClick={() => setShowRules(true)}>
                            {hero.rulesCtaText}
                        </ParchmentButton>
                    )}
                </div>

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

            {/* Rules Modal */}
            {showRules && pathname !== '/' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div
                        className="relative bg-parchment w-full h-full sm:h-auto sm:max-h-[85vh] sm:max-w-2xl overflow-y-auto p-6 sm:p-8 text-left">
                        <button
                            onClick={() => setShowRules(false)}
                            className="absolute top-4 right-4 text-ink/60 hover:text-ink font-mono text-xl"
                            aria-label="Close rules"
                        >
                            ×
                        </button>

                        <h2 className="font-serif text-2xl text-ink mb-4">
                            {title}
                        </h2>

                        <div className="font-mono text-sm text-charcoal/80 space-y-5 leading-relaxed">
                            {sections.map(section => (
                                <section key={section.id}>
                                    <h3 className="text-ink font-semibold mb-1">
                                        {section.id}. {section.title}
                                    </h3>

                                    {section.items && (
                                        <ul className="list-disc ml-5 space-y-1">
                                            {section.items.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.text && <p>{section.text}</p>}
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

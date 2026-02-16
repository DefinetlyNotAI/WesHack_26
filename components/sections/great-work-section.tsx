import {ParchmentButton} from "@/components/ui/parchment-button";
import {CornerSigils, SigilDivider} from "@/components/ui/alchemy-sigils";
import {SIGILS} from "@/lib/sigils";

export function GreatWorkSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-section-dark"/>
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-paper-texture mix-blend-overlay"/>

            <div className="container relative mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="font-mono text-phosphor text-sm tracking-[0.3em] mb-4">
                        {SIGILS.gold} THE_COMPLETED_TRANSMUTATION {SIGILS.gold}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-6">
                        View the Great Work
                    </h2>
                    <p className="font-mono text-parchment/60 max-w-xl mx-auto text-sm leading-relaxed">
                        Behold the results of 48 hours of creation. Over 75 participants and 30+ teams
                        have transmuted their ideas into reality.
                    </p>

                    {/* Alchemical symbols */}
                    <div className="flex justify-center gap-6 mt-8 text-amber/40 text-2xl">
                        <span>{SIGILS.gold}</span>
                        <span>{SIGILS.diamond}</span>
                        <span>{SIGILS.gold}</span>
                    </div>
                </div>

                {/* Main CTA Card */}
                <div className="max-w-2xl mx-auto">
                    <div
                        className="relative border border-parchment/20 bg-charcoal/50 backdrop-blur-sm overflow-hidden">
                        <CornerSigils sigil="star" className="text-amber/30 text-xs z-10"/>

                        {/* Content */}
                        <div className="p-12 text-center space-y-6">
                            <div className="text-5xl text-amber/60">{SIGILS.infinity}</div>

                            <h3 className="font-serif text-3xl text-parchment">
                                WesHack 2026 Gallery
                            </h3>

                            <p className="font-mono text-parchment/70 text-sm leading-relaxed max-w-lg mx-auto">
                                Explore the visual chronicle of innovation, creativity, and collaboration.
                                Witness the projects, moments, and achievements from this year's Great Work.
                            </p>

                            <SigilDivider variant="ornate" className="text-parchment/30 max-w-xs mx-auto"/>

                            <div className="space-y-3 font-mono text-sm text-parchment/60">
                                <p className="flex items-center justify-center gap-2">
                                    <span className="text-phosphor">{SIGILS.diamond}</span>
                                    75+ Participants
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <span className="text-phosphor">{SIGILS.diamond}</span>
                                    30+ Teams & Projects
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <span className="text-phosphor">{SIGILS.diamond}</span>
                                    48 Hours of Creation
                                </p>
                            </div>

                            <div className="pt-6">
                                <ParchmentButton href="/gallery/26" size="lg">
                                    View the Gallery
                                </ParchmentButton>
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div
                            className="absolute inset-0 border-2 border-amber/0 hover:border-amber/30 transition-colors pointer-events-none"/>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-parchment/30"/>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-parchment/30"/>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-parchment/30"/>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-parchment/30"/>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex justify-center gap-4 mt-12 text-parchment/20">
                    <span>{SIGILS.triangle}</span>
                    <span>{SIGILS.circle}</span>
                    <span>{SIGILS.square}</span>
                    <span>{SIGILS.circle}</span>
                    <span>{SIGILS.triangleDown}</span>
                </div>
            </div>
        </section>
    );
}


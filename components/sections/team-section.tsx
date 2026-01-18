import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function TeamSection() {
    const {team} = SITE_DATA;

    return (
        <section id="team" className="relative py-24 md:py-32">
            {/* Background - replaced images with CSS */}
            <div className="absolute inset-0 z-0 bg-section-dark">
                {/* Noise overlay - CSS texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise"/>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
          <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
            {SIGILS.caduceus} SECTION_05 {SIGILS.caduceus}
          </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-parchment mt-4 mb-4">
                        {team.title}
                    </h2>
                    <p className="font-mono text-sm text-parchment/60">
                        {team.subtitle}
                    </p>
                </div>

                {/* Alchemical symbols for team roles */}
                <div className="flex justify-center gap-8 mb-8 text-parchment/30 text-2xl">
                    <span>{SIGILS.mercury}</span>
                    <span>{SIGILS.gold}</span>
                    <span>{SIGILS.silver}</span>
                    <span>{SIGILS.copper}</span>
                </div>

                <SigilDivider variant="ornate" className="max-w-xs mx-auto mb-12 text-parchment/40"/>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.members.map((member, index) => (
                        <div
                            key={member.name}
                            className={`group relative bg-ink/30 border border-parchment/10 hover:border-phosphor/30 transition-colors duration-300
                                ${index === 0 ? "order-3 lg:order-1" : ""}
                                ${index === 1 ? "order-1 lg:order-2" : ""}
                                ${index === 2 ? "order-2 lg:order-3" : ""}
                                ${index === 3 ? "order-4 lg:order-4" : ""}
                            `}
                        >
                            <CornerSigils sigil="star" className="text-parchment/20 text-xs"/>

                            {/* Member Image */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={IMAGES.team[member.imageKey] || "/placeholder.svg"}
                                    alt={IMAGE_ALT.team[member.imageKey]}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors"/>

                                {/* Index overlay with sigil */}
                                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                                      <span className="font-mono text-xs text-phosphor/60">
                                        OP_{String(index + 1).padStart(2, "0")}
                                      </span>
                                    <span className="text-parchment/40">
                                        {index === 0 && SIGILS.air}
                                        {index === 1 && SIGILS.iron}
                                        {index === 2 && SIGILS.gold}
                                        {index === 3 && SIGILS.silver}
                                      </span>
                                </div>

                                {/* Hover sigil */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-parchment/40 text-4xl">{SIGILS.pentagram}</span>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="p-4">
                                <h3 className="font-serif text-lg text-parchment">
                                    {member.name}
                                </h3>
                                <p className="font-mono text-xs text-amber mt-1 flex items-center gap-2">
                                    <span>{SIGILS.arrowRight}</span>
                                    {member.role}
                                </p>
                                <p className="font-mono text-xs text-parchment/50 mt-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer with sigils */}
                <div className="mt-12 text-center">
                    <div className="flex justify-center gap-4 mb-4 text-parchment/20">
                        <span>{SIGILS.aries}</span>
                        <span>{SIGILS.leo}</span>
                        <span>{SIGILS.sagittarius}</span>
                        <span>{SIGILS.aquarius}</span>
                    </div>
                    <p className="font-mono text-xs text-parchment/40">
                        OPERATORS_ACTIVE: {team.members.length} {SIGILS.bullet} CLEARANCE: LEVEL_25
                    </p>
                </div>
            </div>
        </section>
    );
}

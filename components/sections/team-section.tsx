import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

const SIGIL_CYCLE = [
    SIGILS.pentagram,
    SIGILS.atom,
    SIGILS.ankh,
    SIGILS.caduceus,
    SIGILS.ouroboros,
];

function MemberCard({sub, sigil}: { sub: any; sigil: string }) {
    return (
        <div
            className="bg-ink/20 border border-parchment/10 p-4 text-parchment/80 rounded transition-colors hover:border-phosphor/30">
            <div className="flex items-center justify-between mb-2">
                <p className="font-mono text-sm">{sub.name}</p>
                <span className="text-parchment/40 text-lg">{sigil}</span>
            </div>
            <p className="font-mono text-xs text-amber mt-1">{sub.role}</p>
        </div>
    );
}

function Grid({
                  items,
                  cols,
                  offset = 0,
              }: {
    items: any[];
    cols: string;
    offset?: number;
}) {
    return (
        <div className={`grid ${cols} gap-4 mb-6`}>
            {items.map((sub, idx) => (
                <MemberCard
                    key={sub.name}
                    sub={sub}
                    sigil={SIGIL_CYCLE[(idx + offset) % SIGIL_CYCLE.length]}
                />
            ))}
        </div>
    );
}

export function TeamSection() {
    const {team} = SITE_DATA;

    return (
        <section id="team" className="relative py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-section-dark">
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

                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={IMAGES.team[member.imageKey] || "/placeholder.svg"}
                                    alt={IMAGE_ALT.team[member.imageKey]}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors"/>

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

                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-parchment/40 text-4xl">{SIGILS.star}</span>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-serif text-lg text-parchment">{member.name}</h3>
                                <p className="font-mono text-xs text-amber mt-1 flex items-center gap-2">
                                    <span>{SIGILS.arrowRight}</span>
                                    {member.role}
                                </p>
                                <p className="font-mono text-xs text-parchment/50 mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Sub-members Section */}
                {team.subMembers && team.subMembers.length > 0 && (
                    <div className="mt-16">
                        <h3 className="font-serif text-2xl text-parchment mb-6 text-center">
                            Team Adepts
                        </h3>

                        <Grid
                            cols="sm:grid-cols-2 lg:grid-cols-2"
                            items={team.subMembers.filter(m => m.role === "Team Lead")}
                        />

                        <Grid
                            cols="sm:grid-cols-2 lg:grid-cols-5"
                            items={team.subMembers
                                .filter(m => m.role === "Team Member")
                                .slice(0, 5)}
                        />

                        <Grid
                            cols="sm:grid-cols-2 lg:grid-cols-6"
                            offset={5}
                            items={team.subMembers
                                .filter(m => m.role === "Team Member")
                                .slice(5, 11)}
                        />
                    </div>
                )}

                {/* Media Section */}
                {team.subMembers?.some(m => m.role.includes("Media")) && (
                    <div className="mt-16">
                        <h3 className="font-serif text-2xl text-parchment mb-6 text-center">
                            Media Team
                        </h3>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            {team.subMembers
                                .filter(m => m.role.includes("Media"))
                                .sort(a => (a.role === "Media Lead" ? -1 : 1))
                                .map((sub, idx) => (
                                    <div key={sub.name} className="w-full sm:w-1/4">
                                        <MemberCard
                                            sub={sub}
                                            sigil={SIGIL_CYCLE[idx % SIGIL_CYCLE.length]}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* Security Section */}
                {team.subMembers.filter(m => m.role === "Security").length >= 6 && (
                    <div className="mt-12">
                        <h3 className="font-serif text-xl text-parchment mb-6 text-center">
                            Security Detail
                        </h3>

                        <Grid
                            cols="sm:grid-cols-2 lg:grid-cols-3"
                            items={team.subMembers
                                .filter(m => m.role === "Security")
                                .slice(-6)}
                        />
                    </div>
                )}

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

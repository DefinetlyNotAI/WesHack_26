import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {CornerSigils, SigilDivider, SIGILS,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";

export function ProcessSection() {
    const {process} = SITE_DATA;

    return (
        <section id="process" className="relative py-24 md:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.sections.process || "/placeholder.svg"}
                    alt={IMAGE_ALT.sections.process}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/90"/>
                {/* Scanline overlay */}
                <div className="absolute inset-0 opacity-5">
                    <Image
                        src={IMAGES.backgrounds.scanlines || "/placeholder.svg"}
                        alt={IMAGE_ALT.backgrounds.scanlines}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
          <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
            {SIGILS.fire} SECTION_03 {SIGILS.water}
          </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-parchment mt-4 mb-4">
                        {process.title}
                    </h2>
                    <p className="font-mono text-sm text-parchment/60 max-w-xl mx-auto">
                        {process.description}
                    </p>
                </div>

                {/* Alchemical symbols row */}
                <div className="flex justify-center gap-8 mb-12 text-parchment/30">
                    <span className="text-2xl">{SIGILS.gold}</span>
                    <span className="text-2xl">{SIGILS.silver}</span>
                    <span className="text-2xl">{SIGILS.mercury}</span>
                    <span className="text-2xl">{SIGILS.lead}</span>
                </div>

                <SigilDivider variant="terminal" className="max-w-xs mx-auto mb-12 text-parchment/40"/>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {process.steps.map((step) => (
                        <div
                            key={step.number}
                            className="group relative bg-ink/30 border border-parchment/10 p-8 hover:border-phosphor/30 transition-colors duration-300"
                        >
                            <CornerSigils sigil="diamond" className="text-parchment/20 text-xs"/>

                            {/* Step icon */}
                            <div
                                className="absolute top-8 right-8 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Image
                                    src={IMAGES.icons[step.icon] || "/placeholder.svg"}
                                    alt={IMAGE_ALT.icons[step.icon]}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Elemental sigil based on step */}
                            <div className="absolute top-8 right-24 text-parchment/20 text-xl">
                                {step.number === "01" && SIGILS.earth}
                                {step.number === "02" && SIGILS.fire}
                                {step.number === "03" && SIGILS.water}
                                {step.number === "04" && SIGILS.air}
                            </div>

                            <span className="font-mono text-phosphor text-sm">
                PHASE_{step.number}
              </span>
                            <h3 className="font-serif text-xl text-parchment mt-2 mb-3">
                                {step.title}
                            </h3>
                            <p className="font-mono text-sm text-parchment/60 leading-relaxed pr-12">
                                {step.description}
                            </p>

                            {/* Terminal cursor effect on hover */}
                            <div
                                className="mt-4 font-mono text-xs text-phosphor/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                {SIGILS.arrowRight} executing...
                                <span className="animate-pulse">{SIGILS.cursor}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note with sigils */}
                <div className="text-center mt-12">
                    <div className="flex justify-center gap-4 mb-4 text-parchment/20">
                        <span>{SIGILS.triangle}</span>
                        <span>{SIGILS.infinity}</span>
                        <span>{SIGILS.triangleDown}</span>
                    </div>
                    <p className="font-mono text-xs text-parchment/40">
                        DURATION: {process.duration} :: COMPLEXITY: VARIABLE :: OUTCOME: EMERGENCE
                    </p>
                </div>
            </div>
        </section>
    );
}

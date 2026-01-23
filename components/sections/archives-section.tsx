import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {EXTERNAL_LINKS} from "@/lib/links";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function ArchivesSection() {
    const {archives} = SITE_DATA;

    return (
        <section id="archives" className="relative py-24 md:py-32">
            {/* Background - replaced images with CSS */}
            <div className="absolute inset-0 z-0 bg-section-light"/>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
          <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
            {SIGILS.leftFloral} SECTION_04 {SIGILS.rightFloral}
          </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 mb-4">
                        {archives.title}
                    </h2>
                    <p className="font-mono text-sm text-charcoal/70">
                        {archives.subtitle}
                    </p>
                </div>

                {/* Sigil divider */}
                <div className="flex justify-center gap-6 mb-12 text-charcoal/30">
                    <span className="text-xl">{SIGILS.omega}</span>
                    <span className="text-xl">{SIGILS.infinity}</span>
                    <span className="text-xl">{SIGILS.alpha}</span>
                </div>

                <SigilDivider variant="ornate" className="max-w-xs mx-auto mb-12 text-charcoal/40"/>

                {/* Archives List */}
                <div className="space-y-8">
                    {archives.experiments.map((exp, index) => (
                        <div key={`${exp.year}-${exp.title}-${index}`}
                            className="group relative border border-ink/10 bg-offwhite/50 hover:border-ink/30 transition-colors duration-300"
                        >
                            <CornerSigils sigil="star" className="text-charcoal/20 text-xs"/>

                            <div className="flex flex-col md:flex-row">
                                {/* Image */}
                                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                                    <Image
                                        src={IMAGES.archives[exp.imageKey] || "/placeholder.svg"}
                                        alt={IMAGE_ALT.archives[exp.imageKey]}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors"/>

                                    {/* Year sigil overlay */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-parchment text-4xl">{SIGILS.gold}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 md:p-8">
                                    <div className="flex items-start justify-between">
                                        <div>
                      <span className="font-mono text-xs text-phosphor">
                        ARCHIVE_{String(index + 1).padStart(3, "0")} {SIGILS.diamond}
                      </span>
                                            <h3 className="font-serif text-xl text-ink mt-1">
                                                {exp.title}
                                            </h3>
                                            <p className="font-mono text-sm text-charcoal/70 mt-1">
                                                Theme: {exp.theme}
                                            </p>
                                        </div>
                                        <div className="text-right">
                      <span className="font-mono text-2xl text-ink/20">
                        {exp.year}
                      </span>
                                            <div className="text-charcoal/30 mt-1">
                                                {SIGILS.mercury}
                                            </div>
                                        </div>
                                    </div>

                                    <SigilDivider variant="simple" className="my-4 text-charcoal/20"/>

                                    <div className="flex gap-8">
                                        <div>
                      <span className="font-mono text-xs text-charcoal/50 block">
                        {SIGILS.circleFilled} SUBJECTS
                      </span>
                                            <span className="font-mono text-lg text-ink">
                        {exp.participants}+
                      </span>
                                        </div>
                                        <div>
                      <span className="font-mono text-xs text-charcoal/50 block">
                        {SIGILS.squareFilled} OUTPUTS
                      </span>
                                            <span className="font-mono text-lg text-ink">
                        {exp.projects}+
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Gallery CTA */}
                <div className="mt-12 text-center">
                    <SigilDivider variant="terminal" className="max-w-xs mx-auto mb-8 text-charcoal/30"/>

                    <ParchmentButton href={EXTERNAL_LINKS.galleryPage} variant="secondary" size="lg">
                        View Full Visual Archive
                    </ParchmentButton>

                    <p className="font-mono text-xs text-charcoal/50 mt-8">
                        TOTAL_EXPERIMENTS: {archives.experiments.length} {SIGILS.bullet}
                        STATUS: ARCHIVED {SIGILS.bullet}
                        ACCESS: PUBLIC
                    </p>

                    {/* Bottom decorative sigils */}
                    <div className="flex justify-center gap-4 mt-6 text-charcoal/20">
                        <span>{SIGILS.triangle}</span>
                        <span>{SIGILS.circle}</span>
                        <span>{SIGILS.square}</span>
                        <span>{SIGILS.circle}</span>
                        <span>{SIGILS.triangleDown}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

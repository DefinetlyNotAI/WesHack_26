import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {EXTERNAL_LINKS} from "@/lib/links";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function RegisterSection() {
    const {registration} = SITE_DATA;

    return (
        <section id="register" className="relative py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.backgrounds.paper || "/placeholder.svg"}
                    alt={IMAGE_ALT.backgrounds.paper}
                    fill
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-parchment/80"/>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
          <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
            {SIGILS.leftFloral} SECTION_02 {SIGILS.rightFloral}
          </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 mb-2">
                        {registration.title}
                    </h2>
                    <p className="font-mono text-sm text-charcoal/70">
                        {registration.subtitle}
                    </p>
                </div>

                {/* Decorative sigils */}
                <div className="flex justify-center gap-6 mb-8 text-charcoal/30">
                    <span className="text-xl">{SIGILS.mercury}</span>
                    <span className="text-xl">{SIGILS.pentagram}</span>
                    <span className="text-xl">{SIGILS.mercury}</span>
                </div>

                {/* Registration CTA - Links to Google Form */}
                <div className="relative bg-offwhite/50 p-8 border border-ink/10 text-center space-y-6">
                    <CornerSigils sigil="star" className="text-charcoal/30"/>

                    <div className="space-y-4">
                        <p className="font-mono text-sm text-charcoal/70">
                            Ready to begin the transformation?
                        </p>
                        <p className="font-mono text-xs text-charcoal/50">
                            Complete your initiation through our secure portal.
                            <br/>
                            All credentials will be verified before admission.
                        </p>
                    </div>

                    <SigilDivider variant="simple" className="text-charcoal/30"/>

                    <div className="py-4">
                        <div className="font-mono text-xs text-phosphor mb-4">
                            {SIGILS.arrowRight} INITIATION_REQUIREMENTS:
                        </div>
                        <ul className="font-mono text-sm text-charcoal/70 space-y-2 text-left max-w-sm mx-auto">
                            {registration.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-amber">{SIGILS.diamond}</span>
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ParchmentButton
                        href={EXTERNAL_LINKS.registrationForm}
                        external
                        size="lg"
                        className="w-full"
                    >
                        {registration.ctaText}
                    </ParchmentButton>

                    <p className="font-mono text-xs text-charcoal/50 mt-4">
                        STATUS: {registration.status}
                    </p>

                    {/* Bottom sigils */}
                    <div className="flex justify-center gap-4 pt-4 text-charcoal/20">
                        <span>{SIGILS.aries}</span>
                        <span>{SIGILS.leo}</span>
                        <span>{SIGILS.sagittarius}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

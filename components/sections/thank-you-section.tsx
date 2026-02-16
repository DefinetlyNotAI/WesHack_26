import {CornerSigils, SigilDivider} from "@/components/ui/alchemy-sigils";
import {SIGILS} from "@/lib/sigils";

export function ThankYouSection() {
    return (
        <section id="thankyou" className="relative py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-paper-texture"/>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
                        {SIGILS.leftFloral} SECTION_02 {SIGILS.rightFloral}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 mb-2">
                        THE GREAT WORK IS COMPLETE
                    </h2>
                    <p className="font-mono text-sm text-charcoal/70">
                        The transmutation has concluded
                    </p>
                </div>

                {/* Decorative sigils */}
                <div className="flex justify-center gap-6 mb-8 text-charcoal/30">
                    <span className="text-xl">{SIGILS.mercury}</span>
                    <span className="text-xl">{SIGILS.gold}</span>
                    <span className="text-xl">{SIGILS.mercury}</span>
                </div>

                {/* Thank You Message - Green Success Box */}
                <div className="relative bg-green-50 p-8 border-2 border-green-600 text-center space-y-6">
                    <CornerSigils sigil="star" className="text-green-600/50"/>

                    <div className="space-y-4">
                        <div className="text-4xl">{SIGILS.gold}</div>

                        <h3 className="font-serif text-2xl text-green-900">
                            Thank You for Participating!
                        </h3>

                        <p className="font-mono text-sm text-green-800">
                            WesHack 2026 has concluded successfully.
                            <br/>
                            Thank you to all 75+ participants and 30+ teams who joined us in this Great Work.
                        </p>

                        <SigilDivider variant="simple" className="text-green-600/30"/>

                        <p className="font-mono text-xs text-green-700">
                            Your creativity, dedication, and innovative spirit have made this event truly remarkable.
                            <br/>
                            The transmutation is complete, and the results are extraordinary.
                        </p>
                    </div>

                    {/* Bottom sigils */}
                    <div className="flex justify-center gap-4 pt-4 text-green-600/40">
                        <span>{SIGILS.aries}</span>
                        <span>{SIGILS.leo}</span>
                        <span>{SIGILS.sagittarius}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}


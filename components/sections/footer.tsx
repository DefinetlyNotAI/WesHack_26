"use client";

import {useState} from "react";
import Link from "next/link";
import {SigilDivider} from "@/components/ui/alchemy-sigils";
import {EXTERNAL_LINKS} from "@/lib/links";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function Footer() {
    const {footer, event} = SITE_DATA;
    const [moonClicks, setMoonClicks] = useState(0);
    const [showMoonSecret, setShowMoonSecret] = useState(false);
    const [hoveredSigil, setHoveredSigil] = useState<string | null>(null);

    // Easter egg: click the moon 5 times
    const handleMoonClick = () => {
        const newCount = moonClicks + 1;
        setMoonClicks(newCount);
        if (newCount >= 5) {
            setShowMoonSecret(true);
            setTimeout(() => {
                setShowMoonSecret(false);
                setMoonClicks(0);
            }, 4000);
        }
    };

    // Sigil hover secrets
    const sigilSecrets: Record<string, string> = {
        gold: "Au - Perfection",
        silver: "Ag - Reflection",
        mercury: "Hg - Transformation",
        copper: "Cu - Love",
        iron: "Fe - Strength",
        tin: "Sn - Expansion",
        lead: "Pb - Origin",
    };

    return (
        <footer className="relative py-12 border-t border-ink/10">
            {/* Background - replaced images with CSS */}
            <div className="absolute inset-0 z-0 bg-charcoal">
                <div className="absolute inset-0 opacity-10 bg-noise"/>
            </div>

            {/* Moon secret popup */}
            {showMoonSecret && (
                <div
                    className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 p-4 bg-charcoal border border-phosphor animate-pulse">
                    <p className="font-mono text-phosphor text-sm">
                        {`> LUNAR SECRET: In the foot you shall find a tiny door which if you click you can transmute to become more... <`}
                    </p>
                </div>
            )}

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Top decoration with clickable moon */}
                <div className="flex justify-center gap-4 mb-8 text-parchment/20">
                    <span>{SIGILS.fire}</span>
                    <span>{SIGILS.water}</span>
                    <span
                        onClick={handleMoonClick}
                        className="cursor-pointer hover:text-amber/60 transition-colors select-none"
                        title={moonClicks > 0 ? `${5 - moonClicks} more clicks...` : ""}
                    >
            {SIGILS.silver}
          </span>
                    <span>{SIGILS.earth}</span>
                    <span>{SIGILS.air}</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-6">
                    {/* Logo / Symbol */}
                    <div className="flex items-center gap-4">
                        <span className="text-2xl text-parchment/60">{SIGILS.gold}</span>
                        <span className="font-mono text-sm text-parchment/70">
              {event.name.toUpperCase().replace(" ", "_")}
            </span>
                        <span className="text-2xl text-parchment/60">{SIGILS.gold}</span>
                    </div>

                    {/* Navigation - Full width line on desktop, stacked rows on mobile */}
                    <nav className="w-full flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {[
                            {href: "#register", label: "Register"},
                            {href: "#process", label: "Process"},
                            {href: "#archives", label: "Archives"},
                            {href: EXTERNAL_LINKS.galleryPage, label: "Gallery", isLink: true},
                            {href: "#team", label: "Team"},
                            {href: "#contact", label: "Contact"},
                        ].map((item) =>
                            item.isLink ? (
                                <Link
                                    key={item.label}
                                    href={(item.href as string) ?? "#"}
                                    className="font-mono text-xs text-parchment/50 hover:text-phosphor transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap"
                                >
                                    <span className="text-parchment/30">{SIGILS.diamond}</span>
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="font-mono text-xs text-parchment/50 hover:text-phosphor transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap"
                                >
                                    <span className="text-parchment/30">{SIGILS.diamond}</span>
                                    {item.label}
                                </a>
                            )
                        )}
                    </nav>

                    {/* Copyright with sigils */}
                    <p className="font-mono text-xs text-parchment/40 flex items-center gap-2">
                        <span>{SIGILS.infinity}</span>
                        0x{new Date().getFullYear().toString(16).toUpperCase()} :: ALL_RIGHTS_TRANSMUTED
                    </p>
                </div>

                {/* Tagline */}
                <div className="mt-8 text-center">
                    <SigilDivider variant="terminal" className="max-w-xs mx-auto mb-4 text-parchment/20"/>
                    <p className="font-mono text-xs text-parchment/30 italic">
                        {SIGILS.leftFloral} {footer.tagline} {SIGILS.rightFloral}
                    </p>
                </div>

                {/* Alchemical symbols row - hoverable with secrets */}
                <div className="mt-6 flex justify-center gap-4 text-parchment/15 text-lg relative">
                    {Object.entries({
                        gold: SIGILS.gold,
                        silver: SIGILS.silver,
                        mercury: SIGILS.mercury,
                        copper: SIGILS.copper,
                        iron: SIGILS.iron,
                        tin: SIGILS.tin,
                        lead: SIGILS.lead,
                    }).map(([key, sigil]) => (
                        <span
                            key={key}
                            onMouseEnter={() => setHoveredSigil(key)}
                            onMouseLeave={() => setHoveredSigil(null)}
                            className="cursor-help hover:text-amber/50 transition-colors"
                        >
              {sigil}
            </span>
                    ))}

                    {/* Sigil tooltip */}
                    {hoveredSigil && (
                        <div
                            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-charcoal border border-amber/30">
                            <p className="font-mono text-xs text-amber whitespace-nowrap">
                                {sigilSecrets[hoveredSigil]}
                            </p>
                        </div>
                    )}
                </div>

                {/* Binary footer decoration - hidden message */}
                <div className="mt-6 text-center font-mono text-xs text-parchment/10 overflow-hidden group relative">
          <span className="group-hover:opacity-0 transition-opacity">
            01000001 01001100 01000011 01001000 01000101 01001101 01011001
          </span>
                    <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity text-phosphor/30">
            ALCHEMY
          </span>
                </div>

                {/* Hidden link - barely visible */}
                <div className="mt-4 text-center">
                    <Link
                        href="/transmutation"
                        className="font-mono text-[6px] text-parchment/5 hover:text-phosphor/30 transition-colors"
                    >
                        [HIDDEN_CHAMBER]
                    </Link>
                </div>
            </div>
        </footer>
    );
}

"use client";

import React, {useState} from "react";
import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {AlchemyCircle, CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {EXTERNAL_LINKS} from "@/lib/links";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function ContactSection() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const {contact} = SITE_DATA;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Build mailto URL with subject and body
        const mailtoSubject = encodeURIComponent(
            subject || "Digital Alchemy Inquiry"
        );
        const mailtoBody = encodeURIComponent(message);

        // Open user's email client
        window.location.href = `mailto:${EXTERNAL_LINKS.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    };

    return (
        <section id="contact" className="relative py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.sections.contact || "/placeholder.svg"}
                    alt={IMAGE_ALT.sections.contact}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-parchment/90"/>
                {/* Scanlines */}
                <div className="absolute inset-0 opacity-5">
                    <Image
                        src={IMAGES.backgrounds.scanlines || "/placeholder.svg"}
                        alt={IMAGE_ALT.backgrounds.scanlines}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
          <span className="font-mono text-xs text-phosphor tracking-widest uppercase">
            {SIGILS.leftFloral} SECTION_07 {SIGILS.rightFloral}
          </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 mb-4">
                        {contact.title}
                    </h2>
                    <p className="font-mono text-sm text-charcoal/70">
                        {contact.subtitle}
                    </p>
                </div>

                {/* Decorative sigils */}
                <div className="flex justify-center gap-6 mb-8 text-charcoal/30 text-xl">
                    <span>{SIGILS.mercury}</span>
                    <span>{SIGILS.caduceus}</span>
                    <span>{SIGILS.mercury}</span>
                </div>

                <SigilDivider variant="ornate" className="max-w-xs mx-auto mb-12 text-charcoal/40"/>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Alchemy circle */}
                        <AlchemyCircle className="text-charcoal/30"/>

                        <div className="space-y-6">
                            {contact.methods.map((method, _index) => (
                                <div
                                    key={method.type}
                                    className="border-l-2 border-phosphor/30 pl-4"
                                >
                  <span className="font-mono text-xs text-charcoal/50 uppercase flex items-center gap-2">
                    <span>{SIGILS.diamond}</span>
                      {method.type}
                  </span>
                                    <p className="font-mono text-sm text-ink mt-1">
                                        {method.value}
                                    </p>
                                </div>
                            ))}

                            <div className="border-l-2 border-amber/30 pl-4">
                <span className="font-mono text-xs text-charcoal/50 uppercase flex items-center gap-2">
                  <span>{SIGILS.star}</span>
                  Social Channels
                </span>
                                <div className="font-mono text-sm text-ink mt-1 space-y-1">
                                    <a
                                        href={EXTERNAL_LINKS.social?.discord ?? "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block hover:text-phosphor transition-colors"
                                    >
                                        {SIGILS.arrowRight} Hack Street
                                    </a>
                                    <a
                                        href={EXTERNAL_LINKS.social?.github ?? "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block hover:text-phosphor transition-colors"
                                    >
                                        {SIGILS.arrowRight} github/digital-alchemy
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom sigils */}
                        <div className="flex gap-4 text-charcoal/20">
                            <span>{SIGILS.pisces}</span>
                            <span>{SIGILS.aquarius}</span>
                            <span>{SIGILS.capricorn}</span>
                        </div>
                    </div>

                    {/* Contact Form - Opens Email Client */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative bg-offwhite/50 border border-ink/10 p-8 space-y-6"
                    >
                        <CornerSigils sigil="star" className="text-charcoal/20"/>

                        <div className="font-mono text-xs text-phosphor mb-6 flex items-center gap-2">
                            <span>{SIGILS.arrowRight}</span>
                            COMPOSE_MESSAGE
                            <span className="animate-pulse">{SIGILS.cursor}</span>
                        </div>

                        <div className="space-y-2">
                            <label
                                className="font-mono text-xs uppercase tracking-wider text-charcoal flex items-center gap-2">
                                <span>{SIGILS.diamond}</span>
                                subject_line
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-parchment border border-ink/20 px-4 py-3 font-mono text-sm text-ink focus:border-phosphor focus:outline-none transition-colors"
                                placeholder="Inquiry subject..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="font-mono text-xs uppercase tracking-wider text-charcoal flex items-center gap-2">
                                <span>{SIGILS.diamond}</span>
                                message_content
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full bg-parchment border border-ink/20 px-4 py-3 font-mono text-sm text-ink focus:border-phosphor focus:outline-none transition-colors resize-none"
                                placeholder="Transmit your message..."
                                required
                            />
                        </div>

                        <ParchmentButton
                            onClick={() => {
                            }}
                            size="lg"
                            className="w-full"
                        >
                            Open Email Client
                        </ParchmentButton>

                        <p className="font-mono text-xs text-charcoal/50 text-center flex items-center justify-center gap-2">
                            <span>{SIGILS.infinity}</span>
                            This will open your default email application
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

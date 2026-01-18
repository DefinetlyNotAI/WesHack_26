"use client";

import Image from "next/image";
import {IMAGE_ALT, IMAGES} from "@/lib/images";
import {CornerSigils, SigilDivider,} from "@/components/ui/alchemy-sigils";
import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";

export function ScheduleSection() {
    const {schedule} = SITE_DATA;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.sections.schedule || "/placeholder.svg"}
                    alt={IMAGE_ALT.sections.schedule}
                    fill
                    className="object-cover grayscale opacity-20"
                />
                <div className="absolute inset-0 bg-charcoal/90"/>
            </div>

            {/* Noise overlay */}
            <div
                className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url(${IMAGES.backgrounds.noise})`,
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="container relative mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="font-mono text-phosphor text-sm tracking-[0.3em] mb-4">
                        {SIGILS.gold} TEMPORAL_SEQUENCE {SIGILS.silver}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-6">
                        {schedule.title}
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-parchment/30"/>
                        <Image
                            src={IMAGES.schedule.hourglass || "/placeholder.svg"}
                            alt={IMAGE_ALT.schedule.hourglass}
                            width={40}
                            height={40}
                            className="opacity-60"
                        />
                        <div className="h-px w-16 bg-parchment/30"/>
                    </div>
                </div>

                {/* Zodiac decoration */}
                <div className="flex justify-center gap-3 mb-12 text-parchment/20 text-lg">
                    <span>{SIGILS.aries}</span>
                    <span>{SIGILS.taurus}</span>
                    <span>{SIGILS.gemini}</span>
                    <span>{SIGILS.cancer}</span>
                    <span>{SIGILS.leo}</span>
                    <span>{SIGILS.virgo}</span>
                </div>

                {/* Schedule Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {schedule.days.map((day, index) => (
                        <div
                            key={day.day}
                            className="relative border border-parchment/20 bg-ink/40 backdrop-blur-sm"
                        >
                            <CornerSigils sigil="star" className="text-phosphor/30 text-xs"/>

                            {/* Day Header */}
                            <div className="border-b border-parchment/20 p-6">
                                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-phosphor text-xs">
                    {day.day}
                  </span>
                                    <span className="font-mono text-parchment/50 text-xs">
                    {day.date}
                  </span>
                                </div>
                                <h3 className="font-serif text-2xl text-parchment">
                                    {day.title}
                                </h3>
                                {/* Day-specific sigil */}
                                <div className="mt-2 text-parchment/30">
                                    {index === 0 && <span>{SIGILS.fire} Genesis</span>}
                                    {index === 1 && <span>{SIGILS.earth} Labor</span>}
                                    {index === 2 && <span>{SIGILS.air} Revelation</span>}
                                </div>
                            </div>

                            {/* Events List */}
                            <div className="p-6 space-y-4">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="flex gap-4 group">
                    <span className="font-mono text-amber text-sm w-14 shrink-0">
                      {event.time}
                    </span>
                                        <span
                                            className="font-mono text-parchment/70 text-sm leading-relaxed group-hover:text-parchment transition-colors">
                      {event.event}
                    </span>
                                    </div>
                                ))}
                            </div>

                            {/* Day number watermark */}
                            <div
                                className="absolute -bottom-4 -right-4 font-serif text-8xl text-parchment/5 pointer-events-none">
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clockwork decoration */}
                <div className="flex flex-col items-center mt-16 gap-4">
                    <Image
                        src={IMAGES.schedule.clockwork || "/placeholder.svg"}
                        alt={IMAGE_ALT.schedule.clockwork}
                        width={120}
                        height={120}
                        className="opacity-30 grayscale"
                    />
                    <SigilDivider variant="terminal" className="max-w-xs text-parchment/30"/>
                    <div className="flex gap-4 text-parchment/20">
                        <span>{SIGILS.libra}</span>
                        <span>{SIGILS.scorpio}</span>
                        <span>{SIGILS.sagittarius}</span>
                        <span>{SIGILS.capricorn}</span>
                        <span>{SIGILS.aquarius}</span>
                        <span>{SIGILS.pisces}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

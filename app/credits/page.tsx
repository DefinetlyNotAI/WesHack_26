"use client";

import {SITE_DATA} from "@/lib/data";
import {SIGILS} from "@/lib/sigils";
import {useEffect, useRef} from "react";
import type {CreditsLeader, WinningTeam} from "@/types";
import {ParchmentButton} from "@/components/ui/parchment-button";
import styles from "./credits.module.css";

export default function CreditsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollSpeedRef = useRef<number>(0.5); // pixels per frame (normal speed)
    const animationFrameRef = useRef<number | null>(null);
    const isAutoScrollingRef = useRef<boolean>(false);
    const userHasScrolledRef = useRef<boolean>(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Reset scroll position to top on page load
        container.scrollTop = 0;


        // Listen for wheel, touch, and keyboard events to detect manual scrolling
        const stopAutoScroll = () => {
            userHasScrolledRef.current = true;
            isAutoScrollingRef.current = false;
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };

        container.addEventListener('wheel', stopAutoScroll, {passive: true});
        container.addEventListener('touchstart', stopAutoScroll, {passive: true});
        container.addEventListener('keydown', stopAutoScroll, {passive: true});

        // Start auto-scrolling after a delay
        const startTimer = setTimeout(() => {
            if (!userHasScrolledRef.current) {
                isAutoScrollingRef.current = true;
                startAutoScroll();
            }
        }, 500);

        return () => {
            clearTimeout(startTimer);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            container.removeEventListener('wheel', stopAutoScroll);
            container.removeEventListener('touchstart', stopAutoScroll);
            container.removeEventListener('keydown', stopAutoScroll);
        };
    }, []);

    const startAutoScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scroll = () => {
            if (!isAutoScrollingRef.current || userHasScrolledRef.current) return;

            const currentScroll = container.scrollTop;
            const maxScroll = container.scrollHeight - container.clientHeight;
            const speed = scrollSpeedRef.current;

            // Check if we've reached the bottom
            if (currentScroll >= maxScroll) {
                isAutoScrollingRef.current = false;
                return;
            }

            container.scrollTop = currentScroll + speed;
            animationFrameRef.current = requestAnimationFrame(scroll);
        };

        animationFrameRef.current = requestAnimationFrame(scroll);
    };


    return (
        <div className="min-h-screen bg-linear-to-b from-charcoal via-ink to-black overflow-hidden relative">
            {/* Back Button - Fixed Position with amber styling */}
            <div className="fixed top-6 left-6 z-50">
                <ParchmentButton href="/" variant="primary" size="sm">
                    <span className="text-amber">← BACK</span>
                </ParchmentButton>
            </div>

            {/* Fade overlays */}
            <div className={`${styles.fadeOverlay} ${styles.fadeTop}`}></div>
            <div className={`${styles.fadeOverlay} ${styles.fadeBottom}`}></div>


            {/* Movie-style credits container */}
            <div
                ref={containerRef}
                className={`${styles.creditsContainer} relative w-full h-screen overflow-y-auto flex items-start justify-center`}
            >
                <div className="w-full max-w-3xl px-6 pt-[100vh]">
                    {/* Event Title */}
                    <div className="text-center mb-32">
                        <div className="text-amber text-6xl md:text-8xl mb-6">{SIGILS.gold}</div>
                        <h1 className="font-serif text-5xl md:text-7xl text-parchment mb-4">
                            {SITE_DATA.event.name}
                        </h1>
                        <p className="font-mono text-xl md:text-2xl text-phosphor tracking-wider">
                            {SITE_DATA.event.tagline}
                        </p>
                        <p className="font-mono text-sm text-amber/60 mt-4">
                            {SITE_DATA.event.dates.start} - {SITE_DATA.event.dates.end}
                        </p>
                    </div>

                    {/* Leaders Section */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-amber/40">
                                <span className="text-2xl">{SIGILS.mercury}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.mercury}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-amber mb-2">
                                THE GRAND MASTERS
                            </h2>
                            <p className="font-mono text-sm text-phosphor/60 uppercase tracking-widest">
                                Leadership & Vision
                            </p>
                        </div>
                        <div className="space-y-8">
                            {SITE_DATA.credits.leaders.map((leader: CreditsLeader, index: number) => (
                                <div key={index} className="text-center">
                                    <p className="font-mono text-lg md:text-xl text-parchment mb-1">
                                        {leader.name}
                                    </p>
                                    <p className="font-mono text-sm text-phosphor/70 uppercase tracking-wide">
                                        {leader.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Team Members Section */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-phosphor/40">
                                <span className="text-2xl">{SIGILS.aries}</span>
                                <span className="text-2xl">{SIGILS.leo}</span>
                                <span className="text-2xl">{SIGILS.sagittarius}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-phosphor mb-2">
                                THE ADEPTS
                            </h2>
                            <p className="font-mono text-sm text-phosphor/60 uppercase tracking-widest">
                                Team Members & Organizers
                            </p>
                        </div>
                        <div className="space-y-8 max-w-2xl mx-auto">
                            {/* Group members by role */}
                            {Object.entries(
                                SITE_DATA.credits.teamMembers.reduce((acc, member) => {
                                    if (!acc[member.role]) acc[member.role] = [];
                                    acc[member.role].push(member.name);
                                    return acc;
                                }, {} as Record<string, string[]>)
                            ).map(([role, names], groupIndex) => (
                                <div key={groupIndex} className="text-center">
                                    <p className="font-mono text-xs text-phosphor/60 uppercase tracking-wide mb-3">
                                        {role}
                                    </p>
                                    <div
                                        className={`grid ${names.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-8 gap-y-2`}>
                                        {names.map((name, nameIndex) => (
                                            <p key={nameIndex}
                                               className="font-mono text-base md:text-lg text-parchment">
                                                {name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Winners Section - Junior League */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-amber/40">
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.mercury}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-amber mb-2">
                                JUNIOR LEAGUE CHAMPIONS
                            </h2>
                            <p className="font-mono text-sm text-amber/60 uppercase tracking-widest">
                                Years 7-9
                            </p>
                        </div>
                        <div className="space-y-10 max-w-2xl mx-auto">
                            {SITE_DATA.credits.winners.juniorLeague.map((team: WinningTeam, index: number) => (
                                <div key={index} className="text-center">
                                    <p className="font-mono text-lg text-amber/80 uppercase tracking-wide mb-2">
                                        {team.place}
                                    </p>
                                    <p className="font-serif text-2xl md:text-3xl text-parchment mb-3">
                                        {team.teamName}
                                    </p>
                                    <div className="space-y-1">
                                        {team.members.map((member: string, mIndex: number) => (
                                            <p key={mIndex} className="font-mono text-sm text-phosphor/80">
                                                {member}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Winners Section - Senior League */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-amber/40">
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.mercury}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-amber mb-2">
                                SENIOR LEAGUE CHAMPIONS
                            </h2>
                            <p className="font-mono text-sm text-amber/60 uppercase tracking-widest">
                                Years 10-13
                            </p>
                        </div>
                        <div className="space-y-10 max-w-2xl mx-auto">
                            {SITE_DATA.credits.winners.seniorLeague.map((team: WinningTeam, index: number) => (
                                <div key={index} className="text-center">
                                    <p className="font-mono text-lg text-amber/80 uppercase tracking-wide mb-2">
                                        {team.place}
                                    </p>
                                    <p className="font-serif text-2xl md:text-3xl text-parchment mb-3">
                                        {team.teamName}
                                    </p>
                                    <div className="space-y-1">
                                        {team.members.map((member: string, mIndex: number) => (
                                            <p key={mIndex} className="font-mono text-sm text-phosphor/80">
                                                {member}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Student Voted Winner */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-green-400/40">
                                <span className="text-2xl">{SIGILS.leftFloral}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.rightFloral}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-green-400 mb-2">
                                STUDENT VOTED FAVORITE
                            </h2>
                            <p className="font-mono text-sm text-green-400/60 uppercase tracking-widest">
                                Chosen by the Community
                            </p>
                        </div>
                        <div className="text-center max-w-2xl mx-auto">
                            <p className="font-serif text-2xl md:text-3xl text-parchment mb-3">
                                {SITE_DATA.credits.winners.studentVoted.teamName}
                            </p>
                            <div className="space-y-1">
                                {SITE_DATA.credits.winners.studentVoted.members.map((member: string, index: number) => (
                                    <p key={index} className="font-mono text-sm text-phosphor/80">
                                        {member}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Special Awards */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-phosphor/40">
                                <span className="text-2xl">{SIGILS.mercury}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.mercury}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-phosphor mb-2">
                                SPECIAL RECOGNITIONS
                            </h2>
                            <p className="font-mono text-sm text-phosphor/60 uppercase tracking-widest">
                                Excellence in Service
                            </p>
                        </div>
                        <div className="space-y-10 max-w-2xl mx-auto">
                            {/* Best Team Members */}
                            <div className="text-center">
                                <p className="font-mono text-lg text-amber/80 uppercase tracking-wide mb-3">
                                    Best Team Members
                                </p>
                                <div className="space-y-2">
                                    {SITE_DATA.credits.specialAwards.bestTeamMembers.map((member: string, index: number) => (
                                        <p key={index} className="font-mono text-base text-parchment">
                                            {member}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Best Security */}
                            <div className="text-center">
                                <p className="font-mono text-lg text-amber/80 uppercase tracking-wide mb-3">
                                    Best Security
                                </p>
                                <div className="space-y-2">
                                    {SITE_DATA.credits.specialAwards.bestSecurity.map((member: string, index: number) => (
                                        <p key={index} className="font-mono text-base text-parchment">
                                            {member}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Participants Section */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <div className="flex justify-center gap-4 mb-4 text-green-400/40">
                                <span className="text-2xl">{SIGILS.leftFloral}</span>
                                <span className="text-2xl">{SIGILS.gold}</span>
                                <span className="text-2xl">{SIGILS.rightFloral}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl text-green-400 mb-2">
                                THE ALCHEMISTS
                            </h2>
                            <p className="font-mono text-sm text-phosphor/60 uppercase tracking-widest">
                                Participants Who Transmuted Ideas into Reality
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                            {SITE_DATA.credits.participants.map((participant: string, index: number) => (
                                <div key={index} className="text-center">
                                    <p className="font-mono text-sm md:text-base text-parchment/90">
                                        {participant}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Message */}
                    <section className="pb-44">
                        <div className="text-center space-y-8">
                            <div className="text-amber text-6xl">{SIGILS.gold}</div>
                            <h2 className="font-serif text-4xl md:text-6xl text-parchment">
                                THE GREAT WORK IS COMPLETE
                            </h2>
                            <p className="font-mono text-lg text-phosphor/80">
                                Thank you to everyone who made this event possible
                            </p>
                            <div className="flex justify-center gap-6 text-amber/40 text-2xl">
                                <span>{SIGILS.mercury}</span>
                                <span>{SIGILS.gold}</span>
                                <span>{SIGILS.mercury}</span>
                            </div>
                            <p className="font-mono text-sm text-phosphor/60 uppercase tracking-widest pt-8">
                                {SITE_DATA.event.year} • {SITE_DATA.event.location}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}


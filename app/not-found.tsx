"use client";

import {useEffect, useState} from "react";
import {ParchmentButton} from "@/components/ui/parchment-button";
import {SIGILS} from "@/lib/sigils";

const GLITCH_TEXTS = [
    "TRANSMUTATION FAILED",
    "ELEMENT NOT FOUND",
    "VOID DETECTED",
    "AETHER CORRUPTED",
    "SIGIL BROKEN",
    "PATH DISSOLVED",
];

const BINARY_MESSAGES = [
    "01010110 01001111 01001001 01000100", // VOID
    "01001100 01001111 01010011 01010100", // LOST
    "00110100 00110000 00110100",          // 404
];

export default function NotFound() {
    const [glitchText, setGlitchText] = useState(GLITCH_TEXTS[0]);
    const [binaryIndex, setBinaryIndex] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [showSecret, setShowSecret] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [binaryPositions, setBinaryPositions] = useState<Array<{
        left: number,
        top: number,
        delay: number,
        char: string
    }>>([]);

    useEffect(() => {
        setIsMounted(true);

        // Generate stable random positions for binary elements
        const positions = Array.from({length: 20}).map(() => {
            let left = Math.random() * 100;
            let top = Math.random() * 100;

            // Avoid center area (30-70% horizontally, 20-80% vertically) to prevent overlap with main content
            while ((left > 30 && left < 70) && (top > 20 && top < 80)) {
                left = Math.random() * 100;
                top = Math.random() * 100;
            }

            return {
                left,
                top,
                delay: Math.random() * 5,
                char: Math.random() > 0.5 ? "1" : "0"
            };
        });
        setBinaryPositions(positions);

        const interval = setInterval(() => {
            setGlitchText(GLITCH_TEXTS[Math.floor(Math.random() * GLITCH_TEXTS.length)]);
            setBinaryIndex((prev) => (prev + 1) % BINARY_MESSAGES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Easter egg: click the 404 number 7 times
    const handleSecretClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount >= 7) {
            setShowSecret(true);
        }
    };

    return (
        <main className="relative min-h-screen bg-charcoal overflow-hidden flex items-center justify-center">
            {/* Background - replaced images with CSS */}
            <div className="absolute inset-0 opacity-10 bg-noise"/>

            {/* Floating binary */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isMounted && binaryPositions.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute font-mono text-phosphor/20 text-xs animate-pulse"
                        style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                            animationDelay: `${pos.delay}s`,
                        }}
                    >
                        {pos.char}
                    </div>
                ))}
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Glitching sigils */}
                <div className="flex justify-center gap-4 mb-8 text-4xl text-amber/60">
                    <span className="animate-pulse">{SIGILS.fire}</span>
                    <span className="animate-pulse"
                          style={{animationDelay: "0.5s"}}>{SIGILS.triangle}</span>
                    <span className="animate-pulse"
                          style={{animationDelay: "1s"}}>{SIGILS.void}</span>
                </div>

                {/* 404 Number - clickable easter egg */}
                <h1
                    onClick={handleSecretClick}
                    className="font-serif text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none text-parchment/10 select-none cursor-pointer hover:text-parchment/20 transition-colors"
                    title={clickCount > 0 ? `${7 - clickCount} more...` : undefined}
                >
                    404
                </h1>

                {/* Glitch text */}
                <p className="font-mono text-phosphor text-xl tracking-widest mb-4 animate-pulse">
                    {`> ${glitchText}`}
                </p>

                {/* Binary */}
                <p className="font-mono text-amber/40 text-sm mb-8">
                    {BINARY_MESSAGES[binaryIndex]}
                </p>

                {/* Message */}
                <p className="font-serif text-parchment/60 text-lg mb-8 max-w-md mx-auto">
                    The element you seek has been dissolved into the aether.
                    Perhaps it never existed, or was transmuted into something else entirely.
                </p>

                {/* Secret message revealed */}
                {showSecret && (
                    <div className="mb-8 p-4 border border-phosphor/50 bg-charcoal/80 animate-pulse">
                        <p className="font-mono text-phosphor text-sm">
                            {`> SECRET UNLOCKED: "The password is AZOTH"`}
                        </p>
                        <p className="font-mono text-amber/60 text-xs mt-2">
                            Use this knowledge wisely, seeker.
                        </p>
                    </div>
                )}

                <ParchmentButton href="/">
                    Return to the Laboratory
                </ParchmentButton>
            </div>

            {/* Hidden message in corner */}
            <div
                className="absolute bottom-4 right-4 font-mono text-[8px] text-parchment/10 select-all hidden sm:block">
                48 65 78 20 3a 20 41 5a 4f 54 48
            </div>
        </main>
    );
}

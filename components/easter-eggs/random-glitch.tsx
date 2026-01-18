"use client";

import {useEffect, useState} from "react";

const GLITCH_MESSAGES = [
    "SYSTEM_ANOMALY_DETECTED",
    "REALITY_BUFFER_OVERFLOW",
    "TRANSMUTATION_IN_PROGRESS",
    "AETHER_FLUCTUATION",
    "TEMPORAL_RIFT_NEARBY",
    "ELEMENT_INSTABILITY",
    "SIGIL_RESONANCE_PEAK",
];

export function RandomGlitch() {
    const [isGlitching, setIsGlitching] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Random chance to glitch (1% every 30 seconds)
        const checkGlitch = () => {
            if (Math.random() < 0.01) {
                setMessage(GLITCH_MESSAGES[Math.floor(Math.random() * GLITCH_MESSAGES.length)]);
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 1500);
            }
        };

        const interval = setInterval(checkGlitch, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!isGlitching) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-9998">
            {/* Scanline overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)",
                    animation: "scanline 0.1s linear infinite",
                }}
            />

            {/* Glitch message */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p
                    className="font-mono text-phosphor text-xl tracking-widest"
                    style={{
                        textShadow: "2px 0 #ff0000, -2px 0 #00ff00",
                        animation: "glitch 0.1s infinite",
                    }}
                >
                    {`> ${message}`}
                </p>
            </div>

            <style jsx>{`
                @keyframes scanline {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(4px);
                    }
                }

                @keyframes glitch {
                    0% {
                        transform: translate(0);
                    }
                    20% {
                        transform: translate(-2px, 2px);
                    }
                    40% {
                        transform: translate(-2px, -2px);
                    }
                    60% {
                        transform: translate(2px, 2px);
                    }
                    80% {
                        transform: translate(2px, -2px);
                    }
                    100% {
                        transform: translate(0);
                    }
                }
            `}</style>
        </div>
    );
}

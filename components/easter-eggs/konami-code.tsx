"use client";

import {useCallback, useEffect, useState} from "react";

import {SIGILS} from "@/lib/sigils";

const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

const SECRET_MESSAGES = [
    "The Philosopher's Stone was inside you all along.",
    "01000001 01001100 01000011 01001000 01000101 01001101 01011001", // ALCHEMY
    "Hint: Try clicking the moon in the footer...",
    "As above, so below. As within, so without.",
    "The true transmutation is of the self.",
    "Solve et Coagula - Dissolve and Coagulate",
    "Mercury, Sulfur, Salt - The Three Primes",
];

export function KonamiCodeEasterEgg() {
    const [inputSequence, setInputSequence] = useState<string[]>([]);
    const [isActivated, setIsActivated] = useState(false);
    const [message, setMessage] = useState("");

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const newSequence = [...inputSequence, e.key].slice(-10);
        setInputSequence(newSequence);

        if (newSequence.join(",") === KONAMI_CODE.join(",")) {
            setIsActivated(true);
            setMessage(SECRET_MESSAGES[Math.floor(Math.random() * SECRET_MESSAGES.length)]);
            setInputSequence([]);

            // Auto-hide after 5 seconds
            setTimeout(() => setIsActivated(false), 5000);
        }
    }, [inputSequence]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    if (!isActivated) return null;

    return (
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-charcoal/95 animate-in fade-in duration-500">
            <div className="text-center p-8 max-w-lg">
                <div className="flex justify-center gap-2 text-6xl mb-6 animate-pulse">
                    {[
                        SIGILS.gold, // sun
                        SIGILS.silver, // moon
                        SIGILS.mercury,
                        SIGILS.copper, // venus
                        SIGILS.iron, // mars
                        SIGILS.tin, // jupiter
                        SIGILS.lead, // saturn
                    ].map((sigil, i) => (
                        <span
                            key={i}
                            className="text-amber"
                            style={{animationDelay: `${i * 0.1}s`}}
                        >
                            {sigil}
                        </span>
                    ))}
                </div>

                <h2 className="font-serif text-3xl text-parchment mb-4">
                    Secret Knowledge Unlocked
                </h2>

                <p className="font-mono text-phosphor text-lg mb-6">
                    {`> ${message}`}
                </p>

                <p className="font-mono text-parchment/40 text-sm">
                    Press any key to continue...
                </p>
            </div>
        </div>
    );
}

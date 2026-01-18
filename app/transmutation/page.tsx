"use client";

import React, {useState} from "react"
import Link from "next/link";
import {AlchemyCircle} from "@/components/ui/alchemy-sigils";
import {BinaryRain} from "@/components/easter-eggs/binary-rain";
import {IMAGES} from "@/lib/images";
import {SIGILS} from "@/lib/sigils";

const TRANSMUTATION_STAGES = [
    {
        name: "Nigredo",
        symbol: "♄",
        description: "The blackening. Decomposition and purification.",
        color: "text-gray-400"
    },
    {name: "Albedo", symbol: "☽", description: "The whitening. Purification of the soul.", color: "text-parchment"},
    {
        name: "Citrinitas",
        symbol: "☉",
        description: "The yellowing. The dawning of solar light.",
        color: "text-yellow-400"
    },
    {
        name: "Rubedo",
        symbol: "♂",
        description: "The reddening. Achievement of the Philosopher's Stone.",
        color: "text-red-400"
    },
];

const PASSWORD = "azoth";

export default function TransmutationPage() {
    const [password, setPassword] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [currentStage, setCurrentStage] = useState(0);
    const [showRain, setShowRain] = useState(false);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase().trim() === PASSWORD) {
            setUnlocked(true);
            setShowRain(true);
            setTimeout(() => setShowRain(false), 3000);
        }
    };

    const advanceStage = () => {
        if (currentStage < TRANSMUTATION_STAGES.length - 1) {
            setCurrentStage((prev) => prev + 1);
        }
    };

    return (
        <main className="relative min-h-screen bg-charcoal overflow-hidden">
            <BinaryRain active={showRain}/>

            {/* Background */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url(${IMAGES.backgrounds.noise})`,
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className="font-mono text-phosphor/60 text-sm hover:text-phosphor transition-colors"
                    >
                        {`< Return to the Material World`}
                    </Link>

                    <h1 className="font-serif text-4xl md:text-6xl text-parchment mt-8 mb-4">
                        The Secret Laboratory
                    </h1>

                    <p className="font-mono text-amber/60 text-sm">
                        You have found the hidden chamber
                    </p>
                </div>

                {!unlocked ? (
                    /* Password Gate */
                    <div className="max-w-md mx-auto text-center">
                        <AlchemyCircle className="mx-auto mb-8 opacity-40" />

                        <p className="font-serif text-parchment/80 mb-6">
                            Speak the word of power to enter the inner sanctum.
                        </p>

                        <form onSubmit={handleUnlock} className="flex flex-col gap-4">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter the password..."
                                className="px-4 py-3 bg-charcoal border border-amber/30 text-parchment font-mono text-center tracking-widest focus:border-phosphor outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-amber/20 border border-amber/50 text-amber font-serif hover:bg-amber/30 transition-colors"
                            >
                                Invoke
                            </button>
                        </form>

                        <p className="font-mono text-parchment/30 text-xs mt-8">
                            Hint: Solve the cipher on the 404 page, or look in the developer console...
                        </p>
                    </div>
                ) : (
                    /* Unlocked Content */
                    <div className="max-w-4xl mx-auto animate-in fade-in duration-1000">
                        {/* Transmutation Circle */}
                        <div className="text-center mb-12">
                            <div className="inline-block p-8 border border-amber/30 bg-charcoal/50">
                                <h2 className="font-serif text-2xl text-amber mb-6">
                                    The Great Work
                                </h2>

                                {/* Stages */}
                                <div className="flex justify-center gap-8 mb-8">
                                    {TRANSMUTATION_STAGES.map((stage, i) => (
                                        <div
                                            key={stage.name}
                                            className={`text-center transition-all duration-500 ${
                                                i <= currentStage ? "opacity-100" : "opacity-30"
                                            }`}
                                        >
                      <span className={`text-4xl ${stage.color}`}>
                        {stage.symbol}
                      </span>
                                            <p className="font-mono text-xs text-parchment/60 mt-2">
                                                {stage.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Current stage description */}
                                <div className="p-4 border border-parchment/20 bg-ink/50">
                                    <h3 className={`font-serif text-xl ${TRANSMUTATION_STAGES[currentStage].color} mb-2`}>
                                        {TRANSMUTATION_STAGES[currentStage].name}
                                    </h3>
                                    <p className="font-serif text-parchment/60 text-sm">
                                        {TRANSMUTATION_STAGES[currentStage].description}
                                    </p>
                                </div>

                                {currentStage < TRANSMUTATION_STAGES.length - 1 ? (
                                    <button
                                        onClick={advanceStage}
                                        className="mt-6 px-6 py-2 border border-phosphor/50 text-phosphor font-mono text-sm hover:bg-phosphor/10 transition-colors"
                                    >
                                        Continue Transmutation
                                    </button>
                                ) : (
                                    <div className="mt-6 p-4 border border-amber bg-amber/10 animate-pulse">
                                        <p className="font-mono text-amber">
                                            {`> MAGNUM OPUS COMPLETE`}
                                        </p>
                                        <p className="font-serif text-parchment text-sm mt-2">
                                            You have achieved the Philosopher&apos;s Stone.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Cipher Puzzle */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Cipher puzzle placeholder (original component missing) */}
                            <div className="p-6 border border-parchment/20 bg-charcoal/40 flex items-center justify-center text-parchment/60">
                                <p className="font-mono text-sm">Cipher Puzzle is currently unavailable.</p>
                            </div>

                            {/* Secret Texts */}
                            <div className="p-6 border border-parchment/20 bg-charcoal/50">
                                <h3 className="font-serif text-parchment text-lg mb-4 flex items-center gap-2">
                                    <span className="text-amber">{SIGILS.book}</span>
                                    Forbidden Knowledge
                                </h3>

                                <div className="space-y-4 font-mono text-sm">
                                    <p className="text-parchment/60">
                                        <span className="text-phosphor">{`>`}</span> Binary secret: 01000001 01001100
                                        01000011 01001000 01000101 01001101 01011001
                                    </p>
                                    <p className="text-parchment/40 text-xs">
                                        (Decodes to: ALCHEMY)
                                    </p>

                                    <p className="text-parchment/60">
                                        <span className="text-phosphor">{`>`}</span> Hex whisper: 54 72 75 74 68
                                    </p>
                                    <p className="text-parchment/40 text-xs">
                                        (Decodes to: Truth)
                                    </p>

                                    <p className="text-parchment/60">
                                        <span className="text-phosphor">{`>`}</span> The Three Primes:
                                    </p>
                                    <ul className="text-parchment/40 text-xs pl-4 space-y-1">
                                        <li>☿ Mercury - The Spirit</li>
                                        <li>🜍 Sulfur - The Soul</li>
                                        <li>🜔 Salt - The Body</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Hidden Credits */}
                        <div className="mt-12 text-center">
                            <p className="font-mono text-parchment/20 text-xs">
                                /* This secret page was crafted by digital alchemists */
                            </p>
                            <p className="font-mono text-parchment/10 text-xs mt-1">
                                /* Find more secrets hidden throughout the site */
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

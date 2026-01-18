"use client";

import {useEffect, useState} from "react";

const SCROLL_SECRETS = [
    {depth: 25, message: "You've begun the descent..."},
    {depth: 50, message: "Halfway through the labyrinth..."},
    {depth: 75, message: "The depths reveal their secrets..."},
    {depth: 95, message: "You have reached the bottom. The Philosopher's Stone awaits at /transmutation"},
];

export function ScrollSecrets() {
    const [shownSecrets, setShownSecrets] = useState<Set<number>>(new Set());
    const [currentMessage, setCurrentMessage] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            for (const secret of SCROLL_SECRETS) {
                if (scrollPercent >= secret.depth && !shownSecrets.has(secret.depth)) {
                    setShownSecrets((prev) => new Set([...prev, secret.depth]));
                    setCurrentMessage(secret.message);

                    setTimeout(() => setCurrentMessage(null), 3000);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [shownSecrets]);

    if (!currentMessage) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-500">
            <div className="p-3 bg-charcoal/90 border border-amber/30 max-w-xs">
                <p className="font-mono text-xs text-amber/80">
                    {`> ${currentMessage}`}
                </p>
            </div>
        </div>
    );
}

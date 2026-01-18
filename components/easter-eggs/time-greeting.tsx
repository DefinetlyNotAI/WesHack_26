"use client";

import {useEffect, useState} from "react";

import {SIGILS} from "@/lib/sigils";

const TIME_GREETINGS = {
    witching: {
        hours: [0, 1, 2, 3], // 12am - 3am
        message: "The witching hour... Perfect time for alchemy.",
        sigil: SIGILS.silver,
    },
    dawn: {
        hours: [4, 5, 6],
        message: "Dawn approaches. The Great Work begins anew.",
        sigil: SIGILS.air,
    },
    morning: {
        hours: [7, 8, 9, 10, 11],
        message: "Sol rises. May your transmutations succeed.",
        sigil: SIGILS.gold,
    },
    noon: {
        hours: [12],
        message: "High noon. Maximum solar energy achieved.",
        sigil: SIGILS.gold,
    },
    afternoon: {
        hours: [13, 14, 15, 16, 17],
        message: "The afternoon labors continue...",
        sigil: SIGILS.mercury,
    },
    evening: {
        hours: [18, 19, 20],
        message: "Evening descends. The elements rest.",
        sigil: SIGILS.water,
    },
    night: {
        hours: [21, 22, 23],
        message: "Night falls. Luna guides your work.",
        sigil: SIGILS.silver,
    },
};

export function TimeGreeting() {
    const [greeting, setGreeting] = useState<{ message: string; sigil: string } | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();

        for (const period of Object.values(TIME_GREETINGS)) {
            if (period.hours.includes(hour)) {
                setGreeting({message: period.message, sigil: period.sigil});
                break;
            }
        }

        // Show after a delay
        const timer = setTimeout(() => setIsVisible(true), 2000);

        // Auto-hide
        const hideTimer = setTimeout(() => setIsVisible(false), 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!greeting || !isVisible) return null;

    return (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
            <div className="p-3 bg-charcoal/90 border border-parchment/20 max-w-xs">
                <p className="font-mono text-xs text-parchment/60 flex items-center gap-2">
                    <span className="text-amber">{greeting.sigil}</span>
                    {greeting.message}
                </p>
            </div>
        </div>
    );
}

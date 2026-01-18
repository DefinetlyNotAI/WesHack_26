"use client";

import {useEffect, useState} from "react";

interface Particle {
    id: number;
    x: number;
    char: string;
    delay: number;
    duration: number;
}

export function BinaryRain({active = false}: { active?: boolean }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        if (!active) {
            setParticles([]);
            return;
        }

        const chars = ["0", "1", "☿", "☉", "☽", "♄", "♃", "♂", "♀"];
        const newParticles: Particle[] = [];

        for (let i = 0; i < 50; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                char: chars[Math.floor(Math.random() * chars.length)],
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 4,
            });
        }

        setParticles(newParticles);
    }, [active]);

    if (!active || particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="absolute font-mono text-phosphor/60 text-sm animate-fall"
                    style={{
                        left: `${p.x}%`,
                        top: "-20px",
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                >
          {p.char}
        </span>
            ))}
            <style jsx>{`
                @keyframes fall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}

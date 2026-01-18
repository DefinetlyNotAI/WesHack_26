import React from "react"
import {cn} from "@/lib/ui";
import {SIGILS} from "@/lib/sigils";

// Sigil divider component
export function SigilDivider({
                                 variant = "simple",
                                 className
                             }: {
    variant?: "simple" | "ornate" | "terminal";
    className?: string;
}): React.ReactElement {
    const dividers = {
        simple: `${SIGILS.diamond} ${SIGILS.bullet} ${SIGILS.diamond}`,
        ornate: `${SIGILS.leftFloral} ${SIGILS.pentagram} ${SIGILS.rightFloral}`,
        terminal: `${SIGILS.lightBlock}${SIGILS.mediumBlock}${SIGILS.block}${SIGILS.mediumBlock}${SIGILS.lightBlock}`,
    };

    return (
        <div className={cn("flex items-center justify-center gap-4", className)}>
            <span className="h-px flex-1 bg-current opacity-20"/>
            <span className="font-mono text-lg tracking-widest opacity-60">
        {dividers[variant]}
      </span>
            <span className="h-px flex-1 bg-current opacity-20"/>
        </div>
    );
}

// Corner sigils for cards/sections
export function CornerSigils({
                                 className,
                                 sigil = "diamond",
                             }: {
    className?: string;
    sigil?: keyof typeof SIGILS;
}): React.ReactElement {
    return (
        <>
      <span className={cn("absolute top-2 left-2 opacity-30", className)}>
        {SIGILS[sigil]}
      </span>
            <span className={cn("absolute top-2 right-2 opacity-30", className)}>
        {SIGILS[sigil]}
      </span>
            <span className={cn("absolute bottom-2 left-2 opacity-30", className)}>
        {SIGILS[sigil]}
      </span>
            <span className={cn("absolute bottom-2 right-2 opacity-30", className)}>
        {SIGILS[sigil]}
      </span>
        </>
    );
}

// Alchemical circle decoration
export function AlchemyCircle({className}: { className?: string }): React.ReactElement {
    const symbols = [
        SIGILS.fire, SIGILS.water, SIGILS.earth, SIGILS.air,
        SIGILS.gold, SIGILS.silver, SIGILS.mercury, SIGILS.lead
    ];

    return (
        <div className={cn("relative w-32 h-32", className)}>
            {/* Outer circle */}
            <div className="absolute inset-0 border border-current rounded-full opacity-30"/>
            {/* Inner circle */}
            <div className="absolute inset-4 border border-current rounded-full opacity-20"/>
            {/* Center symbol */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-60">
                {SIGILS.pentagram}
            </div>
            {/* Orbital symbols */}
            {symbols.map((symbol, i) => {
                const angle = (i / symbols.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 40 * Math.cos(rad);
                const y = 50 + 40 * Math.sin(rad);
                return (
                    <span
                        key={i}
                        className="absolute text-xs opacity-50"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
            {symbol}
          </span>
                );
            })}
        </div>
    );
}

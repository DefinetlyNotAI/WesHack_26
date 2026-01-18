"use client";

import React from "react";
import {cn} from "@/lib/ui";
import {ParchmentButtonProps} from "@/types";

export function ParchmentButton({
                                    children,
                                    href,
                                    onClick,
                                    variant = "primary",
                                    size = "md",
                                    className,
                                    external = false,
                                }: ParchmentButtonProps): React.ReactElement {
    const sizeClasses = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-sm",
    };

    const variantClasses = {
        primary: "bg-charcoal text-parchment hover:bg-ink",
        secondary: "bg-parchment text-ink hover:bg-offwhite",
        ghost: "bg-transparent text-ink hover:bg-ink/5 border-ink/20",
    };

    const content = (
        <>
            {/* Torn edge SVG filter */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <defs>
                    <filter id="torn-edge-filter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R"
                                           yChannelSelector="G"/>
                    </filter>
                </defs>
            </svg>

            {/* Button background with torn edges */}
            <span className="absolute inset-0 torn-edge-mask"/>

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 font-mono uppercase tracking-widest">
        <span className="text-phosphor opacity-0 group-hover:opacity-100 transition-opacity">
          {">"}
        </span>
                {children}
                <span className="text-amber opacity-60 group-hover:animate-pulse">_</span>
      </span>

            {/* Corner tears */}
            <span className="absolute -top-px -left-px w-2 h-2 bg-parchment"
                  style={{clipPath: "polygon(0 0, 100% 0, 0 100%)"}}/>
            <span className="absolute -top-px -right-px w-2 h-2 bg-parchment"
                  style={{clipPath: "polygon(0 0, 100% 0, 100% 100%)"}}/>
            <span className="absolute -bottom-px -left-px w-2 h-2 bg-parchment"
                  style={{clipPath: "polygon(0 0, 0 100%, 100% 100%)"}}/>
            <span className="absolute -bottom-px -right-px w-2 h-2 bg-parchment"
                  style={{clipPath: "polygon(100% 0, 0 100%, 100% 100%)"}}/>

            {/* Edge notches for torn effect */}
            <span className="absolute top-1/4 -left-px w-1 h-2 bg-parchment"/>
            <span className="absolute top-2/3 -left-px w-0.5 h-1.5 bg-parchment"/>
            <span className="absolute top-1/3 -right-px w-1 h-1.5 bg-parchment"/>
            <span className="absolute top-3/4 -right-px w-0.5 h-2 bg-parchment"/>
            <span className="absolute -top-px left-1/4 h-1 w-2 bg-parchment"/>
            <span className="absolute -top-px left-2/3 h-0.5 w-1.5 bg-parchment"/>
            <span className="absolute -bottom-px left-1/3 h-1 w-1.5 bg-parchment"/>
            <span className="absolute -bottom-px left-3/4 h-0.5 w-2 bg-parchment"/>
        </>
    );

    const baseClasses = cn(
        "group relative inline-flex items-center justify-center border border-ink/20 transition-all duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
    );

    if (href) {
        return (
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={baseClasses}
            >
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
}

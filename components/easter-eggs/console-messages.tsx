"use client";

import {useEffect} from "react";

const ASCII_ART = `
    ⚗ DIGITAL ALCHEMY ⚗
    
         /\\
        /  \\
       / 🜂  \\
      /______\\
      |      |
      | 🜁🜃🜄 |
      |______|
    
    "As above, so below"
`;

const CONSOLE_SECRETS = [
    "%c🜂 Fire: The spark of creation",
    "%c🜃 Water: The flow of data",
    "%c🜁 Air: The breath of logic",
    "%c🜄 Earth: The foundation of code",
    "%c☿ Mercury: Quick and adaptable",
    "%c☉ Gold: Perfection achieved",
    "%c☽ Silver: Reflective wisdom",
];

const HIDDEN_COMMANDS = `
%cHidden Commands:
- Type 'alchemy' in the console for a surprise
- Konami Code unlocks secret knowledge
- Click the 404 number 7 times
- Find the hidden page of secrets in the foot
- Hover over the footer sigils
- The theme is hidden in the binary
`;

export function ConsoleMessages() {
    useEffect(() => {
        // Main ASCII art
        console.log(
            "%c" + ASCII_ART,
            "color: #d4a574; font-family: monospace; font-size: 14px;"
        );

        // Welcome message
        console.log(
            "%c⚗ Welcome, Seeker of Digital Alchemy ⚗",
            "color: #22c55e; font-size: 16px; font-weight: bold;"
        );

        console.log(
            "%cYou have found the developer console. Congratulations on your curiosity.",
            "color: #f5f0e6; font-style: italic;"
        );

        // Random secret
        const randomSecret = CONSOLE_SECRETS[Math.floor(Math.random() * CONSOLE_SECRETS.length)];
        console.log(randomSecret, "color: #d4a574;");

        // Hidden commands hint
        console.log(HIDDEN_COMMANDS, "color: #22c55e; font-size: 10px;");

        // Secret binary message
        console.log(
            "%c01010011 01000101 01000011 01010010 01000101 01010100",
            "color: #333; font-size: 8px;"
        );
        // Decodes to "SECRET"

        // Define global alchemy command - auto-exec on reference
        Object.defineProperty(window, 'alchemy', {
            get() {
                console.log("%cTRANSMUTATION COMPLETE", "color: gold; font-size: 24px;");
                console.log("%cYou have invoked the ancient command.", "color: #22c55e;");
                console.log("%cSecret: The true gold is the knowledge you gain along the way.", "color: #d4a574;");
                console.log("%c🜚 Philosopher's Stone Acquired 🜚", "color: #f59e0b; font-size: 18px;");
                return undefined; // prevents printing the function itself
            },
            configurable: true,
            enumerable: false
        });

        return () => {
            delete (window as unknown as Record<string, unknown>).alchemy;
        };
    }, []);

    return null;
}

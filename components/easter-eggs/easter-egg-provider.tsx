"use client";

import React from "react"

import {KonamiCodeEasterEgg} from "./konami-code";
import {ConsoleMessages} from "./console-messages";
import {TimeGreeting} from "./time-greeting";
import {RandomGlitch} from "./random-glitch";
import {ScrollSecrets} from "./scroll-secrets";

export function EasterEggProvider({children}: { children: React.ReactNode }) {
    return (
        <>
            <ConsoleMessages/>
            <KonamiCodeEasterEgg/>
            <TimeGreeting/>
            <RandomGlitch/>
            <ScrollSecrets/>
            {children}
        </>
    );
}

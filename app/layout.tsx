import React from "react"
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/next'
import {EasterEggProvider} from '@/components/easter-eggs/easter-egg-provider'
import './globals.css'

export const metadata: Metadata = {
    title: 'Wes:Hack 26 - Digital Alchemy',
    description: 'An experiment in transmutation. WES:HACK 2026 Hackathon by Hack Street.',
    icons: {
        icon: [
            {
                url: '/weshack.ico',
                type: 'image/x-icon',
            },
        ],
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={`font-sans antialiased`}>
        <EasterEggProvider>
            {children}
        </EasterEggProvider>
        <Analytics/>
        </body>
        </html>
    )
}

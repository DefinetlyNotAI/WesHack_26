// ============================================
// IMAGE PATHS - Replace with your actual image paths
// ============================================

export const IMAGES = {
    // Backgrounds
    backgrounds: {
        hero: "/images/backgrounds/hero-parchment.jpg",
        paper: "/images/backgrounds/paper-texture.jpg",
        noise: "/images/backgrounds/noise-overlay.png",
        scanlines: "/images/backgrounds/scanlines.png",
    },

    // Section-specific backgrounds
    sections: {
        process: "/images/sections/process-bg.jpg",
        archive: "/images/sections/archive-bg.jpg",
        team: "/images/sections/team-bg.jpg",
        contact: "/images/sections/contact-bg.jpg",
        schedule: "/images/sections/schedule-bg.jpg",
        prizes: "/images/sections/prizes-bg.jpg",
        gallery: "/images/sections/gallery-bg.jpg",
    },

    // Prize images
    prizes: {
        grand: "/images/prizes/philosophers-stone.jpg",
        second: "/images/prizes/elixir-vitae.jpg",
        third: "/images/prizes/alkahest.jpg",
        special: "/images/prizes/azoth-award.jpg",
    },

    // Schedule decorative
    schedule: {
        clockwork: "/images/schedule/clockwork-mechanism.png",
        hourglass: "/images/schedule/digital-hourglass.png",
        timeline: "/images/schedule/timeline-glyph.png",
    },

    // Decorative elements
    decorative: {
        alchemySymbol: "/images/decorative/alchemy-symbol.png",
        circuitRune: "/images/decorative/circuit-rune.png",
        sigilDivider: "/images/decorative/sigil-divider.png",
        hexPattern: "/images/decorative/hex-pattern.png",
    },

    // Team member photos
    team: {
        member1: "/images/team/alchemist-1.jpg",
        member2: "/images/team/alchemist-2.jpg",
        member3: "/images/team/alchemist-3.jpg",
        member4: "/images/team/alchemist-4.jpg",
    },

    // Previous hackathon cover images
    archives: {
        hackathon2024: "/images/archives/experiment-2024.jpg",
        hackathon2023: "/images/archives/experiment-2023.jpg",
        hackathon2022: "/images/archives/experiment-2022.jpg",
    },

    // Gallery images (for dedicated gallery page)
    gallery: {
        img1: "/images/gallery/transmutation-001.jpg",
        img2: "/images/gallery/transmutation-002.jpg",
        img3: "/images/gallery/transmutation-003.jpg",
        img4: "/images/gallery/transmutation-004.jpg",
        img5: "/images/gallery/transmutation-005.jpg",
        img6: "/images/gallery/transmutation-006.jpg",
        img7: "/images/gallery/transmutation-007.jpg",
        img8: "/images/gallery/transmutation-008.jpg",
        img9: "/images/gallery/transmutation-009.jpg",
        img10: "/images/gallery/transmutation-010.jpg",
        img11: "/images/gallery/transmutation-011.jpg",
        img12: "/images/gallery/transmutation-012.jpg",
        img13: "/images/gallery/transmutation-013.jpg",
        img14: "/images/gallery/transmutation-014.jpg",
        img15: "/images/gallery/transmutation-015.jpg",
        img16: "/images/gallery/transmutation-016.jpg",
    },

    // Icons and glyphs
    icons: {
        transmutation: "/images/icons/transmutation.svg",
        formula: "/images/icons/formula.svg",
        catalyst: "/images/icons/catalyst.svg",
        vessel: "/images/icons/vessel.svg",
    },
} as const;

// ============================================
// EXTERNAL LINKS - Replace with your actual URLs
// ============================================

export const EXTERNAL_LINKS = {
    // Google Form URL for registration
    registrationForm: "https://forms.google.com/YOUR_FORM_ID_HERE",

    // Contact email address
    contactEmail: "YOUR_EMAIL@EXAMPLE.COM",

    // Social media links
    social: {
        twitter: "https://twitter.com/YOUR_HANDLE",
        discord: "https://discord.gg/YOUR_INVITE",
        github: "https://github.com/YOUR_ORG",
        instagram: "https://instagram.com/YOUR_HANDLE",
        linkedin: "https://linkedin.com/company/YOUR_COMPANY",
    },

    // Internal pages
    galleryPage: "/gallery",
} as const;

// ============================================
// IMAGE ALT TEXT - For accessibility
// ============================================

export const IMAGE_ALT = {
    backgrounds: {
        hero: "Aged parchment texture with subtle ink stains",
        paper: "Weathered paper background",
        noise: "Subtle noise texture overlay",
        scanlines: "CRT scanline effect",
    },
    sections: {
        process: "Alchemical laboratory background",
        archive: "Ancient archive room",
        team: "Workshop interior",
        contact: "Signal transmission apparatus",
        schedule: "Temporal mechanism background",
        prizes: "Treasure vault background",
        gallery: "Gallery exhibition space",
    },
    prizes: {
        grand: "Philosopher's Stone grand prize",
        second: "Elixir of Vitae second prize",
        third: "Universal Solvent third prize",
        special: "Azoth special recognition award",
    },
    schedule: {
        clockwork: "Clockwork mechanism illustration",
        hourglass: "Digital hourglass timer",
        timeline: "Timeline glyph decoration",
    },
    decorative: {
        alchemySymbol: "Alchemical transmutation symbol",
        circuitRune: "Circuit diagram merged with runic patterns",
        sigilDivider: "Decorative sigil section divider",
        hexPattern: "Hexagonal pattern with binary elements",
    },
    team: {
        member1: "Team alchemist portrait",
        member2: "Team alchemist portrait",
        member3: "Team alchemist portrait",
        member4: "Team alchemist portrait",
    },
    archives: {
        hackathon2024: "Hackathon 2024 experiment documentation",
        hackathon2023: "Hackathon 2023 experiment documentation",
        hackathon2022: "Hackathon 2022 experiment documentation",
    },
    gallery: {
        img1: "Hackathon moment - teams collaborating",
        img2: "Hackathon moment - coding session",
        img3: "Hackathon moment - presentation",
        img4: "Hackathon moment - workshop",
        img5: "Hackathon moment - brainstorming",
        img6: "Hackathon moment - demo day",
        img7: "Hackathon moment - mentorship",
        img8: "Hackathon moment - celebration",
        img9: "Hackathon moment - workspace",
        img10: "Hackathon moment - networking",
        img11: "Hackathon moment - judging",
        img12: "Hackathon moment - awards",
        img13: "Hackathon moment - teamwork",
        img14: "Hackathon moment - innovation",
        img15: "Hackathon moment - community",
        img16: "Hackathon moment - finale",
    },
    icons: {
        transmutation: "Transmutation process icon",
        formula: "Digital formula icon",
        catalyst: "Catalyst element icon",
        vessel: "Vessel container icon",
    },
} as const;

// ============================================
// ============================================
//
//   SITE CONTENT - EDIT ALL TEXT BELOW
//
// ============================================
// ============================================

export const SITE_DATA = {
    // ==========================================
    // EVENT DETAILS
    // ==========================================
    event: {
        // Main event name (appears in hero, footer, etc.)
        name: "YOUR_EVENT_NAME",

        // Secondary title/type
        tagline: "Hackathon",

        // Event year
        year: 2025,

        // Event dates
        dates: {
            start: "MONTH DD, YYYY", // e.g., "FEB 15, 2025"
            end: "MONTH DD, YYYY", // e.g., "FEB 17, 2025"
        },

        // Event location
        location: "YOUR_VENUE_OR_LOCATION",

        // Optional hex code for theming (appears in hero)
        hexCode: "0x000000000000",
    },

    // ==========================================
    // HERO SECTION
    // ==========================================
    hero: {
        // Subtitle line below the main title
        subtitle: "// YOUR_SUBTITLE_HERE",

        // Description lines (each string is a new line)
        description: [
            "> YOUR_FIRST_LINE_HERE",
            "> YOUR_SECOND_LINE_HERE",
            "> YOUR_THIRD_LINE_HERE",
        ],

        // Call-to-action button text
        ctaText: "YOUR_CTA_TEXT",
    },

    // ==========================================
    // REGISTRATION SECTION
    // ==========================================
    registration: {
        // Section title
        title: "YOUR_REGISTRATION_TITLE",

        // Section subtitle
        subtitle: "YOUR_REGISTRATION_SUBTITLE",

        // List of requirements shown to participants
        requirements: [
            "REQUIREMENT_1",
            "REQUIREMENT_2",
            "REQUIREMENT_3",
            "REQUIREMENT_4",
        ],

        // Button text
        ctaText: "YOUR_REGISTER_BUTTON_TEXT",

        // Status message shown at bottom
        status: "YOUR_STATUS_MESSAGE",
    },

    // ==========================================
    // PROCESS / HOW IT WORKS SECTION
    // ==========================================
    process: {
        // Section title
        title: "YOUR_PROCESS_TITLE",

        // Section description
        description: "YOUR_PROCESS_DESCRIPTION_TEXT_HERE",

        // Duration label
        duration: "YOUR_DURATION", // e.g., "48_HOURS"

        // Process steps (4 steps)
        steps: [
            {
                number: "01",
                title: "STEP_1_TITLE",
                description: "STEP_1_DESCRIPTION_TEXT",
                icon: "vessel" as const, // Options: "vessel", "catalyst", "transmutation", "formula"
            },
            {
                number: "02",
                title: "STEP_2_TITLE",
                description: "STEP_2_DESCRIPTION_TEXT",
                icon: "catalyst" as const,
            },
            {
                number: "03",
                title: "STEP_3_TITLE",
                description: "STEP_3_DESCRIPTION_TEXT",
                icon: "transmutation" as const,
            },
            {
                number: "04",
                title: "STEP_4_TITLE",
                description: "STEP_4_DESCRIPTION_TEXT",
                icon: "formula" as const,
            },
        ],
    },

    // ==========================================
    // SCHEDULE SECTION
    // ==========================================
    schedule: {
        // Section title
        title: "YOUR_SCHEDULE_TITLE",

        // Schedule days (add or remove days as needed)
        days: [
            {
                day: "DAY_01",
                date: "MONTH DD, YYYY",
                title: "DAY_1_TITLE",
                events: [
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                ],
            },
            {
                day: "DAY_02",
                date: "MONTH DD, YYYY",
                title: "DAY_2_TITLE",
                events: [
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                ],
            },
            {
                day: "DAY_03",
                date: "MONTH DD, YYYY",
                title: "DAY_3_TITLE",
                events: [
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                    {time: "00:00", event: "EVENT_DESCRIPTION"},
                ],
            },
        ],
    },

    // ==========================================
    // PRIZES SECTION
    // ==========================================
    prizes: {
        // Section title
        title: "YOUR_PRIZES_TITLE",

        // Section description
        description: "YOUR_PRIZES_DESCRIPTION_TEXT",

        // Total prize pool display
        totalPool: "$XX,XXX",

        // Main prizes (top 3)
        main: [
            {
                rank: "FIRST", // Label for ranking
                title: "FIRST_PRIZE_NAME",
                value: "$X,XXX",
                description: "FIRST_PRIZE_DESCRIPTION_TEXT",
                imageKey: "grand" as const, // Must match IMAGES.prizes key
                perks: [
                    "PERK_1",
                    "PERK_2",
                    "PERK_3",
                    "PERK_4",
                ],
            },
            {
                rank: "SECOND",
                title: "SECOND_PRIZE_NAME",
                value: "$X,XXX",
                description: "SECOND_PRIZE_DESCRIPTION_TEXT",
                imageKey: "second" as const,
                perks: [
                    "PERK_1",
                    "PERK_2",
                    "PERK_3",
                    "PERK_4",
                ],
            },
            {
                rank: "THIRD",
                title: "THIRD_PRIZE_NAME",
                value: "$X,XXX",
                description: "THIRD_PRIZE_DESCRIPTION_TEXT",
                imageKey: "third" as const,
                perks: [
                    "PERK_1",
                    "PERK_2",
                    "PERK_3",
                    "PERK_4",
                ],
            },
        ],

        // Special category awards (add or remove as needed)
        special: [
            {title: "SPECIAL_AWARD_1_NAME", description: "SPECIAL_AWARD_1_DESCRIPTION", value: "$XXX"},
            {title: "SPECIAL_AWARD_2_NAME", description: "SPECIAL_AWARD_2_DESCRIPTION", value: "$XXX"},
            {title: "SPECIAL_AWARD_3_NAME", description: "SPECIAL_AWARD_3_DESCRIPTION", value: "$XXX"},
            {title: "SPECIAL_AWARD_4_NAME", description: "SPECIAL_AWARD_4_DESCRIPTION", value: "$XXX"},
        ],
    },

    // ==========================================
    // TEAM SECTION
    // ==========================================
    team: {
        // Section title
        title: "YOUR_TEAM_TITLE",

        // Section subtitle
        subtitle: "YOUR_TEAM_SUBTITLE",

        // Team members (add or remove as needed)
        members: [
            {
                name: "TEAM_MEMBER_1_NAME",
                role: "TEAM_MEMBER_1_ROLE",
                description: "TEAM_MEMBER_1_DESCRIPTION",
                imageKey: "member1" as const, // Must match IMAGES.team key
            },
            {
                name: "TEAM_MEMBER_2_NAME",
                role: "TEAM_MEMBER_2_ROLE",
                description: "TEAM_MEMBER_2_DESCRIPTION",
                imageKey: "member2" as const,
            },
            {
                name: "TEAM_MEMBER_3_NAME",
                role: "TEAM_MEMBER_3_ROLE",
                description: "TEAM_MEMBER_3_DESCRIPTION",
                imageKey: "member3" as const,
            },
            {
                name: "TEAM_MEMBER_4_NAME",
                role: "TEAM_MEMBER_4_ROLE",
                description: "TEAM_MEMBER_4_DESCRIPTION",
                imageKey: "member4" as const,
            },
        ],
    },

    // ==========================================
    // ARCHIVES / PREVIOUS HACKATHONS
    // ==========================================
    archives: {
        // Section title
        title: "YOUR_ARCHIVES_TITLE",

        // Section subtitle
        subtitle: "YOUR_ARCHIVES_SUBTITLE",

        // Previous events (add or remove as needed)
        experiments: [
            {
                year: "YYYY",
                title: "PAST_EVENT_1_NAME",
                theme: "PAST_EVENT_1_THEME",
                participants: 0, // Number of participants
                projects: 0, // Number of projects
                imageKey: "hackathon2024" as const, // Must match IMAGES.archives key
            },
            {
                year: "YYYY",
                title: "PAST_EVENT_2_NAME",
                theme: "PAST_EVENT_2_THEME",
                participants: 0,
                projects: 0,
                imageKey: "hackathon2023" as const,
            },
            {
                year: "YYYY",
                title: "PAST_EVENT_3_NAME",
                theme: "PAST_EVENT_3_THEME",
                participants: 0,
                projects: 0,
                imageKey: "hackathon2022" as const,
            },
        ],
    },

    // ==========================================
    // GALLERY PAGE
    // ==========================================
    gallery: {
        // Page title
        title: "YOUR_GALLERY_TITLE",

        // Page subtitle
        subtitle: "YOUR_GALLERY_SUBTITLE",

        // Page description
        description: "YOUR_GALLERY_DESCRIPTION_TEXT",

        // Gallery images (add or remove as needed, max 16 with current setup)
        // key must match IMAGES.gallery keys (img1, img2, etc.)
        images: [
            {key: "img1", year: "YYYY", caption: "IMAGE_1_CAPTION"},
            {key: "img2", year: "YYYY", caption: "IMAGE_2_CAPTION"},
            {key: "img3", year: "YYYY", caption: "IMAGE_3_CAPTION"},
            {key: "img4", year: "YYYY", caption: "IMAGE_4_CAPTION"},
            {key: "img5", year: "YYYY", caption: "IMAGE_5_CAPTION"},
            {key: "img6", year: "YYYY", caption: "IMAGE_6_CAPTION"},
            {key: "img7", year: "YYYY", caption: "IMAGE_7_CAPTION"},
            {key: "img8", year: "YYYY", caption: "IMAGE_8_CAPTION"},
            {key: "img9", year: "YYYY", caption: "IMAGE_9_CAPTION"},
            {key: "img10", year: "YYYY", caption: "IMAGE_10_CAPTION"},
            {key: "img11", year: "YYYY", caption: "IMAGE_11_CAPTION"},
            {key: "img12", year: "YYYY", caption: "IMAGE_12_CAPTION"},
            {key: "img13", year: "YYYY", caption: "IMAGE_13_CAPTION"},
            {key: "img14", year: "YYYY", caption: "IMAGE_14_CAPTION"},
            {key: "img15", year: "YYYY", caption: "IMAGE_15_CAPTION"},
            {key: "img16", year: "YYYY", caption: "IMAGE_16_CAPTION"},
        ] as Array<{ key: keyof typeof IMAGES.gallery; year: string; caption: string }>,
    },

    // ==========================================
    // CONTACT SECTION
    // ==========================================
    contact: {
        // Section title
        title: "YOUR_CONTACT_TITLE",

        // Section subtitle
        subtitle: "YOUR_CONTACT_SUBTITLE",

        // Contact methods displayed
        methods: [
            {type: "TYPE_LABEL", label: "Email", value: "YOUR_EMAIL@EXAMPLE.COM"},
            {type: "TYPE_LABEL", label: "Location", value: "YOUR_LOCATION"},
            {type: "TYPE_LABEL", label: "Response Time", value: "YOUR_RESPONSE_TIME"},
        ],
    },

    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        // Tagline below logo
        tagline: "YOUR_FOOTER_TAGLINE",

        // Copyright holder name
        copyright: "YOUR_ORGANIZATION_NAME",

        // Footer links
        links: [
            {label: "LINK_1_TEXT", href: "/YOUR_LINK_1_PATH"},
            {label: "LINK_2_TEXT", href: "/YOUR_LINK_2_PATH"},
            {label: "LINK_3_TEXT", href: "/YOUR_LINK_3_PATH"},
        ],
    },
} as const;

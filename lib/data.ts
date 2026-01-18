import {IMAGES} from "@/lib/images";
import {EXTERNAL_LINKS} from "@/lib/links";
import type {SiteData} from "@/types";

export const SITE_DATA: SiteData = {
    // ==========================================
    // EVENT DETAILS
    // ==========================================
    event: {
        // Main event name (appears in hero, footer, etc.)
        name: "Wes:Hack 26",

        // Secondary title/type
        tagline: "Hackathon",

        // Event year
        year: 2026,

        // Event dates
        dates: {
            start: "Feb 13, 2026",
            end: "Feb 14, 2026",
        },

        // Event location
        location: "Wesgreen International School, Sharjah, UAE",

        // Optional hex code for theming (appears in hero)
        hexCode: "0x000000000000",
    },

    // ==========================================
    // HERO SECTION
    // ==========================================
    hero: {
        // Subtitle line below the main title
        subtitle: "// Digital_Alchemy",

        // Description lines
        description: [
            "> Enter the circle of creation and forge ideas into reality.",
            "> Transmute curiosity into code, and code into wonders.",
            "> Join the adepts and complete the Great Work within 48 hours.",
        ],

        // Call-to-action button text
        ctaText: "BEGIN_THE_GREAT_WORK",
    },

    // ==========================================
    // REGISTRATION SECTION
    // ==========================================
    registration: {
        // Section title
        title: "REGISTER NOW",

        // Section subtitle
        subtitle: "Inscribe thy name in the ledger of transmutation.",

        // List of requirements shown to participants
        requirements: [
            "Be a student under the age of 18.",
            "Form a circle of one to three adepts.",
            "Bring resolve, curiosity, and proper energy.",
        ],

        // Button text
        ctaText: "Seal the Vessel",

        // Status message shown at bottom
        status: "Ready for transmutation",
    },

    // ==========================================
    // PROCESS / HOW IT WORKS SECTION
    // ==========================================
    process: {
        title: "THE GREAT WORK",
        description: "All works follow the ancient order. Deviation leads thine to ash.",
        duration: "48 HOURS",

        steps: [
            {
                number: "01",
                title: "PREPARE THE VESSEL",
                description: "Form thy circle, choose thy tools, and inscribe thy intent. An unprepared vessel shatters under pressure.",
                icon: "vessel" as const,
            },
            {
                number: "02",
                title: "ADD THE CATALYST",
                description: "Introduce the idea that will drive the work. This is the spark that begins all change.",
                icon: "catalyst" as const,
            },
            {
                number: "03",
                title: "TRANSMUTATION",
                description: "Through trial, failure, and refinement, transform the raw into the refined.",
                icon: "transmutation" as const,
            },
            {
                number: "04",
                title: "REVEAL THE FORMULA",
                description: "Present the final result and record the method, that others may learn from the work.",
                icon: "formula" as const,
            },
        ],
    },


    // ==========================================
    // SCHEDULE SECTION
    // ==========================================
    schedule: {
        title: "THE ORDER OF THE WORK",

        days: [
            {
                day: "DAY I",
                date: "MARCH 21, 2026",
                title: "IGNITION",
                events: [
                    {time: "16:00", event: "Gates open and check-in begins"},
                    {time: "17:00", event: "Opening address and rules of the Work"},
                    {time: "17:30", event: "Team formation and vessel preparation"},
                    {time: "18:30", event: "The challenge is revealed"},
                    {time: "19:00", event: "Hacking begins"},
                    {time: "22:00", event: "First mentor rounds"},
                ],
            },
            {
                day: "DAY II",
                date: "MARCH 22, 2026",
                title: "TRANSMUTATION",
                events: [
                    {time: "00:00", event: "Midnight checkpoint"},
                    {time: "09:00", event: "Mentor hours resume"},
                    {time: "12:00", event: "Midday standup and progress review"},
                    {time: "18:00", event: "Submission guidelines released"},
                    {time: "22:00", event: "Final mentor rounds"},
                    {time: "23:59", event: "Final build lock-in"},
                ],
            },
            {
                day: "DAY III",
                date: "MARCH 23, 2026",
                title: "ASCENSION",
                events: [
                    {time: "09:00", event: "Project submissions close"},
                    {time: "10:00", event: "Project demos and judging"},
                    {time: "13:00", event: "Deliberation"},
                    {time: "14:00", event: "Closing ceremony and awards"},
                    {time: "15:00", event: "The Work is sealed"},
                ],
            },
        ],
    },

    // ==========================================
    // PRIZES SECTION
    // ==========================================
    prizes: {
        title: "THE ALCHEMISTS' REWARDS",
        description: "The most dedicated adepts shall receive honors, relics, and recognition for their mastery in the Great Work.",

        main: [
            {
                rank: "SECOND",
                title: "Alchemist’s Chalice",
                description: "For the team whose project demonstrates exceptional skill and creativity.",
                imageKey: "second" as const,
                perks: [
                    "Certificate of Achievement",
                    "Glass Shield of honor",
                    "Feature on Hack Club channels",
                ],
            },
            {
                rank: "FIRST",
                title: "Grand Philosopher’s Trophy",
                description: "Awarded to the team whose work achieves the pinnacle of transmutation and ingenuity.",
                imageKey: "grand" as const,
                perks: [
                    "Official Certificate of Mastery",
                    "Glass Shield of honor",
                    "Feature on Hack Club channels",
                ],
            },
            {
                rank: "THIRD",
                title: "Transmuter’s Mirror",
                description: "Honors a team whose work shows promise and dedication in the Great Work.",
                imageKey: "third" as const,
                perks: [
                    "Certificate of Merit",
                    "Glass Shield of honor",
                    "Feature on Hack Club channels",
                ],
            },
        ],
        extra: {
            title: "Best Student Choice",
            description: "Voted by the students for their favorite project.",
            value: "Certificate",
        },
    },

    // ==========================================
    // ARCHIVES / PREVIOUS HACKATHONS
    // ==========================================
    archives: {
        title: "THE CHRONICLES OF PAST WORKS",
        subtitle: "Previous Experiments and Achievements of the Adepts",

        experiments: [
            {
                year: "2024",
                title: "Wes:Hack 24",
                theme: "Astronomy",
                participants: 40,
                projects: 12,
                imageKey: "weshack24" as const, // Must match IMAGES.archives key
            },
            {
                year: "2025",
                title: "Scrapyard",
                theme: "Make Stupid Stuff Win Stupid Prizes",
                participants: 50,
                projects: 10,
                imageKey: "scrapyard" as const,
            },
            {
                year: "2025",
                title: "CheckPoint",
                theme: "Street Culture and Gamified Productivity",
                participants: 20,
                projects: 6,
                imageKey: "checkpoint" as const,
            },
        ],
    },

    // ==========================================
    // TEAM SECTION
    // ==========================================
    team: {
        title: "THE MASTERS OF THE CRAFT",
        subtitle: "The Adepts Who Guide the Great Work",

        members: [
            {
                name: "Layal Melhem",
                role: "Logistics Head",
                description: "Manages the preparation of spaces, materials, and the seamless unfolding of each experimental phase.",
                imageKey: "layal" as const,
            },
            {
                name: "Shahm Najeeb",
                role: "Founder and Event Lead",
                description: "Oversees the orchestration of the hackathon, ensuring the Great Work flows smoothly and all adepts are guided.",
                imageKey: "shahm" as const,
            },
            {
                name: "Mustafa Moemen",
                role: "Event Organiser Co-Lead",
                description: "Supports the planning and execution of the Great Work, guiding teams and managing challenges.",
                imageKey: "mustafa" as const,
            },
            {
                name: "Mishal Irfan",
                role: "Public Relations Lead",
                description: "Handles communications, outreach, and ensures the adepts’ achievements are known across the realms.",
                imageKey: "mishal" as const,
            },
        ],
    },


    // ==========================================
    // GALLERY PAGE
    // ==========================================
    gallery: {
        title: "THE VISUAL GRIMOIRE",
        subtitle: "A Chronicle of Past Experiments",
        description: "Behold the vessels, creations, and adepts who dared to transmute ideas into reality. Each image tells the story of a previous Work.",

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
        title: "COMMUNE WITH THE ADEPTS",
        subtitle: "Reach us for guidance, questions, or arcane inquiries",

        methods: [
            {type: "email", label: "Email", value: EXTERNAL_LINKS.contactEmail},
            {type: "location", label: "Location", value: "Wesgreen International School"},
            {type: "responseTime", label: "Response Time", value: "Within 48 hours"},
        ],
    },


    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        // Tagline below logo
        tagline: "Transmuting Ideas into Reality",

        // Copyright holder name
        copyright: "Hack Street",

        // Footer links
        links: [
            {label: "LINK_1_TEXT", href: "/YOUR_LINK_1_PATH"},
            {label: "LINK_2_TEXT", href: "/YOUR_LINK_2_PATH"},
            {label: "LINK_3_TEXT", href: "/YOUR_LINK_3_PATH"},
        ],
    },
} as const;
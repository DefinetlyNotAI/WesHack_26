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

        // Event Rules
        rules: {
            title: "Competition Rules",
            sections: [
                {
                    id: 1,
                    title: "Use of AI",
                    items: [
                        "AI tools are heavily restricted to encourage original work and creativity.",
                        "Junior teams may use AI code for up to 10 percent of the total work.",
                        "Senior teams cannot use any AI generated code.",
                        "AI agents or tools that generate code in the environment, such as GitHub Copilot or AI Web Builders, are not allowed at all and will result in disqualification.",
                        "The only exception is AI used strictly for debugging (and won't count as part of your percentage if you are a junior).",
                        "Exceeding these limits results in disqualification."
                    ]
                },
                {
                    id: 2,
                    title: "Boilerplate's",
                    items: [
                        "Boilerplate code or templates are allowed.",
                        "However Site Builders (such as WIX/Squarespace) aren't allowed at all and will result in disqualification.",
                        "Boilerplate's will not be judged, reviewed, or scored and won't affect you negatively.",
                        "All boilerplate must be clearly identified and referenced, failure to do so may result in disqualification."
                    ]
                },
                {
                    id: 3,
                    title: "Pre Event Work Limits",
                    items: [
                        "Senior teams Years 10 to 13 have up to 10 percent work allowed to be done before the event.",
                        "Junior teams Years 7 to 9 have up to 20 percent work allowed to be done before the event.",
                        "These limitations do not apply to documentation, presentations or planning.",
                        "Physical or external components that require preparation (such as 3D printing) do not count toward work percentage limits.",
                        "All additional work must be completed during the event or you may be at risk of disqualification."
                    ]
                },
                {
                    id: 4,
                    title: "Year Group Definitions",
                    items: [
                        "Juniors are Years 7 to 9",
                        "Seniors are Years 10 to 13"
                    ]
                },
            ]
        }
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
        rulesCtaText: "VIEW_RULES",
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
            "Ensure you have 20 dhs for the entrance offering.",
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
                date: "FEB 13, 2026",
                title: "IGNITION",
                events: [
                    {time: "08:00 - 08:20", event: "Registrations"},
                    {time: "08:20 - 08:45", event: "Opening ceremony"},
                    {time: "08:45 - 09:00", event: "Begin session 1: Icebreaker activity"},
                    {time: "09:00 - 11:00", event: "Session 1: Ideation and initial development"},
                    {time: "11:00 - 11:20", event: "Break"},
                    {time: "11:20 - 12:30", event: "Continuation of session 1"},
                    {time: "12:30 - 12:55", event: "Friday prayer break"},
                    {time: "13:00 - 14:15", event: "Session 2: Core development"},
                    {time: "14:15 - 14:45", event: "End of day mini challenge / activity / games"},
                    {time: "14:45 - 15:00", event: "Wrap up / announcements"},
                ],
            },
            {
                day: "DAY II",
                date: "FEB 14, 2026",
                title: "TRANSMUTATION",
                events: [
                    {time: "08:00 - 08:20", event: "Registrations / attendance"},
                    {time: "08:20 - 10:40", event: "Session 3"},
                    {time: "10:40 - 11:00", event: "Break"},
                    {time: "11:00 - 12:15", event: "Session 4 + Submission deadline"},
                    {time: "12:25 - 13:30", event: "Student showcase"},
                    {time: "13:30 - 14:00", event: "Judges' deliberation"},
                    {time: "14:00 - 15:00", event: "Closing ceremony + awards"},
                ],
            },
        ]
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
            value: "Medal & Certificate",
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
                title: "WesHack 24",
                theme: "Astronomy",
                participants: 40,
                projects: 12,
                imageKey: "weshack24" as const,
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
            {
                year: "2026",
                title: "WesHack 26",
                theme: "Digital Alchemy",
                participants: 75,
                projects: 30,
                imageKey: "weshack26" as const,
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
        subMembers: {
            leads: [
                {name: "Aizay Mushaq"},
                {name: "Ahmed Saad"}
            ],

            girls: [
                {name: "Shafana Shahriar"},
                {name: "Maryam Ali"},
                {name: "Lara Ameen"},
                {name: "Lara Elgharably"},
                {name: "Leen Elgharably"},
                {name: "Fatima Hatem"}
            ],

            boys: [
                {name: "Ayaan Islam"},
                {name: "Mohammad Bin Majid"},
                {name: "Issa Alamoody"},
                {name: "Fahmy Alamoody"},
            ],

            media: {
                lead: [
                    {name: "Aon Alaa"}
                ],
                members: [
                    {name: "Adham Hamdy"},
                    {name: "Omar Moamen"}
                ]
            },

            security: [
                {name: "Abdullah Mohanad"},
                {name: "Ali Ehsan"},
                {name: "Ghanim Muhammad"},
                {name: "Abdullah Bin Tarique"},
                {name: "Malak Mohamed"},
                {name: "Shahad Abdalla"},
                {name: "Zain Al Barbarawi"},
                {name: "Hana Elashry"}
            ]
        }
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
            {key: "img1", year: "2025", caption: "Group Photo at CheckPoint 2025"},
            {key: "img2", year: "2025", caption: "Definitely not scripted important talk"},
            {key: "img3", year: "2025", caption: "Project Presentation"},
            {key: "img4", year: "2025", caption: "DIFC Venue Overview"},
            {key: "img5", year: "2025", caption: "Hardworking on their projects"},
            {key: "img6", year: "2025", caption: "The legendary photo that went to space"},
            {key: "img7", year: "2025", caption: "Getting electrocuted for no reason"},
            {key: "img8", year: "2025", caption: "Cat drawings on the whiteboard from the goat mira!!"},
            {key: "img9", year: "2025", caption: "Hot Potato"},
            {key: "img10", year: "2025", caption: "Venue overview of Scrapyard 2025 at Sheera Hub!!"},
            {key: "img11", year: "2025", caption: "Working Scrappers"},
            {key: "img12", year: "2025", caption: "Do not remind me of the bees"},
            {key: "img13", year: "2025", caption: "EV3 Robotics based project"},
            {key: "img14", year: "2024", caption: "WES:HACK 2024 Team Photo"},
            {key: "img15", year: "2024", caption: "Hard at work during WES:HACK 2024"},
            {key: "img16", year: "2024", caption: "The entrance to WES:HACK 2024"},
        ] as Array<{ key: keyof typeof IMAGES.gallery; year: string; caption: string }>,

        // WesHack 2026 Gallery Images
        images26: [
            {key: "wh26-1", path: "/images/gallery/weshack-26/1.jpg"},
            {key: "wh26-2", path: "/images/gallery/weshack-26/2.jpg"},
            {key: "wh26-3", path: "/images/gallery/weshack-26/3.jpg"},
            {key: "wh26-4", path: "/images/gallery/weshack-26/4.jpg"},
            {key: "wh26-5", path: "/images/gallery/weshack-26/5.jpg"},
            {key: "wh26-6", path: "/images/gallery/weshack-26/6.jpg"},
            {key: "wh26-7", path: "/images/gallery/weshack-26/7.jpg"},
            {key: "wh26-8", path: "/images/gallery/weshack-26/8.jpg"},
            {key: "wh26-9", path: "/images/gallery/weshack-26/9.jpg"},
            {key: "wh26-10", path: "/images/gallery/weshack-26/10.jpg"}
        ] as Array<{ key: string; path: string }>,
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
            {type: "responseTime", label: "Response_Time", value: "Within 48 hours"},
        ],
    },


    // ==========================================
    // CREDITS
    // ==========================================
    credits: {
        leaders: [
            {name: "Shahm Najeeb", role: "Founder and Lead"},
            {name: "Layal Melhem", role: "Head of Logistics"},
            {name: "Mustafa Moamen", role: "Event Lead"},
            {name: "Mishal Irfan", role: "Head of PR"},
        ],
        teamMembers: [
            {name: "Aizay Mushaq", role: "Lead"},
            {name: "Ahmed Saad", role: "Lead"},
            {name: "Shafana Shahriar", role: "Team Member"},
            {name: "Maryam Ali", role: "Team Member"},
            {name: "Lara Ameen", role: "Team Member"},
            {name: "Lara Elgharably", role: "Team Member"},
            {name: "Leen Elgharably", role: "Team Member"},
            {name: "Fatima Hatem", role: "Team Member"},
            {name: "Ayaan Islam", role: "Team Member"},
            {name: "Mohammad Bin Majid", role: "Team Member"},
            {name: "Issa Alamoody", role: "Team Member"},
            {name: "Fahmy Alamoody", role: "Team Member"},
            {name: "Aon Alaa", role: "Media Lead"},
            {name: "Adham Hamdy", role: "Media Team"},
            {name: "Omar Moamen", role: "Media Team"},
            {name: "Abdullah Mohanad", role: "Security"},
            {name: "Ali Ehsan", role: "Security"},
            {name: "Ghanim Muhammad", role: "Security"},
            {name: "Abdullah Bin Tarique", role: "Security"},
            {name: "Malak Mohamed", role: "Security"},
            {name: "Shahad Abdalla", role: "Security"},
            {name: "Zain Al Barbarawi", role: "Security"},
            {name: "Hana Elashry", role: "Security"},
        ],
        winners: {
            juniorLeague: [
                {
                    place: "1st Place",
                    teamName: "Protocol Elixir",
                    members: ["Assem Hamdy"]
                },
                {
                    place: "2nd Place",
                    teamName: "HCK",
                    members: ["Ahmad Bhatti"]
                },
                {
                    place: "3rd Place",
                    teamName: "Hacker girlies",
                    members: ["Aleen Qusai Mahmood Alhaj", "Ayana Binti Faizan"]
                },
            ],
            seniorLeague: [
                {
                    place: "1st Place",
                    teamName: "EJH³",
                    members: ["Eyad Samara", "Hamza Mohamed Abdelmonem", "Jamal Almoody"]
                },
                {
                    place: "2nd Place",
                    teamName: "The vøid",
                    members: ["Aya Aladdin Salim"]
                },
                {
                    place: "3rd Place",
                    teamName: "Nbuddies",
                    members: ["Saim Salman", "Marcus Gabriel Solidum Brandis"]
                },
            ],
            studentVoted: {
                teamName: "Raman 2",
                members: ["Raman Rasul"]
            },
        },
        specialAwards: {
            bestTeamMembers: ["Adham Hamdy", "Mohammad Fahmy", "Fatima Hatem", "Lara Elgharbali"],
            bestSecurity: ["Malak Mohammad"],
        },
        participants: [
            "Aleen Alhaj",
            "Ayat Ansari",
            "Fizzah Ali",
            "Rafeef Taha",
            "Tinomuda Togara",
            "Zaid Khadra",
            "Abdulrahman Almasoud",
            "Baraa Hamzeh",
            "Gulchekhra",
            "Hamza Hussein",
            "Jalal Hikmat",
            "Jana Mohamad",
            "Mahmoud Deirani",
            "Sami Ghazi",
            "Aeman Fatima",
            "Ahmad Bhatti",
            "Ahmed Ibrahim",
            "Mohamed Alkhatab",
            "Areesha Asadullah",
            "Asbah Khan",
            "Assem Hamdy",
            "Aya Salim",
            "Ayana Faizan",
            "Ayten Toeima",
            "Bassam Barjas",
            "Batool Tamer",
            "Eyad Samara",
            "Farah Eid",
            "Fares Reda",
            "Faysal Eid",
            "Hamza Alwahsh",
            "Hareem Sharjeel",
            "Hatem Albanna",
            "Jamal Al-Amoody",
            "Janah Thunebat",
            "Kaitlyn Monteath",
            "Kamilia Imtiaz",
            "Karma Barakat",
            "Kenzy Elkhatib",
            "Kim Erica",
            "Lily Hazem",
            "Malik Ali",
            "Marcus Brandis",
            "Maria Kizhakkuden",
            "Masarrah Alamin",
            "Mohammad Dureidi",
            "Mohammed Sohaib",
            "Mohammed Zaydan",
            "Moustafa Tamer",
            "Muhammad Kamran",
            "Muhammad Azlan",
            "Muhammad Ismail",
            "Muhammad Salman",
            "Muhammad Tawqeer",
            "Noirita Zaman",
            "Omar Abdelghany",
            "Omar Elmeslmany",
            "Raman Rasul",
            "Sadja Rasula",
            "Saeed",
            "Saif Alshamsi",
            "Saleem Akkad",
            "Somaia Saif",
            "Sultan Mohammed",
            "Syeda Noor",
            "Syeda Rahman",
            "Yafet Admassu",
            "Yara Hassan",
            "Yaseer Ahmed",
            "Zahra Khan",
            "Zain Saeed",
            "Zain Elgharably",
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
    },
} as const;
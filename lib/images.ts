// ============================================
// IMAGE PATHS - Only actual photos/unique content
// Backgrounds, decorative elements, and icons are handled via CSS/JS/icon libraries
// ============================================

import {ImageAltMap, ImageMap} from "@/types";

export const IMAGES: ImageMap = {
    // Prize images (not actual prize images, but flavor images)
    prizes: {
        grand: "/images/prizes/philosophers-stone.jpg",
        second: "/images/prizes/elixir-vitae.jpg",
        third: "/images/prizes/transmuters-mirror.png",
    },
    // Team member photos
    team: {
        layal: "/images/team/layal.jpg",
        mishal: "/images/team/mishal.jpg",
        mustafa: "/images/team/mustafa.jpg",
        shahm: "/images/team/shahm.jpg",
    },
    // Previous hackathon cover images
    archives: {
        weshack24: "/images/archives/weshack-24.jpg",
        scrapyard: "/images/archives/scrapyard.jpg",
        checkpoint: "/images/archives/checkpoint.jpg",
        weshack26: "/images/archives/weshack-26.jpg",
    },
    // Gallery images
    gallery: {
        // CheckPoint 2025 Gallery
        img1: "/images/gallery/checkpoint/1.jpg",
        img2: "/images/gallery/checkpoint/2.jpg",
        img3: "/images/gallery/checkpoint/3.jpg",
        img4: "/images/gallery/checkpoint/4.jpg",
        img5: "/images/gallery/checkpoint/5.jpg",
        // Scrapyard 2025 Gallery
        img6: "/images/gallery/scrapyard/1.jpg",
        img7: "/images/gallery/scrapyard/2.jpg",
        img8: "/images/gallery/scrapyard/3.jpg",
        img9: "/images/gallery/scrapyard/4.jpg",
        img10: "/images/gallery/scrapyard/5.jpg",
        img11: "/images/gallery/scrapyard/6.jpg",
        img12: "/images/gallery/scrapyard/7.jpg",
        img13: "/images/gallery/scrapyard/8.jpg",
        // WES:HACK 2024 Gallery
        img14: "/images/gallery/weshack-24/1.jpg",
        img15: "/images/gallery/weshack-24/2.jpg",
        img16: "/images/gallery/weshack-24/3.jpg",
    },
} as const;

// ============================================
// IMAGE ALT TEXT - For accessibility
// ============================================
export const IMAGE_ALT: ImageAltMap = {
    prizes: {
        grand: "Philosopher's Stone grand prize",
        second: "Elixir of Vitae second prize",
        third: "Universal Solvent third prize",
        special: "Azoth special recognition award",
    },
    team: {
        shahm: "Team alchemist portrait",
        layal: "Team alchemist portrait",
        mishal: "Team alchemist portrait",
        mustafa: "Team alchemist portrait",
    },
    archives: {
        weshack24: "WesHack 2024 experiment documentation",
        scrapyard: "Scrapyard 2025 experiment documentation",
        checkpoint: "CheckPoint 2025 experiment documentation",
        weshack26: "WesHack 2026 experiment documentation",
    },
    gallery: {
        img1: "Hackathon picture from CheckPoint",
        img2: "Hackathon picture from CheckPoint",
        img3: "Hackathon picture from CheckPoint",
        img4: "Hackathon picture from CheckPoint",
        img5: "Hackathon picture from CheckPoint",
        img6: "Hackathon picture from Scrapyard",
        img7: "Hackathon picture from Scrapyard",
        img8: "Hackathon picture from Scrapyard",
        img9: "Hackathon picture from Scrapyard",
        img10: "Hackathon picture from Scrapyard",
        img11: "Hackathon picture from Scrapyard",
        img12: "Hackathon picture from Scrapyard",
        img13: "Hackathon picture from Scrapyard",
        img14: "Hackathon picture from WesHack 2024",
        img15: "Hackathon picture from WesHack 2024",
        img16: "Hackathon picture from WesHack 2024",
    },
} as const;

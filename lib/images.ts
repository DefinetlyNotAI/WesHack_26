// ============================================
// IMAGE PATHS - Only actual photos/unique content
// Backgrounds, decorative elements, and icons are handled via CSS/JS/icon libraries
// ============================================

import {ImageAltMap, ImageMap} from "@/types";

export const IMAGES: ImageMap = {
    prizes: {
        grand: "/images/prizes/philosophers-stone.jpg",
        second: "/images/prizes/elixir-vitae.jpg",
        third: "/images/prizes/alkahest.jpg",
        special: "/images/prizes/azoth-award.jpg",
    },
    // Team member photos - KEEP (actual photos)
    team: {
        layal: "/images/team/layal.jpg",
        mishal: "/images/team/mishal.jpg",
        mustafa: "/images/team/mustafa.jpg",
        shahm: "/images/team/shahm.jpg",
    },
    // Previous hackathon cover images - KEEP (actual event photos)
    archives: {
        checkpoint: "/images/archives/checkpoint.jpg",
        scrapyard: "/images/archives/scrapyard.jpg",
        weshack24: "/images/archives/weshack-24.jpg",
    },
    // Gallery images - KEEP (actual event photos)
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
} as const;

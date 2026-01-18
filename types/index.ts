import {ReactNode} from "react";
import {StaticImageData} from "next/image";

export interface Particle {
    id: number;
    x: number;
    char: string;
    delay: number;
    duration: number;
}

export interface ParchmentButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    external?: boolean;
}

// Shared types

export interface LinkItem {
    href: string;
    label: string;
    external?: boolean;
    isLink?: boolean; // sometimes used to indicate Link vs anchor
}

export interface SocialLinks {
    discord: string;
    github: string;

    [key: string]: string;
}

export interface ExternalLinks {
    registrationForm?: string;
    contactEmail?: string;
    social: SocialLinks;
    galleryPage: string;

    [key: string]: any;
}

export type ImageRef = string | StaticImageData; // path or StaticImageData if using next/image imports

export interface ImageMap {
    prizes: Record<string, ImageRef>;
    team: Record<string, ImageRef>;
    archives: Record<string, ImageRef>;
    gallery: Record<string, ImageRef>;
}

export type ImageAltMap = {
    prizes: Record<string, string>;
    team: Record<string, string>;
    archives: Record<string, string>;
    gallery: Record<string, string>;
};

export interface GalleryImage {
    key: string;
    year: string;
    caption?: string;
}

export interface TeamMember {
    name: string;
    role?: string;
    description?: string;
    imageKey: string; // key into IMAGES.team
}

export interface PrizeItem {
    rank?: string;
    title: string;
    description?: string;
    imageKey: string;
    perks: string[];
}

export interface ArchiveItem {
    year: string;
    title: string;
    theme?: string;
    participants?: number;
    projects?: number;
    imageKey: string;
}

export interface ScheduleEvent {
    time?: string;
    event: string;
}

export interface ScheduleDay {
    day?: string;
    date?: string;
    title?: string;
    events: ScheduleEvent[];
}

// Partial site data shapes; align with actual SITE_DATA which provides these fields
export interface EventData {
    name: string;
    tagline: string;
    year: number;
    dates: { start: string; end: string };
    location: string;
    hexCode: string;
}

export interface HeroData {
    subtitle: string;
    description: string[];
    ctaText: string;
}

export interface RegistrationData {
    title: string;
    subtitle: string;
    requirements: string[];
    ctaText: string;
    status: string;
}

export interface ProcessStep {
    number?: string;
    title?: string;
    description?: string;
    icon: string;
}

export interface ProcessData {
    title: string;
    description: string;
    duration: string;
    steps: ProcessStep[];
}

export interface ScheduleData {
    title: string;
    days: ScheduleDay[];
}

export interface PrizesData {
    title: string;
    description: string;
    main: PrizeItem[];
    extra: { title: string; description: string; value: string };
}

export interface ArchivesData {
    title: string;
    subtitle: string;
    experiments: ArchiveItem[];
}

export interface TeamData {
    title: string;
    subtitle: string;
    members: TeamMember[];
}

export interface GalleryData {
    title: string;
    subtitle: string;
    description: string;
    images: GalleryImage[];
}

export interface ContactMethod {
    type?: string;
    label?: string;
    value?: string;
}

export interface ContactData {
    title: string;
    subtitle: string;
    methods: ContactMethod[];
}

export interface FooterData {
    tagline: string;
    copyright: string;
    links: LinkItem[];
}

export interface SiteData {
    event: EventData;
    hero: HeroData;
    registration: RegistrationData;
    process: ProcessData;
    schedule: ScheduleData;
    prizes: PrizesData;
    archives: ArchivesData;
    team: TeamData;
    gallery: GalleryData;
    contact: ContactData;
    footer: FooterData;
}

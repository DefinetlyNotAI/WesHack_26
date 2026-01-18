import {HeroSection} from "@/components/sections/hero-section";
import {RegisterSection} from "@/components/sections/register-section";
import {ProcessSection} from "@/components/sections/process-section";
import {ScheduleSection} from "@/components/sections/schedule-section";
import {PrizesSection} from "@/components/sections/prizes-section";
import {ArchivesSection} from "@/components/sections/archives-section";
import {TeamSection} from "@/components/sections/team-section";
import {ContactSection} from "@/components/sections/contact-section";
import {Footer} from "@/components/sections/footer";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <RegisterSection/>
            <ProcessSection/>
            <ScheduleSection/>
            <PrizesSection/>
            <ArchivesSection/>
            <TeamSection/>
            <ContactSection/>
            <Footer/>
        </main>
    );
}

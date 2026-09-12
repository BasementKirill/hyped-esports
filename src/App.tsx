import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { TeamsSection } from "@/components/TeamsSection";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SponsorMarquee />
        <TeamsSection />
        <AboutSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}

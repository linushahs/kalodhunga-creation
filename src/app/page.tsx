"use client";

import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import Footer from "@/components/layout/Footer";
import LandingPageV2 from "@/components/new/LandingPageV2";
import NewServices from "@/components/new/NewServices";

export default function Home() {
  return (
    <main>
      <LandingPageV2 />
      <Introduction />
      <NewServices />
      <OurProjects />
      <WorkingProcess />
      <Contact />
      <OurTeam />
      <Testimonials />
      <Footer />
    </main>
  );
}

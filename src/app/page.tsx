"use client";

import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import Footer from "@/components/layout/Footer";
import NewLandingPage from "@/components/new/NewLandingPage";
import NewServices from "@/components/new/NewServices";

export default function Home() {
  return (
    <main>
      <NewLandingPage />
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

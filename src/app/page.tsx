import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import Introduction from "@/components/Introduction";
import LandingPage from "@/components/LandingPage";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import NewServices from "@/components/new/NewServices";
import NewLandingPage from "@/components/new/NewLandingPage";

export default function Home() {
  return (
    <main className="">
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

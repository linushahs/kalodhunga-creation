import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import LandingPage from "@/components/LandingPage";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <Introduction />
      <OurServices />
      <OurProjects />
      <WorkingProcess />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}

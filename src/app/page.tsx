import Introduction from "@/components/Introduction";
import LandingPage from "@/components/LandingPage";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <Introduction />
      <OurServices />
      <OurProjects />
    </main>
  );
}

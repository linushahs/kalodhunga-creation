import Introduction from "@/components/Introduction";
import LandingPage from "@/components/LandingPage";
import OurServices from "@/components/OurServices";
import OurWorks from "@/components/OurWorks";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <Introduction />
      <OurServices />
      <OurWorks />
    </main>
  );
}

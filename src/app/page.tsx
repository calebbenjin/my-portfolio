import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ProjectSections from "@/components/ProjectSections";
import UserProfile from "@/components/UserProfile";
import WorkTogetherSection from "@/components/WorkTogetherSection";

export default function Home() {
  return (
    <main className="mx-auto lg:w-6/12 w-11/12 pt-20">
      <UserProfile />
      <IntroSection />
      <ProjectSections />
      <WorkTogetherSection />
      <Footer />
    </main>
  );
}

import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import Nav from "@/components/Nav";
import PageLoader from "@/components/PageLoader";
import ProjectSections from "@/components/ProjectSections";
import UserProfile from "@/components/UserProfile";
import WorkTogetherSection from "@/components/WorkTogetherSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Nav />
      <main className="mx-auto lg:w-[52%] w-11/12 pt-24 pb-4">
        <UserProfile />
        <IntroSection />
        <ProjectSections />
        <WorkTogetherSection />
        <Footer />
      </main>
    </>
  );
}

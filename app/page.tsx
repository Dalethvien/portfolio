import Image from "next/image";
import Header from "../components/layout/header";
import About from "./AboutMe";
import ProjectsPage from "../components/ui/projectsPage";
import Contact from "@/components/ui/contact";
import Footer from "../components/layout/footer"
import TimeLine from "@/components/ui/timeline";
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="md:px-16 px-8 mt-10 md:mx-[10%] mx-0">
        <About />
        <TimeLine />
        <ProjectsPage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

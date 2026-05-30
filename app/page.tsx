import Image from "next/image";
import Header from "../components/layout/header";
import About from "./AboutMe";
import ProjectsPage from "../components/ui/projectsPage";
import Contact from "@/components/ui/contact";
export default function Home() {
  return (
    <div className="px-16">
      <Header />
      <main className="mt-10 mx-[10%]">
        <About />
        <ProjectsPage />
        <Contact />
      </main>
    </div>
  );
}

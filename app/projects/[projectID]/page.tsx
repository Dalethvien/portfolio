import Image from "next/image";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import {projects} from "../../../lib/projects"
import { notFound } from "next/navigation";
export default async function Home({ params }: {params : Promise<{projectID: string}>}) { 
  const {projectID} = await params;
  const project = projects.find(p=>p.projectID==projectID);

  if(!project){
    notFound();
  }
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="md:px-16 px-8 md:mx-[20%] mt-10 mb-20 flex flex-col justify-center gap-y-10">
        <h1 className="md:text-4xl text-3xl">{project.title}</h1>
        <div className="relative w-full max-h-100 aspect-4/3">
          <Image src={project.image} alt={project.title} fill className="object-contain"/>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl">Description :</h2>
          <div className="md:text-lg/relaxed text-based/7">
            {project.description}
          </div>
        </div>
        
        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl">Aspects techniques :</h2>
          <div className="md:text-lg/relaxed text-based/7">
            {project.techChoices}
          </div>
        </div>
        
        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl">Retour personnel</h2>
          <div className="md:text-lg/relaxed text-based/7">
            {project.personalReview}
          </div>
        </div>
        
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl">Liens</h3>
          <div>
            <ul>
              {project.links.map(link =>
                  link.link.endsWith(".pdf") ? (
                    <li key={link.name} className="flex text-lg text-secondary">
                      <a href={link.link} target="_blank">{link.name}</a>
                    </li>
                  ) : (
                    <li key={link.name} className="flex text-lg text-secondary">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

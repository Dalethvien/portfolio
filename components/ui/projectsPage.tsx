import ProjectCard from "./projectCard";
import { projects } from "../../lib/projects";


export default function ProjectsPage(){
    return (
        <div id="Projects" className="md:grid grid-cols-3 gap-5 scroll-mt-16 py-16">
            {projects.map(project =>(
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    )
}
import Image from "next/image"
import Link from "next/link"

type Project = {
    projectID: string,
    title: string,
    status: string,
    image: string,
    languages: string[],
    description: string,
    techChoices: string,
    personalReview: string,
    links: {name:string, link:string}[]
}

export default function ProjectCard(project : Project){
    return(
        <div className="bg-card text-card-foreground p-5 h-fit rounded-md shadow-sm/50 shadow-border border-ring border my-5 md:my-0">
            <div className="relative md:h-48 h-32 w-full">
                <Image src={project.image} alt={project.title} fill className="object-scale-down"/>
            </div>
            <h2><Link key={project.projectID} href={`/projects/${project.projectID}`} className="internalLinks">{project.title}</Link></h2>
            <p className="text-xs">{project.status}</p>
            <div className="flex gap-2 text-accent my-4">
                {project.languages.map(language =>(
                    <div key={language}>{language}</div>
                ))}
            </div>
        </div>
    )
}

export type {Project};
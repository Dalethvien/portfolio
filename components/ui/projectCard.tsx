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
        <div className="bg-gray-800 p-5 h-fit rounded-2xl">
            <div className="relative h-48 w-full">
                <Image src={project.image} alt={project.title} fill className="object-scale-down"/>
            </div>
            <h2><Link key={project.projectID} {...project} href={`/projects/${project.projectID}`}>{project.title}</Link></h2>
            <p className="text-xs">{project.status}</p>
            <div className="flex gap-2 text-blue-400 my-4">
                {project.languages.map(language =>(
                    <div>{language}</div>
                ))}
            </div>
        </div>
    )
}

export type {Project};
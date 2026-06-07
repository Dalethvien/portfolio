import SkillBlock from "../components/ui/skillBlock"
import { Skills } from "../lib/skills"


function SkillPage(){
    return(
        <div className="md:grid md:grid-cols-3 md:gap-10">
            {Skills.map(skill =>(
                <SkillBlock key={skill.title} {...skill}/>
            ))}
        </div>
    )
}






export default function About(){
    return(
    <div id="AboutMe" className="flex flex-col gap-10 min-h-screen scroll-mt-16">
        <div className="flex flex-col gap-6 md:max-w-1/2">
            <h1 className="font-bold text-2xl">A propos de moi</h1>
            <p className="md:text-lg/9 text-base/7">
                Etudiant en première année à Telecom Saint-Etienne, j'ai d'abord effectué une classe préparatoire au lycée Champollion de Grenoble.
                Je souhaite maintenant me spécialiser en informatique, soit dans le développement (logiciel, site web etc) soit dans les domaines touchants à l'IA et aux data sciences.
                Le numérique fait aujourd'hui parti intégrante de notre vie et peut être source de nombreuses améliorations.
            </p>

            <p className="md:text-lg/9 text-base/7">
                En dehors de l'informatique mes deux grandes passions sont les jeux-vidéos et les rubik's cube ! Je joue à League of Legends depuis 2017,
                j'aime aussi Valorant ou Teamfight Tactics. Enfin j'ai pour ambition de collecter les 202 fraises de Celeste !<br />
                Concernant le rubik's cube cela fait plus de 10 ans que j'ai appris à les résoudre et que je m'entraine. Ma spécialité est la résolution à l'aveugle,
                principalement les rubik's cubes 4x4 (2 records de France en 2023, avec un record à 1min46.47s et un titre de champion de France la même année).
            </p>

            <p className="md:text-lg/9 text-base/7">
                Enfin je suis un très grand fan de chat, et de café ! 
            </p>
        </div>
        <div>
            <SkillPage />
        </div>
        </div>
    )
}
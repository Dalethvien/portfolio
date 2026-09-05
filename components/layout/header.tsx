import { FaGithub } from "react-icons/fa";

export default function Header(){
    return(
        <header className="md:px-16 flex flex-row items-center md:justify-between justify-evenly p-4 sticky top-0 w-full overflow-hidden z-1 scroll-mt-16 bg-background text-primary">
            <div>
                <a href="/"><div className="text-foreground md:text-2xl">
                    <h1>ECHE <br /> Tiago</h1>
                    </div>
                </a>
            </div>
            <nav >
                <ul className="flex flex-row md:gap-4 gap-2 text-sm md:text-base">
                    <li>
                        <a href="/#AboutMe" className="text-primary">A propos</a>
                    </li>
                    <li>
                        <a href="/#Parcours">Parcours</a>
                    </li>
                    <li>
                        <a href="/#Projects" className="text-primary">Projets</a>
                    </li>
                    <li>
                        <a href="/#Contact" className="text-primary">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
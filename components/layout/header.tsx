import { FaGithub } from "react-icons/fa";

export default function Header(){
    return(
        <header className="flex flex-row items-center justify-between p-4 sticky top-0 w-full overflow-hidden z-1 scroll-mt-16 bg-background text-primary">
            <div>
                <a href="/"><div className="text-foreground text-2xl">
                    ECHE Tiago
                    </div>
                </a>
            </div>
            <nav >
                <ul className="flex flex-row gap-4">
                    <li>
                        <a href="/#AboutMe" className="text-primary">A propos</a>
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
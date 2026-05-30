

export default function Header(){
    return(
        <header id="Home" className="flex flex-row items-center justify-between p-4 sticky top-0 w-full overflow-hidden z-1 scroll-mt-16 bg-gray-900">
            <div>
                <a href="/">ECHE Tiago</a>
            </div>
            <nav className="">
                <ul className="flex flex-row gap-4">
                    <li>
                        <a href="/#Home">Accueil</a>
                    </li>
                    <li>
                        <a href="/#AboutMe">A propos</a>
                    </li>
                    <li>
                        <a href="/#Projects">Projets</a>
                    </li>
                    <li>
                        <a href="/#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
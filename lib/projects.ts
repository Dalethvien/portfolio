import {Project} from "@/components/ui/projectCard"
import { link } from "fs"

export const projects: Project[] = [
    {
        projectID: "bot-wca",
        title: "Bot WCA sur Discord",
        status: "Abandonné",
        image : "/wca_logo.svg",
        languages: ["javascript"],
        description : `En 2022 je me suis lancé dans l'idée de coder un bot Discord en lien avec le rubik's cube  : 
        L'idée était de récupérer des informations sur le site officiel de la wca (World Cube Association) et de les afficher aux utilisateurs directement sur Discord. \n
        Lorsqu'il était en fonctionnement le bot permettait d'accéder aux records personnels des compétiteurs, aux records régionaux (pays, continent, monde) et de récupérer les diffrents
        classements.`,
        techChoices : `J'ai développé le bot entiérement en javascript. Plusieurs options ont été testé pour récupérer les données : 
        utilisation d'une API au départ (trop peu complète malheureusement), utilisation de regex quelque peu laborieuse. Finalement ce qui a le mieux fonctionné
        a été de chercher les informations via les balises html (css selector)`,
        personalReview : `J'ai malheureusement fini par abandonné le projet : J'ai commencé sans aucune bases en javascript, et le projet était un peu
        ambitieux. Je n'avais pas de plan précis pour ce projet, ainsi beaucoup de fonctionnalité se sont rajoutés au fur et à mesure, demandant des adaptations du code
        existant. Le projet était au final plus du bricolage qu'autre chose et avec une complexité qui augmentait pour gérer le projet. \n
        Je souhaitrais pouvoir reprendre le projet avec une approche beaucoup plus structurée. Aussi pouvoir se servir d'une API pour récupérer les données rendrait le projet bien plus
        simple si les données sont correctement structurées.`,
        links: [{name: "repository", link:"https://github.com/Dalethvien/bot-WCA"}],
    },
    {
        projectID: "TIPE",
        title: "TIPE sur le rubik's cube 2x2",
        status: "terminé",
        image: "/2x2.png",
        languages: ["python"],
        description : `Dans le cadre de mon TIPE (projet de fin de prépa avec sujet libre sur un thème donné), j'ai décidé de m'intéresser au rubik's cube (pour changer !).
        Voulant méler informatique et informatique je me suis attaqué à un problème qui a été résolu en 2014 via des astuces mathématiques et une solution informatique : 
        La recherche du "nombre de Dieu", qui correspond à la borne supérieur garantissant de pouvoir résoudre n'importe quel état du puzzle.
        En 2014 une équipe de chercheur a prouvé qu'un rubik's cube classique (3x3) pouvait toujours être résolu en au plus 20 mouvements (pour une métrique donnée). \n
        Je me suis donc penché sur leur preuve mélant théorie des groupes et parcours d'arbre avec l'algorithme A* et j'ai reproduit le fonctionnement pour le rubik's cube 2x2 
        pour des raisons de capacités techniques`,
        techChoices : `Le projet a entiérement était codé en python, j'ai représenté un rubik's cube via une classe pour me familiariser un peu à la programation orienté objet.
        En guise d'heuristique pour l'algorithme A* j'ai généré une table donnant la distance minimale pour atteindre un certains sous-groupe (lorsque toutes les pièces sont orientées) 
        à partir d'une orientation donnée`,
        personalReview : `Je suis plutôt fier de ce projet : les deux aspects étaient complémentaire avec de la théorie des groupes pour simplifier le problème : 
        Montrer que chaque position de chaque classe suivant un groupe peut arriver dans le sous-groupe en moins de k mouvements suffit. Et résoudre ensuite ce problème via un parcours
        d'arbre amélioré grâce à une heuristique (A*) pour chaque classe.`,
        links: [{name:"repository", link:"https://github.com/Dalethvien/TIPE-rubik-s-cube-2x2"}],
    },
    {
        projectID: "wikizgliboulou",
        title: "Projet de site web : wikizgliboulou",
        status: "terminé",
        image: "/menta2.png",
        languages: ["HTML", "CSS", "javascript"],
        description : `Ce site contient vous propose de découvrir l'univers (fictif) de la série Zgliboulou grâce à une boutique de produits dérivés et une partie "wiki" pour découvrir
        l'histoire, les personnages etc. Ce projet a été réalisé dans le cadre de mes cours avec mon binôme. Le but était de proposer un site web aussi complet que possible
        et d'être le mieux référencé possible (concours de référencement dans la promo) à partir du mot clef zgliboulou.`,
        techChoices : `Le projet a été fait de façon basique en HTML, CSS et javascript. On a préféré se passer de framework ou CMS, à la fois par manque de connaissances sur le sujet,
        on préférait renforcer nos connaissances et se concentrer sur le référencement, et à la fois car ce n'était pas forcémenet nécessaire pour un petit projet tel que celui-ci.
        On a essayé d'avoir un site web aussi dynamique que possible avec une version ordinateurs et une version téléphone, grâce à un script javascript gérant l'ajout de 
        balises selon l'appareil et un css différent selon la taille d'écran. \n
        Pour le référencement on a également validé notre code HTML et CSS via des sites de vérifications de sorte à avoir un code "propre". 
        On a également un sitemap pour google search console et on a régulièrement demandé l'indexation de nos nouvelles pages.
        Enfin on a utilisé un fichier .htaccess afin d'avoir des url plus jolies`,
        personalReview : `Le projet nous a permis de nous familiariser un peu à la gestion de projet en groupe en utilisan git. Nous nous sommes ensuite répartie les tâches
        entre les deux parties du site (chacun a développé son idée) mais aussi entre référencement et pages globales, aspect visuel et script javascript etc. \n
        Si on n'a pas encore le résultat final car le projet est récent et pas encore noté, la partie référencement a néanmoins était un succès car nous sommes arrivées 3ème (parmis 
        quelques 120 étudiant de première année d'école d'ingénieur et des bachelors) ! \n
        vous pouvez visiter le site ici si vous le souhaitez`,
        links: [
            {name: "site", link:"https://wikizgliboulou.alwaysdata.net/"}
        ],
    }
]
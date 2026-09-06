import {Project} from "@/components/ui/projectCard"
import { link } from "fs"

export const projects: Project[] = [
    {
        projectID: "bot-wca",
        title: "Bot WCA sur Discord",
        status: "abandonné",
        image : "/wca_logo.svg",
        languages: ["javascript"],
        description : `En 2022 je me suis lancé dans l'idée de coder un bot Discord en lien avec le rubik's cube  : 
        L'idée était de récupérer des informations sur le site officiel de la wca (World Cube Association) et de les afficher aux utilisateurs directement sur Discord. \n
        Lorsqu'il était en fonctionnement le bot permettait d'accéder aux records personnels des compétiteurs, aux records régionaux (pays, continent, monde) et de récupérer les diffrents
        classements.`,
        techChoices : `J'ai développé le bot entiérement en javascript. Plusieurs options ont été testées pour récupérer les données : 
        utilisation d'une API au départ (trop peu complète malheureusement), utilisation de regex quelque peu laborieuse. Finalement ce qui a le mieux fonctionné
        a été de chercher les informations via les balises html (css selector)`,
        personalReview : `J'ai malheureusement fini par abandonné le projet : J'ai commencé sans aucune bases en javascript, et le projet était un peu
        ambitieux. Je n'avais pas de plan précis pour ce projet, ainsi beaucoup de fonctionnalitées se sont rajoutées au fur et à mesure, demandant des adaptations du code
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
        Voulant méler mathématiques et informatique je me suis attaqué à un problème qui a été résolu en 2014 : 
        La recherche du "nombre de Dieu", qui correspond à la borne supérieur garantissant de pouvoir résoudre n'importe quel état du puzzle.
        En 2014 une équipe de chercheur a prouvé qu'un rubik's cube classique (3x3) pouvait toujours être résolu en au plus 20 mouvements (pour une métrique donnée). \n
        Je me suis donc penché sur leur preuve mélant théorie des groupes et parcours d'arbre avec l'algorithme A* et j'ai reproduit le fonctionnement pour le rubik's cube 2x2 
        pour des raisons de capacités techniques`,
        techChoices : `Le projet a entiérement était codé en python, j'ai représenté un rubik's cube via une classe pour me familiariser un peu à la programation orienté objet.
        En guise d'heuristique pour l'algorithme A* j'ai généré une table donnant la distance minimale pour atteindre un certains sous-groupe (lorsque toutes les pièces sont orientées) 
        à partir d'une orientation donnée`,
        personalReview : `Je suis plutôt fier de ce projet : les deux aspects étaient complémentaires avec de la théorie des groupes pour simplifier le problème : 
        Montrer que chaque position de chaque classe suivant un groupe peut arriver dans le sous-groupe en moins de k mouvements suffit. Et résoudre ensuite ce problème via un parcours
        d'arbre amélioré grâce à une heuristique (A*) pour chaque classe.`,
        links: [{name:"repository", link:"https://github.com/Dalethvien/TIPE-rubik-s-cube-2x2"}, {name:"presentation", link:"/TIPE.pdf"}],
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
        On a essayé d'avoir un site web aussi dynamique que possible avec une version ordinateur et une version téléphone, grâce à un script javascript gérant l'ajout de 
        balises selon l'appareil et un css différent selon la taille d'écran. \n
        Pour le référencement on a également validé notre code HTML et CSS via des sites de vérifications de sorte à avoir un code "propre". 
        On a également utilisé un sitemap pour google search console et on a régulièrement demandé l'indexation de nos nouvelles pages.
        Enfin on a utilisé un fichier .htaccess afin d'avoir des url plus jolies`,
        personalReview : `Le projet nous a permis de nous familiariser un peu à la gestion de projet en groupe en utilisan git. Nous nous sommes ensuite répartie les tâches
        entre les deux parties du site (chacun a développé son idée) mais aussi entre référencement et pages globales, aspect visuel et script javascript etc. \n
        Si on n'a pas encore le résultat final car le projet est récent et pas encore noté, la partie référencement a néanmoins était un succès car nous sommes arrivées 3ème (parmis 
        quelques 120 étudiant de première année d'école d'ingénieur et des bachelors) ! \n
        vous pouvez visiter le site ici si vous le souhaitez`,
        links: [
            {name: "site", link:"https://wikizgliboulou.alwaysdata.net/"}, {name:"repository", link:"https://github.com/Dalethvien/wikizgliboulou"}
        ],
    },
    {
        projectID: "Internship-Online-LASSO",
        title: "Stage de recherche - Régression LASSO en ligne",
        status: "terminé",
        image: "/laboHubertCurien.jpeg",
        languages: ["python"],
        description: `J'ai eu l'occasion d'effectuer un stage de rechercher au sein de l'équipe machine learning du laboratoir Hubert Curien de Saint-Etienne pour mon 
        stage opérationnel, pour terminer ma première année d'école d'ingénieur à Telecom Saint-Etienne. Accompagner par Jordan Patracone et Ben Gao 
        j'ai pu m'intéresser à la problématique de la régression LASSO dans un contexte d'apprentissage en ligne. Nous avons explorer 3 idées principales : 
        L'apprentissage conforme, la théorie des core-sets et l'échantillonage basé sur l'incertitude. Nous avons pu comparer ces méthodes dans différents contexte, 
        des données à queues faibles jusqu'à des données à queue lourde.`,
        techChoices:  `Python est un langage de choix lorsqu'on s'intéresse au machine learning et aux data sciences en général, notamment grâce à ses bibliothèques telles que 
        numpy, scipy ou pytorch (non utilisée ici). Le code se présente en deux fichiers principaux : un pour l'algorithme d'apprentissage et ses fonctions 
        auxilliaires et un deuxième pour la génération des données et leur analyse en utilisant matplotlib pour regarder les caractéristiques qui nous intéressent.`,
        personalReview: `Ce projet m'a permis de mettre un pied dans le domaine du machine learning et le monde de la recherche académique. J'ai eu la chance d'être encadrer par l'un
        de me professeur, Jordan Patracone, qui m'a beaucoup fait progresser. J'ai pu profiter d'une certaine autonomie, tout en étant guidé le long du projet. J'ai pu participer
        aux discussions sur l'avancée du projet et les directions à prendre et explorer. J'ai été particulièrement content de pouvoir toucher aux différentes parties du processus de recherche : 
        lectures d'articles scientifiques, explorations théoriques et pratiques pour mettre en place un/des modèle.s, analyse théorique des solutions mises en places (même si on n'a pas pu
        aller au bout durant mon stage) et rédaction de rapport tout au long de l'avancée. Cela a aussi confirmer mon attrait pour les data sciences, le machine learning et de de manière générale 
        tout ce qui touche de prêt à l'IA, aux maths, et à la programmation.`,
        links: [{name: "repository", link: "https://gitlab.com/echetiago/internship-online-lasso"}]
    },
    {
        projectID: "Scrambler-3x3",
        title: "Scrambler de rubik's cube 3x3",
        status: "terminé",
        image: "/",
        languages: ["C++"],
        description: `J'ai voulu implémenter un programme pour générer des mélanges de rubik's cube en C++. Pour assurer une distribution uniforme sur l'ensemble des états, l'idée n'est
        donc pas d'appliquer une suite aléatoire de mouvements mais de choisir un état de manière aléatoire (et uniforme), puis de trouver une solution et de l'inverser pour obtenir un mélange.
        Pour cela j'ai implémenter un two-phase solver, un algorithme de résolution créé par Kociemba. J'ai donc ré-implémenté IDA* (comme lors de mon TIPE) pour résoudre les deux étapes avec des 
        tables d'heuristiques basées sur des propriétés du cube (orientation et permutation des pièces). A partir de ce solver je n'avais que d'inversé la solution pour pouvoir obtenir un mélange.
        Quelques optimisations m'ont permis d'accélérer la partie résolution, qui ne prend qu'une seconde environs.`,
        techChoices: `J'ai décidé d'utiliser du C++ car je voulais utiliser de la programmation orientée objet et car je voulais un langage performant en terme de rapidité.
        Le programme utilisant IDA* j'ai utilisé des tables d'heuristiques permettant de réduire le nombre de branches à explorer dans chaque étape. Ces heuristiques concernent
        des mix d'orientation et de permutations des pièces (coins/arrêtes). Ainsi j'ai également implémenté un système de coordonnées, liant l'état du cube (représenté par l'orientation et la
        permutation des coins et arrêtes) à des nombres entiers, permettant de rechercher dans les tables.
        Le projet contient donc plusieurs fichiers : un pour ce qui touche au cube (représentation, méthodes et fonctions spécifiques), un pour les mouvements et un pour la partie solver.
        J'ai également généré un certains nombre de fichiers texte : Des fichiers qui contiennent des tables d'heuristiques (pour ne pas les re-générer à chaque fois), et des fichiers
        permettant d'appliquer directement des mouvements sur les coordonnées du cube et non sur le cube en lui même.`,
        personalReview: `Ce projet était censé être mon "projet de septembre", en parallèle de mes études. Je l'ai finalement commencé fin août et j'ai réussi à avancer relativement vite.
        Je l'ai ainsi terminé (bien que je puisse encore le peaufienr) début septembre (2026). Je suis satisfait du résultat, tant dans la structure du projet que dans les performances du programme.
        J'ai pour projet d'intégrer ce programme dans un futur projet de webapp, avec pour but de créer une application de timer pour rubik's cube. J'ai donc besoin pour cela de pouvoir générer des mélanges.
        Je réfléchis encore à comment je peux utiliser un programme en C++ dans une webapp (html, css, javascript), et je compte me renseigner sur les possibilités.`,
        links: [{name: "repository", link:"https://gitlab.com/echetiago/twophasesolvercpp"}]
    }
]
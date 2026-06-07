import Header from "../../components/layout/header"
import Footer from "../../components/layout/footer"

export default function TOS(){
    return (
        <div className="bg-background text-foreground">
          <Header />
          <main className="md:px-16 px-8 md:mx-[20%] mt-10 mb-20 flex flex-col justify-center gap-y-10">
            <div>
                <h1 className="text-3xl">Conditions d'utilisation</h1>
                <p>Mis à jour le 2/06/2026</p>
            </div>

            <div>
                <h2 className="text-2xl">Propriété</h2>
                <p className="text-base/relaxed">
                    Sauf mention contraire, le contenu (information, documents, code, etc) présent sur ce site m'appartient. Font exception les polices
                    d'écriture et tout ou partie des illustrations. Je m'efforcerais dans la mesure du possible de sourcer le contenu exterieur et les possibles
                    co-auteur des documents que je présente. <br />
                    Si des papiers de recherhce venaient à être présenté sur ce site il est demandé, de citer le papier
                    ainsi que les auteurs, comme le veut le cadre académique <br />
                    Pour le code, tout repo publique peut être copier et uiliser dans le cadre d'un usage <b>personnel</b>. Si le projet est marqué comme open-source ou si cela est précisé, 
                   vous êtes libre de copier et/ou utiliser le code selon les indications. Dans tout autre cas, ou en cas de doute, merci de me contacter en amont. <br />
                    Le reste du contenu est considéré comme strictement personnel et n'est destiné qu'à des fins de consultation. Sa copie, distribution ou modification est a priori
                    prohibé. 
                </p>
            </div>
            <div>
                <h2 className="text-2xl">IA/Bot</h2>
                <p className="text-base/relaxed">
                    Ce site me permet de m'excercer sur mes compétences en développement web, cela demande donc du temps et de la patience pour apprendre et mettre en place
                    de nouveau concept. De plus, le site contient des données personnelles. Ainsi, il est demandé de ne pas récupérer les informations présentes et de ne pas 
                    entraîner de modèles (LLM ou autre) sur le présent contenu.
                    Les cafés payés pendant la conception du site et mes petites mains de dévéloppeur "à l'ancienne" vous remercient.
                </p>
            </div>
            <div>
                <h2 className="text-2xl">Exceptions</h2>
                <p className="text-base/relaxed">
                    Je permets deux clauses d'exceptions : Si vous avez obtenu les 202 fraises de Celeste, alors bien joué à vous et vous pouvez utiliser ce site à votre convenance.
                    Si vous êtes un chat, félicitations vous avez aussi un pass-droit pour ce site, en contrepartie je demande juste une photo de vous !
                </p>
            </div>
            <div>
                <h2 className="text-2xl">Soyez indulgents</h2>
                <p>
                    Je ne suis encore qu'un pauvre étudiant de L3, et ce site est mon premier projet utilisant : Next-js et Tailwind ! Je suis donc en plein apprentissage.
                    De plus je suis un piètre designer et l'UI n'est clairement pas mon point fort, ainsi, je m'excuse si le site pique un peu vos petits yeux. N'hésitez pas à prendre une pause !
                </p>
            </div>
          </main>
          <Footer />
        </div>
      );
}
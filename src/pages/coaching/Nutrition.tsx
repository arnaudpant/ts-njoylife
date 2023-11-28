import { useEffect } from "react";
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";


const Nutrition = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    
    return (
        <>
            <div className="container max-w-screen-lg flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">NUTRITION</h1>

                <div className="h-40 overflow-hidden bg-page-nutrition bg-center bg-cover rounded-xl mb-4"></div>

                <p className="text-center text-lg">
                    "Retrouvez équilibre et enthousiasme par le plaisir de manger ce qui est bon pour vous"
                </p>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Un accompagnement personnalisé
                    </h2>
                    <p>
                        Selon vos besoins, votre rythme et toutes vos
                        particularités pour retrouver la Santé par:
                    </p>
                    <ul className="pl-2 md:pl-4">
                        <li>
                            ▸ Une <b>alimentation équilibrée</b> et respectueuse
                            de qui vous êtes.
                        </li>
                        <li>
                            ▸ Un bon <b>fonctionnement intestinal</b> (le système
                            digestif, 1er cerveau pour nous Naturopathes, est en
                            lien avec notre système nerveux).
                        </li>
                        <li>
                            ▸ Des <b>conseils individualisés</b>, des astuces et
                            des super aliments.
                        </li>
                    </ul>
                </div>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">Déroulement d’un coaching</h2>

                    <h3 className="text-lg md:text-xl py-2">Nous commençons par une <b>Anamnèse</b> :</h3>
                    <p>
                        Ensemble nous créons une alliance thérapeute/consultant.
                    </p>
                    <p>
                        Je m’engage à votre égard à avoir une attitude
                        respectueuse, empathique, compréhensive, congruente dans
                        le respect et le secret professionnel.
                    </p>
                    <p>
                        Vous acceptez l’accompagnement car vous êtes prêt(e) à
                        mettre en place des changements de paradigmes vers des
                        objectifs et un mieux-être.
                    </p>
                    <p>
                        Nous allons retracer votre histoire en explorant tous
                        vos systèmes, en considérant toutes vos particularités
                        de vie et la manière dont vous fonctionnez.
                    </p>

                    <h3 className="text-lg md:text-xl pt-6 pb-2">Suivie d’un <b>bilan de vitalité naturopathique</b> :</h3>

                    <p>Vous allez vous rencontrer !</p>
                    <p>
                        Je définie par des critères précis vos constitutions et
                        vos tempéraments afin de m’en servir comme une grille de
                        lecture pour adapter au mieux l’accompagnement qui vous
                        convient.
                    </p>

                    <ul>
                        <li>
                            ▸ <b>Vos constitutions:</b> Il s’agit de l’ensemble de
                            vos constituants innés, héréditaires, ancestraux et
                            de l'ordre de la génétique. Ils ne changent pas. Par
                            exemple votre groupe sanguin parle de vous.
                        </li>
                        <li>
                            ▸ <b>Vos tempéraments:</b> C’est l’ensemble des
                            paramètres acquis. Le fruit de l'adaptation à tous
                            les plans de votre être. Le tempérament évolue dans
                            le temps.
                        </li>
                    </ul>

                    <h3 className="text-lg md:text-xl pt-6 pb-2">La <b>placarologie</b> :</h3>

                    <p>
                        Quand ce sera le moment pour vous, nous prendrons rdv à
                        votre domicile. Nous ferons ensemble le tour de votre
                        cuisine afin de repositionner les produits alimentaires
                        les plus adaptés.
                    </p>
                    <p>
                        Je vous apprends par des ateliers pratiques à préparer
                        des mets, à faire germer vos graines, à créer des
                        légumes lacto-fermentés… en fonction de vos demandes et
                        de vos besoins.
                    </p>
                </div>
                <Plumes />
            </div>
            <SectionInfos />
        </>
    );
};

export default Nutrition;
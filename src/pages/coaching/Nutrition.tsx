import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Nutrition = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Coaching Nutrition</title>
                <link
                    rel="canonical"
                    href="https://www.joelle-corda-naturopathe.fr/coaching-nutrition"
                />
                <meta
                    name="description"
                    content="Découvrez notre accompagnement naturopathique personnalisé pour une santé holistique. Alimentation équilibrée, santé intestinale et conseils pratiques adaptés à vos besoins"
                />
            </Helmet>
            <div
                className="font-title container max-w-screen-lg flex flex-col mx-auto mt-14 md:mt-0 px-4"
                id="top-page"
            >
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">
                    COACHING NUTRITION
                </h1>

                <div className="h-40 overflow-hidden bg-page-nutrition bg-center bg-cover rounded-xl mb-4"></div>

                <p className="text-center text-lg">
                    "Retrouvez équilibre et enthousiasme par le plaisir de
                    manger ce qui est bon pour vous"
                </p>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Accompagnement Naturopathique Personnalisé pour une
                        Santé Holistique
                    </h2>
                    <p>
                        Découvrez un accompagnement individualisé, adapté à vos
                        besoins uniques et rythmes de vie pour retrouver un
                        bien-être global:
                    </p>
                    <ul className="pl-2 md:pl-4">
                        <li className="font-bold pt-4">
                            ▸ Alimentation Holistique
                        </li>
                        <p className="pl-4 pb-4">
                            Une alimentation équilibrée personnalisée qui
                            respecte votre identité pour favoriser la santé
                            physique et mentale.
                        </p>

                        <li className="font-bold">
                            ▸ Santé Intestinale et Bien-Être
                        </li>
                        <p className="pl-4 pb-4">
                            L'équilibre digestif, essentiel pour les
                            Naturopathes, est lié au système nerveux, favorisant
                            un état optimal.
                        </p>

                        <li className="font-bold">
                            ▸ Conseils Personnalisés et Pratiques
                        </li>
                        <p className="pl-4 pb-4">
                            Des astuces, super aliments, et conseils adaptés
                            pour une hygiène de vie en accord avec vos besoins
                            uniques.
                        </p>
                    </ul>
                </div>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Processus de Coaching Complet
                    </h2>

                    <h3 className="text-lg md:text-xl py-2">
                        Nous commençons par une <b>Anamnèse</b> :
                    </h3>
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

                    <h3 className="text-lg md:text-xl pt-6 pb-2">
                        Suivie d’un <b>bilan de vitalité naturopathique</b> :
                    </h3>

                    <p>Vous allez vous rencontrer !</p>
                    <p>
                        Je définie par des critères précis vos constitutions et
                        vos tempéraments afin de m’en servir comme une grille de
                        lecture pour adapter au mieux l’accompagnement qui vous
                        convient.
                    </p>

                    <ul>
                        <li>
                            ▸ <b>Vos constitutions:</b> Il s’agit de l’ensemble
                            de vos constituants innés, héréditaires, ancestraux
                            et de l'ordre de la génétique. Ils ne changent pas.
                            Par exemple votre groupe sanguin parle de vous.
                        </li>
                        <li>
                            ▸ <b>Vos tempéraments:</b> C’est l’ensemble des
                            paramètres acquis. Le fruit de l'adaptation à tous
                            les plans de votre être. Le tempérament évolue dans
                            le temps.
                        </li>
                    </ul>

                    <h3 className="text-lg md:text-xl pt-6 pb-2">
                        La <b>placarologie</b> :
                    </h3>

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
                    <div className="mt-8 flex flex-col items-center">
                        <p className="text-center">
                            Si vous souhaitez également restaurer l'harmonie
                            entre le corps et l'esprit, vous pouvez consulter le
                            deuxième pilier:
                        </p>
                        <Link
                            to="/stress"
                            className="cursor-pointer text-tealJ hover:text-tealH"
                        >
                            GESTION des STRESS et des EMOTIONS
                        </Link>
                    </div>
                </div>
                <Plumes />
            </div>
            <SectionInfos />
        </>
    );
};

export default Nutrition;
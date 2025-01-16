import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Stress = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Sophrologie & Gestion du Stress| Techniques de Relaxation et
                    Développement Personnel
                </title>
                <link
                    rel="canonical"
                    href="https://www.joelle-corda-naturopathe.fr/coaching-gestion-stress"
                />
                <meta
                    name="description"
                    content="Découvrez un accompagnement personnel en gestion du stress. Libérez-vous avec les techniques de sophrologie de relaxologie et Préparation mentale."
                />
            </Helmet>
            <div
                className="container max-w-screen-lg flex flex-col mx-auto mt-14 md:mt-0 px-4"
                id="top-page"
            >
                <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">
                    GESTION DES STRESS ET DES EMOTIONS
                </h1>

                <div className="h-40 overflow-hidden bg-page-stress bg-center bg-cover rounded-xl mb-4"></div>

                <p className="text-center text-lg">
                    "Mes techniques visent à restaurer l'harmonie entre le corps
                    et l'esprit" 🙏🏼
                </p>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Les Bienfaits d'un Accompagnement Personnel
                    </h2>
                    <p className="pb-2">
                        L'accompagnement que je propose vise à vous offrir une
                        transformation profonde et positive, vous permettant de
                        :
                    </p>
                    <ul className="pl-2 md:pl-4 pb-4">
                        <li className="font-bold pt-4">
                            ▸ Vous Libérer les Tensions et Renouer avec
                            l'Équilibre.
                        </li>
                        <p className="pl-4">
                            Une libération des tensions corporelles,
                            émotionnelles et mentales pour retrouver un état
                            d'équilibre.
                        </p>

                        <li className="font-bold pt-4">
                            ▸ Vous ressourcer, remobiliser vos énergies
                        </li>
                        <p className="pl-4">
                            Une revitalisation de vos énergies, une redécouverte
                            de votre vitalité pour un bien-être global.
                        </p>

                        <li className="font-bold pt-4">
                            ▸ Vous apaiser, vous recentrer et vous reconnecter
                            avec vous-même
                        </li>
                        <p className="pl-4">
                            Un apaisement intérieur favorisant la sérénité au
                            quotidien, notamment pour un sommeil de qualité.
                        </p>

                        <li className="font-bold pt-4">
                            ▸ Vous faire confiance, vous estimer à votre juste
                            valeur
                        </li>
                        <p className="pl-4">
                            Une meilleure estime de soi et une confiance
                            renouvelée dans vos capacités personnelles.
                        </p>

                        <li className="font-bold pt-4">
                            ▸ Comprendre ce mal être que vous vivez
                        </li>
                        <p className="pl-4">
                            Une exploration et compréhension des ressentis pour
                            surmonter les obstacles.
                        </p>

                        <li className="font-bold pt-4">
                            ▸ Vivre sereinement et pleinement l’instant présent
                        </li>
                        <p className="pl-4">
                            Une pleine conscience pour vivre l'instant présent
                            dans la quiétude et l'authenticité.
                        </p>
                    </ul>
                    <p>
                        Dans un environnement chaleureux, sans jugement, je vous
                        propose des outils issus de la Sophrologie et de la
                        Relaxologie psychocorporelle. Ces techniques incluent la
                        respiration consciente, la pleine conscience corporelle,
                        la gestion émotionnelle, la résolution de conflits,
                        ainsi que la communication consciente et la guérison
                        émotionnelle.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        La Sophrologie est efficace pour la préparation mentale
                        pour diverses situations
                    </h2>
                    <ul className="pl-2 md:pl-4">
                        <li className="font-bold pt-4">
                            ▸ Pour les Épreuves et Performances
                        </li>
                        <p className="pl-4">
                            Une préparation mentale efficace pour les examens,
                            concours, entretiens d'embauche, compétitions
                            sportives.
                        </p>
                        <li className="font-bold pt-4">
                            ▸ Dans le Cadre Médical
                        </li>
                        <p className="pl-4">
                            Un accompagnement adapté pour les interventions
                            chirurgicales et pour vivre sereinement la naissance
                            d'un enfant.
                        </p>
                    </ul>
                </div>
                <div className="mt-8 flex flex-col items-center">
                    <p className="text-center">
                        Si vous souhaitez également tonifier votre corps ou
                        retrouver un bien-être corporel, vous pouvez consulter
                        le troisième pilier:
                    </p>
                    <Link
                        to="/coaching-sport"
                        className="cursor-pointer text-tealJ hover:text-tealH"
                    >
                        SPORT SANTÉ
                    </Link>
                </div>
                <Plumes />
            </div>
            <SectionInfos />
        </>
    );
};

export default Stress;
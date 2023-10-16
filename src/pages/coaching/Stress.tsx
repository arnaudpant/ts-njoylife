import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const Stress = () => {
    return (
        <>

            <div className="container flex flex-col mx-auto px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4 mx-12">GESTION DES STRESS ET DES EMOTIONS</h1>
                <p className="text-center">
                    "Mes techniques visent à restaurer l'harmonie entre le corps et l'esprit"
                </p>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Les effets d’un Coaching
                    </h2>
                    <p className="pb-2">
                        Vous allez:
                    </p>
                    <ul className="pl-2 md:pl-4 pb-4">
                        <li>
                            👉🏻 Vous libérer des tensions (physiques, émotionnelles
                            et mentales).
                        </li>
                        <li>
                            👉🏻 Vous ressourcer, remobiliser vos énergies.
                        </li>
                        <li>
                            👉🏻 Vous apaiser, vous recentrer (aide au sommeil…).
                        </li>
                        <li>
                            👉🏻 Vous faire confiance, vous estimer à votre juste valeur.
                        </li>
                        <li>
                            👉🏻 Comprendre ce mal être que vous vivez.
                        </li>
                        <li>
                            👉🏻 Vivre sereinement et pleinement l’instant présent;
                        </li>
                    </ul>
                    <p>
                        Dans un cadre bienveillant, dans l’écoute et le
                        non-jugement je vous propose des outils issus de la
                        Sophrologie & la Relaxologie psychocorporelle :
                        Conscience et utilisation de la respiration, conscience
                        du corps et de ses capacités, gestion des émotions,
                        gestion des conflits, ainsi que la Communication
                        Consciente et la guérison du cœur.
                    </p>
                </div>

                <div className="my-4">

                    <h3 className="text-lg md:text-xl py-2">La Sophrologie est efficace pour la préparation mentale</h3>
                    <ul className="pl-2 md:pl-4">
                        <li>👉🏻 Aux examens, concours, entretiens d’embauche.</li>
                        <li>👉🏻 Aux compétitions sportives.</li>
                        <li>👉🏻 Aux interventions chirurgicales.</li>
                        <li>👉🏻 A la naissance.</li>
                    </ul>

                </div>
                <div className="my-8 mx-auto">
                    <Plumes />
                </div>
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default Stress;
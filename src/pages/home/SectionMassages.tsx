import Sections from "../../components/UI/sections/Sections";
import { CardsMassageList } from "../../types/CardsMassageList";

import CardMassage from "../../components/UI/cards/CardMassage";
import Plumes from "../../components/UI/plumes/Plumes";
import { CardsReflexologieList } from "../../types/CardsReflexologie";
import { CardsSonore } from "../../types/CardsSonore";

const SectionMassages = () => {
    return (
        <Sections>
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Massages relaxants
            </h2>
            <div className="container flex flex-col justify-center px-4 md:px-8 pb-10">
                <p className="px-8 pt-4 text-lg">
                    Découvrez un chemin vers l'harmonie à travers mes massages
                    bien-être et techniques de réflexologie naturelles.
                    <br /> Le massage californien enveloppe votre corps de
                    mouvements fluides pour une relaxation profonde, tandis que
                    le massage infini libère vos tensions par ses enchaînements
                    circulaires. Pour un équilibre énergétique complet, le
                    massage kansu aux bols traditionnels apaise votre système
                    nerveux.
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {CardsMassageList.map((card, index) => (
                    <CardMassage {...card} key={index} />
                ))}
            </div>

            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Réfléxologie
            </h2>
            <div className="container flex flex-col justify-center px-4 md:px-8 pb-10">
                <p className="px-8 pt-4 text-lg">
                    Complétez votre expérience holistique grâce à la
                    réflexologie Dien' Chan, stimulant les points réflexes du
                    visage, et au Chi Nei Tsang, massage abdominal ancestral qui
                    harmonise vos organes internes et vos émotions. Une approche
                    complète pour revitaliser naturellement votre corps et votre
                    esprit.
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {CardsReflexologieList.map((cardR, index) => (
                    <CardMassage {...cardR} key={index} />
                ))}
            </div>

            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Relaxation Sonore
            </h2>
            <div className="container flex flex-col justify-center px-4 md:px-8 pb-10">
                <p className="px-8 pt-4 text-lg">
                    Plongez dans une dimension sensorielle unique avec la
                    relaxation sonore aux bols tibétains et bols de cristal. Ces
                    vibrations thérapeutiques résonnent profondément dans votre
                    corps, créant une méditation immersive qui équilibre vos
                    chakras, apaise votre système nerveux et favorise une
                    détente mentale profonde. Une approche complète pour
                    revitaliser naturellement votre corps et votre esprit.
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {CardsSonore.map((cardRef, index) => (
                    <CardMassage {...cardRef} key={index} />
                ))}
            </div>

            <Plumes />
        </Sections>
    );
};

export default SectionMassages;

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
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {CardsMassageList.map((card, index) => (
                    <CardMassage {...card} key={index} />
                ))}
            </div>

            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Réfléxologie
            </h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {CardsReflexologieList.map((cardR, index) => (
                    <CardMassage {...cardR} key={index} />
                ))}
            </div>

            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Relaxation Sonore
            </h2>
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
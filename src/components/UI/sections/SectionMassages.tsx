import Sections from "./Sections";
import { CardsMassageList } from "../../../types/CardsMassageList";
import CardMassage from "../cards/CardMassage";
import { CardsReflexologieList } from "../../../types/CardsReflexologie";
import Plumes from "../../Plumes";

const SectionMassages = () => {
    return (
        <Sections>
            <h2 className="text-2xl md:text-4xl font-semibold m-5">MASSAGES RELAXANTS</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 pt-4">
                {
                    CardsMassageList.map((card, index) => (
                        <CardMassage {...card} key={index} />
                    ))
                }
            </div>
            <h3 className="text-xl md:text-2xl font-semibold m-3">Réfléxologie ventrale</h3>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
            {
                    CardsReflexologieList.map((card, index) => (
                        <CardMassage {...card} key={index} />
                    ))
                }
            </div>
            <Plumes />
        </Sections>
    );
};

export default SectionMassages;
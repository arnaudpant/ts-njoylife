import Sections from "./Sections";
import { CardsMassageList } from "../../../types/CardsMassageList";
import { CardsRelaxologieList } from "../../../types/CardsRelaxologie";
import CardMassage from "../cards/CardMassage";
import Plumes from "../../Plumes";

const SectionMassages = () => {
    return (
        <Sections>
            <h2 className="text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">Massages relaxants</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {
                    CardsMassageList.map((card, index) => (
                        <CardMassage {...card} key={index} />
                    ))
                }
            </div>
            
            <h2 className="text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">Réfléxologie ventrale</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 mt-6">
                {
                    CardsRelaxologieList.map((card, index) => (
                        <CardMassage {...card} key={index} />
                    ))
                }
            </div>


            <Plumes />
        </Sections>
    );
};

export default SectionMassages;
import Sections from "./Sections";
import { CardsMassageList } from "../../../types/CardsMassageList";
import CardMassage from "../cards/CardMassage";

const SectionMassages = () => {
    return (
        <Sections>
            <h2 className="text-2xl md:text-4xl font-semibold m-5">MASSAGES RELAXANTS</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
                {
                    CardsMassageList.map((card, index) => (
                        <CardMassage {...card} key={index} />
                    ))
                }
            </div>
            <h3 className="text-xl md:text-2xl font-semibold m-3">Réfléxologie ventrale</h3>
            <CardMassage imgSrc="/cards/massages/massage-chi-nei-tsang.png" imgAlt="" title="Chi Nei Tsang" time="60min" />
        </Sections>
    );
};

export default SectionMassages;
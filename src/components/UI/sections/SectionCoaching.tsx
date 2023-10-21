import { CardsCoachingLlist, CardCoachingInfo } from "../../../types/CardsCoachingList";
import Plumes from "../../Plumes";
import CardCoaching from "../cards/CardCoaching";
import Sections from "./Sections";


const SectionCoaching: React.FC = () => {
    return (
        <Sections>
            <h2 className="text-2xl md:text-4xl font-semibold m-5">COACHING GLOBAL</h2>
            <p className="px-8 pt-4 pb-10 text-lg"> Retrouvez votre bien-être grace à mon <b>concept 3 piliers</b>, qui vous guide vers <b>l’autonomie</b> par la gestion de votre alimentation,
                de vos stress et de vos capacités physiques!</p>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
                {
                    CardsCoachingLlist.map((card: CardCoachingInfo, index) => (
                        <CardCoaching {...card} key={index} />
                    ))
                }
            </div>
            <p className="px-8 pt-10 pb-1 text-lg">Une hygiène de vie globale favorise le processus naturel de guérison existant en chacun de nous</p>

            <Plumes />

        </Sections>

    );
};

export default SectionCoaching;
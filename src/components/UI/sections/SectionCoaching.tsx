import { CardsCoachingLlist, CardCoachingInfo } from "../../../types/CardsCoachingList";
import Plumes from "../../Plumes";
import CardCoaching from "../cards/CardCoaching";
import Sections from "./Sections";


const SectionCoaching: React.FC = () => {
    return (
        <Sections>
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">COACHING GLOBAL</h2>
            <p className="px-8 pt-4 pb-10 text-lg"> Retrouvez votre bien-être grâce à mon <b>concept 3 piliers:</b><br/>
                Nutrition, Gestion des stress et des émotions, Sport santé.<br/> 
                Mon concept vous guide vers l’autonomie par la gestion de votre <b>alimentation</b>,
                de vos <b>stress</b> et de votre <b>corps</b>.</p>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
                {
                    CardsCoachingLlist.map((card: CardCoachingInfo, index) => (
                        <CardCoaching {...card} key={index} />
                    ))
                }
            </div>
            <p className="px-8 pt-10 pb-1 text-lg">Une hygiène de vie globale favorise le processus naturel de guérison existant en chacun de nous.</p>

            <Plumes />

        </Sections>

    );
};

export default SectionCoaching;
import { CardsPacksList } from "../../../types/CardsPacksList";
import Plumes from "../../Plumes";
import CardsPacks from "../cards/CardsPacks";
import Sections from "./Sections";

const SectionAccompagnement = () => {
    return (
        <Sections fond="vert">
            <h2 className="text-2xl md:text-4xl font-semibold m-5">ACCOMPAGNEMENT INDIVIDUEL</h2>
            <p className="px-8 pt-4 pb-8">Coaching personnalisé en pack de 4 séances.</p>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
                {
                    CardsPacksList.map((card, index) => (
                        <CardsPacks {...card} key={index} />
                    ))
                }
            </div>
            <p className="px-8 pt-8">Je suis à votre disposition du début à la fin de
                l'accompagnement, en présentiel ou par visio/téléphone.</p>
            <p className="px-8 pt-2 pb-8"> Vous recevez un mail après chaque séance avec des fiches,
                    des conseils, des audios et vidéos.</p>
            <Plumes />
        </Sections>
    );
};

export default SectionAccompagnement;
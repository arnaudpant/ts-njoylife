import { CardsCoachingLlist, CardCoachingInfo } from "../types/CardsCoachingList";
import CardCoaching from "./CardCoaching";


const SectionCoaching: React.FC = () => {
    return (
        <section className="flex flex-col items-center bg-blanc">
            <h2 className="text-3xl md:text-4xl font-semibold m-8">COACHING GLOBAL</h2>
            <p className="px-8 py-4"> Retrouvez votre bien-être grace à mon <strong>concept 3 piliers</strong>, qui vous guide vers <strong>l’autonomie</strong> par la gestion de votre alimentation,
                de vos stress et de vos capacités physiques!</p>
            <div className="flex flex-col md:flex-row gap-4">
                {
                    CardsCoachingLlist.map((card: CardCoachingInfo, index) => (
                        <CardCoaching {...card} key={index}/>
                    ))
                }

            </div>
        </section>
    );
};

export default SectionCoaching;
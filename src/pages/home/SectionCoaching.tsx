import {
    CardsCoachingLlist,
    CardCoachingInfo,
} from "../../types/CardsCoachingList";
import Plumes from "../../components/UI/plumes/Plumes";
import CardCoaching from "../../components/UI/cards/CardCoaching";
import Sections from "../../components/UI/sections/Sections";

const SectionCoaching: React.FC = () => {
    return (
        <Sections>
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                COACHING GLOBAL
            </h2>
            <div className="container flex flex-col justify-center px-4 md:px-8 pb-10">
                <p className="px-8 pt-4 text-lg">
                    {" "}
                    Retrouvez votre bien-être naturel grâce à mon concept
                    naturopathique des 3 piliers essentiels: Nutrition
                    équilibrée, Gestion holistique du stress et des émotions, et
                    Sport-santé adapté.
                </p>
                <p className="px-8 pt-4 pb-2 text-lg">
                    Cette approche naturopathique complète vous guide vers
                    l'autonomie de santé en vous apprenant à maîtriser votre
                    alimentation saine, à gérer efficacement vos stress
                    quotidiens et à prendre soin de votre corps par des méthodes
                    naturelles.
                </p>
                <p className="px-8 pt-4 pb-10 text-lg">
                    Une naturopathie personnalisée pour retrouver votre
                    équilibre vital et prévenir les déséquilibres de santé.
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10">
                {CardsCoachingLlist.map((card: CardCoachingInfo, index) => (
                    <CardCoaching {...card} key={index} />
                ))}
            </div>
            <p className="px-8 pt-10 text-lg">
                Une hygiène de vie globale favorise le processus naturel de
                guérison existant en chacun de nous.
            </p>

            <Plumes />
        </Sections>
    );
};

export default SectionCoaching;

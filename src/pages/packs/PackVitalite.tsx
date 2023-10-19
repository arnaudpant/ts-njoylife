import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const PackVitalite = () => {
    return (
        <>
            <div className="container flex flex-col items-center mx-auto mt-14 md:mt-0  px-4" id="top-page">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">ACCOMPAGNEMENT GLOBAL</h1>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Qui comprend: 2 ou 3 piliers selon vos besoins
                    </h2>

                    <ul className="pl-2 md:pl-4">
                        <li>
                            👉🏻 Nutrition / Gestion des stress
                        </li>
                        <li>
                            👉🏻 Nutrition / Sport
                        </li>
                        <li>
                            👉🏻 Nutrition / Gestion des stress / Sport
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="mt-4 mx-auto rounded-2xl overflow-hidden">
                        <img src="/cards/coaching/card-nutrition.jpg" alt="" />
                    </div>
                    <div className="mt-4 mx-auto rounded-2xl overflow-hidden">
                        <img src="/cards/coaching/card-stress.jpg" alt="" />
                    </div>
                    <div className="mt-4 mx-auto rounded-2xl overflow-hidden">
                        <img src="/cards/coaching/card-sport.jpg" alt="" />
                    </div>

                </div>

                <div className="my-8 mx-auto">
                    <Plumes />
                </div>
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default PackVitalite;
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const Sport = () => {
    return (
        <>
            <div className="container flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4 mx-12">SPORT POUR TOUS</h1>
                <p className="text-center">
                    "Vous souhaitez tonifier votre corps ou tout simplement retrouver un bien-être corporel dans les sensations"
                </p>

                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                        Adultes et séniors, Pré & post natal
                    </h2>
                    <p className="pb-2">
                        Retrouvez la fluidité et la tonicité de votre corps par
                        des exercices adaptés à vos besoins physiques et toutes
                        vos particularités de santé, par la conscience du corps
                        et de ses capacités via la fonction essentielle à la vie
                        : <b>la respiration</b>
                    </p>
                </div>

                <div className="my-4">

                    <h3 className="text-lg md:text-xl py-2">Mes outils</h3>
                    <ul className="pl-2 md:pl-4">
                        <li>👉🏻 Gym Pilates.</li>
                        <li>👉🏻 Yoga.</li>
                        <li>👉🏻 Entrainement fonctionnel.</li>
                        <li>👉🏻 Ecole du dos.</li>
                    </ul>

                </div>
                <div className="my-8 mx-auto">
                    <Plumes />
                </div>
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default Sport;
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageInfini = () => {
    return (
        <>
            <div className="container flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE INFINI</h1>

                <div className="my-4">
                    <p>
                        Ce modelage relaxant va remettre de la fluidité dans votre corps.
                    </p>
                    <p>
                        Mouvements d'effleurages en huit sur les deux hémisphères, côté droit puis côté gauche qui sont réunifiés.
                    </p>
                    <p>
                        Sur peau nue, des pieds à la tête avec des huiles chaudes adaptées.
                    </p>
                </div>
                <div className="my-8 mx-auto">
                    <Plumes />
                </div>
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default MassageInfini;
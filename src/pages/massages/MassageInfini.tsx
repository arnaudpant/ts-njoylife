import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageInfini = () => {
    return (
        <>
            <div className="container flex flex-col md:flex-row mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <div className="md:w-1/2 text-center p-8">
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
                </div>

                <div className="mx-auto md:w-1/2">
                    <img src="/photos/photo-cours-collectif.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                </div>
            </div>
            <Plumes />
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default MassageInfini;
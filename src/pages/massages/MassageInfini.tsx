import { useEffect } from "react";
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageInfini = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4" id="top-page">

                    <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE INFINI</h1>

                    <div className="h-52 overflow-hidden bg-page-infini bg-center bg-cover rounded-xl mb-8"></div>

                    <div className="my-4 text-left leading-8">
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

            <Plumes />
            <SectionInfos />
        </div>
    );
};

export default MassageInfini;
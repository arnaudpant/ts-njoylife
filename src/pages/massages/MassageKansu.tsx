import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageKansu = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4" id="top-page">

                    <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">MASSAGE KANSU</h1>
                    <div className="h-52 overflow-hidden bg-page-kansu bg-top bg-cover rounded-xl mb-8"></div>
                    <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Massage des pieds au bol kansu</h2>

                    <div className="my-4 text-left leading-8">
                        <p>
                            Modelage Ayurvédique de la voûte plantaire.
                        </p>
                        <p>
                            A l'aide d'un petit bol tibétain et d'huile de coco, le massage des zones réflexes du pied permet de détendre le corps tout entier.
                        </p>
                        <p>
                            Il libère le stress et les tensions accompagné de respirations conscientes guidées.
                        </p>
                    </div>

                </div>

            <Plumes />
            <SectionInfos map={false}  />
        </div>
    );
};

export default MassageKansu;
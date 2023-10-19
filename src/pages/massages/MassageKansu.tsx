import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageKansu = () => {
    return (
        <>
            <div className="container flex flex-col md:flex-row mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <div className="md:w-1/2 text-center p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE KANSU</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Massage des pieds au bol kansu</h2>

                    <div className="my-4">
                        <p>
                            Modelage Ayurvédique de la voûte plantaire.
                        </p>
                        <p>
                            A l'aide d'un petit bol tibétain, le massage des zones réflexes du pied permet de détendre le corps tout entier.
                        </p>
                        <p>
                            Il libère le stress et les tensions.
                        </p>
                    </div>

                </div>
                <div className="mx-auto md:w-1/2">
                    <img src="/photos/photo-cours-collectif.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                </div>
            </div>
            <div className="my-8 mx-auto">
                <Plumes />
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default MassageKansu;
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageDienChan = () => {
    return (
        <>
            <div className="container flex flex-col md:flex-row mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <div className="md:w-1/2 text-center p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE DIEN-CHAN</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Réflexologie faciale<br />massage liftant - relaxant</h2>

                    <div className="my-4 text-left">
                        <p>
                            Le Dien' Chan est une méthode naturelle, qui cherche à rétablir l’équilibre du corps.<br /> C’est une pratique de médecine douce préventive et curative.
                        </p>
                        <p className="py-4">
                            En stimulant certains points et zones du visage avec de petits outils, le corps est soulagé et les douleurs sont atténuées.<br />
                            Cette pratique permet d’agir sur différents troubles, tels que migraine, ballonnements, bouffées de chaleur, fatigue, troubles du sommeil.…<br />
                            Elle est particulièrement connue pour la rapidité de ses effets.<br />
                            Le massage avec une huile de rose permet de lifter et relaxer le visage ayant des effets sur la totalité du corps.
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

export default MassageDienChan;
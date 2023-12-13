import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageDienChan = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">MASSAGE DIEN-CHAN</h1>

                <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Réflexologie faciale<br />massage liftant - relaxant</h2>
                <div className="h-52 overflow-hidden bg-page-dienchan bg-top bg-cover rounded-xl mb-8"></div>
                <div className="mmy-4 text-left leading-8">
                    <p>
                        Le Dien' Chan est une méthode naturelle, qui cherche à rétablir l’équilibre du corps.<br /> C’est une pratique de médecine douce préventive et curative.
                    </p>
                    <p className="py-4">
                        En stimulant certains points et zones du visage avec de petits outils, le corps est soulagé et les douleurs sont atténuées.<br />
                        Cette pratique permet d’agir sur différents troubles, tels que migraine, ballonnements, bouffées de chaleur, fatigue, troubles du sommeil.…<br />
                        Le massage avec une huile de rose permet de lifter et relaxer le visage ayant des effets sur la totalité du corps.
                    </p>
                </div>

            </div>

            <Plumes />
            <SectionInfos map={false} />
        </div>
    );
};

export default MassageDienChan;
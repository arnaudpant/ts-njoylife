import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageDienChan = () => {
    return (
        <>
            <div className="container flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE DIEN-CHAN</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Réflexologie faciale<br />massage liftant - relaxant</h2>

                <div className="my-4">
                    <p>
                        Le Dien' Chan est une méthode naturelle, qui cherche à rétablir l’équilibre du corps.<br /> C’est une pratique de médecine douce préventive et curative.
                    </p>
                    <p>
                        En stimulant certains points et zones du visage avec de petits outils, le corps est soulagé et les douleurs sont atténuées.<br />
                        Cette pratique permet d’agir sur différents troubles, tels que migraine, ballonnements, bouffées de chaleur, fatigue, troubles du sommeil.…<br />
                        Elle est particulièrement connue pour la rapidité de ses effets.<br />
                        Le massage avec une huile de rose permet de lifter et relaxer le visage ayant des effets sur la totalité du corps.
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

export default MassageDienChan;
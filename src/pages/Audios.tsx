import Plumes from "../components/Plumes";
import Sections from "../components/UI/sections/Sections";



const Audios = () => {
    return (
        <Sections fond="vert">
            <h1 className="text-2xl md:text-4xl font-semibold m-5">RELAXATIONS GUIDEES</h1>
            <div className="container mx-auto flex flex-col gap-4">
                <div>
                    <h3>Les points d'appui du corps</h3>
                    <audio controls preload="auto" src="../audio/Relax1 points-appui.m4a"
                        controlsList="nodownload">
                        Votre navigateur ne supporte pas la balise audio
                    </audio>
                </div>
                <h3>Respiration carrée sur 6 temps</h3>

                <audio controls preload="auto" src="../audio/Relax2 respiration-carree.m4a"
                    controlsList="nodownload">
                    Votre navigateur ne supporte pas la balise audio
                </audio>
                <div>
                    <h3>Libérez votre mental</h3>
                    <audio controls preload="auto" src="../audio/Relax3 libérez votre mental.m4a"
                        controlsList="nodownload">
                        Votre navigateur ne supporte pas la balise audio
                    </audio>
                </div>
                <div>
                    <h3>Les vagues du souffle</h3>
                    <audio controls preload="auto" src="../audio/Relax4 Les vagues du souffle.m4a"
                        controlsList="nodownload">
                        Votre navigateur ne supporte pas la balise audio
                    </audio>
                </div>
                <div>
                    <h3>L'envol</h3>
                    <audio controls preload="auto" src="../audio/Relax5 envol.m4a" controlsList="nodownload">Votre
                        navigateur ne supporte pas la balise audio
                    </audio>
                </div>
                <div>
                    <h3>Ouverture et réceptivité</h3>
                    <audio controls preload="auto" src="../audio/Relax6 ouverture.m4a"
                        controlsList="nodownload">
                        Votre navigateur ne supporte pas la balise audio
                    </audio>
                </div>
            </div>

            <Plumes />

        </Sections>
    );
};

export default Audios;
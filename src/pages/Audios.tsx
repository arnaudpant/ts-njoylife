import Plumes from "../components/Plumes";




const Audios = () => {
    return (
        <div className="flex flex-col items-center md:justify-evenly w-full bg-primaire min-h-[calc(100vh-112px)]">

            <h1 className="text-2xl md:text-4xl font-semibold mx-5 mt-16 md:mt-4">RELAXATIONS GUIDEES</h1>

            <div className="rounded-full max-w-[680px] shadow-card overflow-hidden m-8">
                <img src="/photos/photo-audio.jpg" alt="femme ecoutant de la musique sur son lit avec un casque" />
            </div>


            <div className="container mx-auto h-full flex flex-col md:flex-row items-center md:justify-center gap-8 mb-8 px-4">

                <div>
                    <div className="px-4">
                        <h3 className="pb-2">Les points d'appui du corps</h3>
                        <audio controls preload="auto" src="/audio/Relax1 points-appui.m4a"
                            controlsList="nodownload">
                            Votre navigateur ne supporte pas la balise audio
                        </audio>
                    </div>


                    <div className="px-4">
                        <h3 className="pb-2">Respiration carrée sur 6 temps</h3>
                        <audio controls preload="auto" src="/audio/Relax2 respiration-carree.m4a"
                            controlsList="nodownload">
                            Votre navigateur ne supporte pas la balise audio
                        </audio>
                    </div>


                    <div className="px-4">
                        <h3 className="pb-2">Libérez votre mental</h3>
                        <audio controls preload="auto" src="/audio/Relax3 libérez votre mental.m4a"
                            controlsList="nodownload">
                            Votre navigateur ne supporte pas la balise audio
                        </audio>
                    </div>
                </div>

                <div>
                    <div className="px-4">
                        <h3 className="pb-2">Les vagues du souffle</h3>
                        <audio controls preload="auto" src="/audio/Relax4 Les vagues du souffle.m4a"
                            controlsList="nodownload">
                            Votre navigateur ne supporte pas la balise audio
                        </audio>
                    </div>


                    <div className="px-4">
                        <h3 className="pb-2">L'envol</h3>
                        <audio controls preload="auto" src="/audio/Relax5 envol.m4a" controlsList="nodownload">Votre
                            navigateur ne supporte pas la balise audio
                        </audio>
                    </div>


                    <div className="px-4">
                        <h3>Ouverture et réceptivité</h3>
                        <audio controls preload="auto" src="/audio/Relax6 ouverture.m4a"
                            controlsList="nodownload">
                            Votre navigateur ne supporte pas la balise audio
                        </audio>
                    </div>
                </div>




            </div>
            <Plumes />
        </div>
    );
};

export default Audios;
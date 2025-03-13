import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";


const MassageKobido = () => {
      useEffect(() => {
            window.scrollTo({
                top: 0,
            })
        }, [])
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div
                className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4"
                id="top-page"
            >
                <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">
                    MASSAGE KOBIDO
                </h1>

                {/* <h2 className="text-xl md:text-2xl font-semibold text-center my-4">
                    Réflexologie faciale
                    <br />
                    massage liftant - relaxant
                </h2> */}
                <div className="h-52 overflow-hidden bg-massage-kobido bg-top bg-cover rounded-xl mb-8"></div>
                <div className="mmy-4 text-left leading-8">
                    <p>
                        Le Kobido est un massage facial japonais ancestral,
                        appelé "lifting naturel".
                    </p>
                    <p className="py-4">
                        Il combine des techniques de pétrissage, de percussions,
                        de drainage et d’acupression pour stimuler la
                        circulation sanguine et lymphatique du visage.
                        <br />
                        Grâce à ces gestes précis et rythmés, le Kobido aide à
                        tonifier la peau, réduire les tensions musculaires,
                        atténuer les rides et redonner de l’éclat au teint. Il
                        agit aussi en profondeur en favorisant la production de
                        collagène et d’élastine.
                        <br />
                        En plus de ses bienfaits esthétiques, ce massage a un
                        effet relaxant et énergisant.
                    </p>
                </div>
            </div>

            <Plumes />
            <SectionInfos map={false} />
        </div>
    );
};

export default MassageKobido;
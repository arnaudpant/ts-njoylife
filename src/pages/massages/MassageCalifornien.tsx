import { useEffect } from "react";
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageCalifornien = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4" id="top-page">
                {/* TEXT */}

                    <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE CALIFORNIEN</h1>

                    <div className="h-52 overflow-hidden bg-page-californien bg-center bg-cover rounded-xl mb-8"></div>

                    <div className="my-4 text-left leading-8">
                        <p>
                            Ce modelage relaxant va vous envelopper d'un voile de douceur ...
                        </p>
                        <p>
                            Il va vous rasssembler, vous unifier, vous aider à lâcher les tensions.
                        </p>
                        <p>
                            Il sagit de mouvements d'effleurage longs et de pétrissages qui peuvent s'intensifier, sur peau nue, des pieds à la tête avec des huiles chaudes.
                        </p>
                    </div>
                </div>


            <Plumes />


            <SectionInfos />
        </div>
    );
};

export default MassageCalifornien;
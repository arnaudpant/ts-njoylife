import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageCalifornien = () => {
    return (
        <>
            <div className=" flex flex-col md:flex-row justify-center flex-1 items-start mt-14 md:mt-0 px-4" id="top-page">

                {/* TEXT */}
                <div className="md:w-1/2 max-w-[600px] text-center p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE CALIFORNIEN</h1>

                    <div className="my-4">
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

                {/* IMAGE */}
                <div className="md:w-1/2 max-w-[600px] mt-14 md:mt-0 p-8  overflow-hidden">
                    <img src="/cards/massages/massage-californien.png" alt="groupe de personnes enlassés" className="h-full bg-contain rounded-xl" />
                </div>

            </div>

            <Plumes />


            <SectionInfos adress="sevigne" />
        </>
    );
};

export default MassageCalifornien;
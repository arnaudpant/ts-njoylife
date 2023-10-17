import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageCalifornien = () => {
    return (
        <>
            <div className="container flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
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
                <div className="my-8 mx-auto">
                    <Plumes />
                </div>
            </div>
            <SectionInfos adress="sevigne" />
        </>
    );
};

export default MassageCalifornien;
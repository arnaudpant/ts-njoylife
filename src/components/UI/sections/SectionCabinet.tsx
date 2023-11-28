import Sections from "./Sections";

//TODO: Taille des images

const SectionCabinet = () => {
    return (
        <Sections fond="blanc">
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5">Mon cabinet</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 mx-4 justify-center">
                <img src="/cabinet/cabinet1.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
                <img src="/cabinet/cabinet2.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
                <img src="/cabinet/cabinet3.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
            </div>
        </Sections>
    );
};

export default SectionCabinet;
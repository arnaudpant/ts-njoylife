import { MapPin } from "lucide-react";


const SectionCabinet = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-4 bg-tealA">
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5">Localisation <MapPin className='inline h-7' /></h2>
            <p className="text-2xl py-4">Septième Sens</p>
            <p className="text-xl">Espace Thérapeutique et de bien-être</p>

            <div className="flex flex-col md:flex-row flex-wrap gap-8 mx-4 justify-center">
                {/* <img src="/cabinet/cabinet1.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" /> */}
            </div>
        </section>
    );
};

export default SectionCabinet;
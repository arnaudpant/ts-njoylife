import { MapPin } from "lucide-react";


const SectionCabinet = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-4 bg-tealA">
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">Localisation <MapPin className='inline h-7' /></h2>
            <p className="text-2xl py-4">Septième Sens</p>
            <p className="text-xl">Espace Thérapeutique et de bien-être</p>

            <div className='my-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.327845979484!2d5.039213636889303!3d45.01826981959019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5525fbbab77ef%3A0xa015db0d0729a4c0!2s45%20All.%20du%20Vivarais%2C%2026300%20Bourg-de-P%C3%A9age!5e0!3m2!1sfr!2sfr!4v1701514079258!5m2!1sfr!2sfr" width="400" height="300"></iframe>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-8 m-4 justify-center">
                <img src="/cabinet/cabinet1.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
                <img src="/cabinet/cabinet2.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
                <img src="/cabinet/cabinet3.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
            </div>
        </section>
    );
};

export default SectionCabinet;
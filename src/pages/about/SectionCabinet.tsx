import { MapPin } from "lucide-react";
import Adress from "../../components/UI/Adress";
import { Adresses, ListAdresses } from "../../types/ListAdresses";


const SectionCabinet = () => {
     const infos: Adresses[] = ListAdresses.filter(elt => elt.id === 'marches')
    return (
        <section className="flex flex-col justify-center items-center mt-4 bg-tealA">
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">
                Localisation <MapPin className="inline h-7" />
            </h2>
            <p className="text-2xl py-4">Mon cabinet</p>
            <div className="flex flex-col text-tealK md:flex-row gap-4">
                {infos.map((info) => (
                    <Adress {...info} key={info.adresse} />
                ))}
            </div>

            <div className="my-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.3102977574786!2d5.1133826774280235!3d44.97800727107042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478aac8ac32d723d%3A0xa43890d2235a996e!2s78%20Rte%20de%20l&#39;Arpenteur%2C%2026300%20Marches!5e0!3m2!1sfr!2sfr!4v1734965131678!5m2!1sfr!2sfr"
                    width="300"
                    height="300"
                ></iframe>
            </div>

            {/* <div className="flex flex-col md:flex-row flex-wrap gap-8 m-4 justify-center">
                <img src="/cabinet/cabinet1.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
                <img src="/cabinet/cabinet3.jpg" alt="interieur du cabinet de consultation" className="md:h-80 rounded-xl shadow-lg" />
            </div> */}
        </section>
    );
};

export default SectionCabinet;
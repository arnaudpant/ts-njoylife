import { ListAdresses, Adresses } from '../../../types/ListAdresses';
import Adress from "../Adress";


const SectionInfos = () => {

    const infos: Adresses[] = ListAdresses.filter(elt => elt.id === 'sens')

    return (
        <section className="flex flex-col items-center md:justify-evenly w-full bg-tealC py-10" >
            <h2 className="font-title text-2xl md:text-4xl font-semibold text-tealL mx-5 pt-3">CABINET</h2>
            <div className="flex flex-col text-tealK md:flex-row gap-4">
                {
                    infos.map((info, index) => (
                        <Adress {...info} key={index} />
                    ))
                }
            </div>
        </section>
    );
};

export default SectionInfos;
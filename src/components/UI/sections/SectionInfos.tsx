import { ListAdresses, Adresses } from '../../../types/ListAdresses';
import Adress from "../Adress";

interface Props {
    adress: string
}


const SectionInfos = ({ adress }: Props) => {

    const infos: Adresses[] = ListAdresses.filter(elt => elt.id === adress)

    return (
        <section className="flex flex-col items-center md:justify-evenly w-full bg-tealE py-10" >
            <h2 className="text-2xl md:text-4xl font-semibold text-tealL mx-5 py-10">SEANCES</h2>
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
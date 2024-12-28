import { ListAdresses, Adresses } from '../../../types/ListAdresses';
import Adress from "../Adress";

type Props = {
    map?: boolean
}


const SectionInfos = ({map}: Props) => {

    const infos: Adresses[] = ListAdresses.filter(elt => elt.id === 'marches')

    return (
        <section className="flex flex-col items-center md:justify-evenly w-full bg-tealC py-10">
            <h2 className="font-title text-2xl md:text-4xl font-semibold text-tealL mx-5 pt-3">
                CABINET
            </h2>
            <div className="flex flex-col text-tealK md:flex-row gap-4">
                {infos.map((info) => (
                    <Adress {...info} key={info.adresse} />
                ))}
            </div>
            {map && (
                <div className="mt-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.3102977574786!2d5.1133826774280235!3d44.97800727107042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478aac8ac32d723d%3A0xa43890d2235a996e!2s78%20Rte%20de%20l&#39;Arpenteur%2C%2026300%20Marches!5e0!3m2!1sfr!2sfr!4v1734965131678!5m2!1sfr!2sfr"
                        width="300"
                        height="300"
                    ></iframe>
                </div>
            )}
        </section>
    );
};

export default SectionInfos;
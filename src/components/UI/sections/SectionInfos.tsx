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
            <div className='mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.327845979484!2d5.039213636889303!3d45.01826981959019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5525fbbab77ef%3A0xa015db0d0729a4c0!2s45%20All.%20du%20Vivarais%2C%2026300%20Bourg-de-P%C3%A9age!5e0!3m2!1sfr!2sfr!4v1701514079258!5m2!1sfr!2sfr" width="300" height="300"></iframe>
            </div>
        </section>
    );
};

export default SectionInfos;
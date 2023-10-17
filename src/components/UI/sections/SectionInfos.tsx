import Sections from "./Sections";
import { ListAdresses, Adresses } from '../../../types/ListAdresses';
import Adress from "../Adress";
import Plumes from "../../Plumes";

interface Props {
    adress: string
}


const SectionInfos = ({ adress }: Props) => {

    const infos: Adresses[] = ListAdresses.filter(elt => elt.id === adress)

    return (
        <Sections>
            <h2 className="text-2xl md:text-4xl font-semibold m-5">SEANCES</h2>
            <div className="flex flex-col md:flex-row gap-4">
                {
                    infos.map((info, index) => (
                        <Adress {...info} key={index} />
                    ))
                }
            </div>
            <div className="mt-8">
                <Plumes />
            </div>
        </Sections>
    );
};

export default SectionInfos;
import Sections from "./Sections";
import { ListAdresses, Adresses } from '../../../types/ListAdresses';
import Adress from "../Adress";
import Plumes from "../../Plumes";


const SectionInfos = () => {

    const infos: Adresses[] = ListAdresses.filter(elt => elt.id === "sevigne")

    return (
        <Sections fond="vert">
            <h2 className="text-2xl md:text-4xl font-semibold m-5">INFORMATIONS</h2>
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
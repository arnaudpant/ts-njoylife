import Plumes from "../plumes/Plumes";
import Bouton from "../buttons/Bouton";
import Sections from "./Sections";

const SectionCallToAction = () => {
    return (
        <Sections >
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8">CONTACTEZ MOI</h2>
            <div>
                <h2 className="text-xl text-center md:text-2xl m-2">JE VOUS OFFRE</h2>
                <h2 className="text-xl text-center md:text-2xl m-2">VOTRE 1er RENDEZ-VOUS !</h2>
            </div>
            <div itemScope itemType="https://schema.org/PostalAddress" className="flex flex-col md:flex-row gap-4 my-8 animate-pulse">
                <Bouton itemProp="telephone" href="tel:+33651486895" label="+33(0)6 51 48 68 95" />
                <Bouton itemProp="email" href="mailto:cordajoelle@gmail.com" label="E-MAIL" />
            </div>
            <div className="px-4">
                <p className="text-lg text-center pb-4">Je vous accompagne en cabinet, à domicile et à distance.</p>
                <p className="text-lg text-center pb-4">Tarifs adaptés pour les étudiants, demandeurs d’emploi et personnes en difficultés financières.</p>
            </div>
                <Plumes />
        </Sections>
    );
};

export default SectionCallToAction;
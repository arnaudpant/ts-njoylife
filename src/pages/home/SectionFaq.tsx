import { Link } from "react-router-dom";
import Plumes from "../../components/UI/plumes/Plumes";
import Sections from "../../components/UI/sections/Sections";

const SectionFaq = () => {
    return (
        <Sections fond="vert">
            <div className="container flex flex-col justify-center px-4 md:px-8">
                <h2 className="font-title text-2xl md:text-4xl font-semibold m-5 pt-4 md:pt-8 text-center">
                    LA NATUROPATHIE
                </h2>
                <p className="pt-4 text-lg text-left">
                    La naturopathie est une approche holistique utilisant des
                    méthodes naturelles pour renforcer les capacités
                    d'auto-guérison du corps. Le naturopathe ne "soigne" pas
                    directement, mais rétablit l'équilibre et stimule les
                    défenses naturelles face aux troubles digestifs, stress,
                    problèmes de peau, allergies et déséquilibres hormonaux.
                </p>
                <p className="pt-4 text-lg">
                    Mon accompagnement repose sur trois piliers fondamentaux :
                    nutrition adaptée, gestion du stress/émotions et coaching
                    sportif personnalisé. En tant que sophrologue certifiée,
                    j'intègre également des techniques de relaxation et
                    méditation pour harmoniser le lien corps-esprit.
                </p>
                <Link
                    to="/role-naturopathie"
                    className="pt-4 text-lg text-action"
                >
                    En savoir plus sur la Naturopathie
                </Link>
            </div>
            <Plumes />
        </Sections>
    );
};

export default SectionFaq;

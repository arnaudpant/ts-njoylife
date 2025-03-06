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
                <p className="pt-4 text-lg">
                    La naturopathie propose diverses méthodes naturelles :
                    phytothérapie, aromathérapie, nutrition, hydrothérapie et
                    techniques anti-stress. Cette approche préventive et
                    personnalisée vise à améliorer votre qualité de vie,
                    renforcer votre immunité et atteindre un équilibre optimal
                    pour une santé durable et épanouie.
                </p>
            </div>
            <Plumes />
        </Sections>
    );
};

export default SectionFaq;
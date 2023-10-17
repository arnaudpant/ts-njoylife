import Plumes from "../../Plumes";
import Sections from "./Sections";


const SectionEvenements = () => {
    return (
        <>

            <Sections fond="vert">
                <h2 className="text-2xl md:text-4xl font-semibold m-5">COURS COLLECTIFS</h2>
                <div className="flex flex-col items-center gap-4 mt-4">
                        <p className="pb-4">
                            Venez prendre un temps pour vous au <strong>Bois de l'Utopie</strong> dans la salle du "Petit Prince", un espace très chaleureux au cœur de la nature.
                        </p>
                        <p className="pb-4">
                            Salle chauffée au poêle à bois en hiver.
                        </p>
                        <p className="pb-4">
                            Cours collectifs en petit groupe de 6 personnes.
                        </p>
                </div>

            </Sections>
            <Sections>
                <h2 className="text-2xl md:text-4xl font-semibold m-5">PILATES</h2>
                <div className="flex flex-col items-center gap-4 mt-4">
                        <p className="pb-4">Les mardis à 18H15</p>
                        <p className="pb-4">
                            La gym Pilâtes renforce tous les muscles profonds, elle est axée sur la conscience du corps et la colonne vertébrale.
                        </p>
                        <p className="pb-4">
                            Petits groupes de 10 personnes maximum.
                        </p>
                </div>
                <div className="mt-8">
                    <Plumes />
                </div>
            </Sections>
        </>
    );
};

export default SectionEvenements;
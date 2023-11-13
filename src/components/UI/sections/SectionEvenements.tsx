import Sections from "./Sections";


const SectionEvenements = () => {
    return (
        <>

            <Sections fond="vert">

                <div className="w-full flex flex-col-reverse md:flex-row">
                    {/*  Text */}
                    <div className="md:w-1/2 text-center p-8">
                        <h2 className="text-2xl md:text-4xl font-semibold">COURS COLLECTIFS</h2>
                        <div className="flex flex-col items-center justify-center mt-4">
                            <p className="pt-2 text-lg">
                                Cours collectifs en petit groupe de 6 personnes.
                            </p>
                            <p className="pt-2">
                                Pour les informations de lieux, merci de me contacter
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="mx-auto md:w-1/2">
                        <img src="/photos/photo-cours-collectif.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row bg-primairevar">
                    {/* Image */}
                    <div className="mx-auto md:w-1/2">
                        <img src="/photos/photo-pilate.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                    </div>
                    <div className="md:w-1/2 text-center p-8">
                        {/* Text */}
                        <h2 className="text-2xl md:text-4xl font-semibold">PILATES</h2>
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <p className="pb-4">Les mardis à 18H15</p>
                            <p className="pb-4">
                                La gym Pilâtes renforce tous les muscles profonds, elle est axée sur la conscience du corps et la colonne vertébrale.
                            </p>
                            <p className="pb-4 text-lg">
                                Petits groupes de 10 personnes maximum.
                            </p>
                        </div>
                    </div>

                </div>
            </Sections>
        </>
    );
};

export default SectionEvenements;
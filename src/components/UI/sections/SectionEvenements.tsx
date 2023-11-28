import Sections from "./Sections";


const SectionEvenements = () => {
    return (
        <>

            <Sections fond="vert">

                <div className="flex flex-col items-center">

                    {/* BOX 1 */}
                    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
                        {/*  Text */}
                        <div className="md:w-1/2 md:max-w-[640px] text-center p-8">
                            <h2 className="font-title text-2xl md:text-4xl font-semibold">COURS COLLECTIFS</h2>
                            <div className="flex flex-col items-center gap-4 mt-4 text-lg">
                                <p className="pt-8">
                                    Venez prendre un temps pour vous.
                                </p>
                                <p className="pt-2">
                                    Cours collectifs en petit groupe de 6 personnes.
                                </p>
                            </div>

                        </div>
                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[640px]">
                            <img src="/photos/photo-cours-collectif.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                        </div>
                    </div>

                    {/* BOX 2 */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[640px]">
                            <img src="/photos/pilate.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                        </div>
                        <div className="md:w-1/2 md:max-w-[640px] text-center p-8">
                            {/* Text */}
                            <h2 className="font-title text-2xl md:text-4xl font-semibold">PILATES</h2>
                            <div className="flex flex-col items-center gap-4 mt-4 text-lg">
                                <p className="pb-4">
                                    La gym Pilâtes renforce tous les muscles profonds, elle est axée sur la conscience du corps et la colonne vertébrale via la respiration.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Sections>
        </>
    );
};

export default SectionEvenements;
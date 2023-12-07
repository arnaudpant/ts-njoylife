import SectionInfos from "../components/UI/sections/SectionInfos";
import Sections from "../components/UI/sections/Sections";


const Ateliers = () => {
    return (
        <>
            <Sections fond="vert">

                <h1 className="text-2xl font-title md:text-4xl font-bold text-center my-4">ATELIERS</h1>

                <div className="flex flex-col items-center gap-8 md:gap-0">

                    {/* BOX 1 */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        
                        {/*  Text */}
                        <div className="md:w-1/2 md:max-w-[640px] text-center p-5">
                            <h2 className="font-title text-xl md:text-2xl font-semibold">RELAXATION SONORE</h2>
                            <div className="flex flex-col items-center gap-4 mt-4 text-lg">
                                <p className="pt-5">
                                    Relaxation au tambour, bols de cristal, instruments intuitifs & voix
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[400px] px-4 md:my-4">
                            <img src="/photos/relax-sonore.jpeg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                        </div>

                    </div>


                    {/* BOX 2 */}
                    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center bg-tealB">
                        
                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[400px] px-4 my-4">
                            <img src="/photos/cercle-pardon.jpeg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
                        </div>


                        <div className="md:w-1/2 text-center p-8">
                            {/* Text */}
                            <h2 className="font-title text-xl md:text-2xl font-semibold">CERCLE DE PARDON</h2>
                            <div className="flex flex-col items-center gap-2 mt-4 text-lg">
                                <p>
                                    Venez expérimenter une nouvelle approche laïque du pardon.
                                </p>
                                <p>
                                    Créés en 2012 par Olivier CLERC, les Cercles de Pardon ont pour objectif de vous faire vivre en deux
                                    ou trois heures un très beau rituel de guérison du coeur, aussi simple que puissant.
                                </p>
                                <p>
                                    Approche transpersonnelle, un Cercle de Pardon vous donne l'occasion de faire oeuvre de pardon
                                    vis-à-vis des autres et de vous-même, y compris par rapport à des personnes non présentes, sans
                                    avoir à évoquer devant autrui vos problèmatiques ou blessures personnelles.
                                </p>
                                <p className="pb-2">
                                    Il permet à votre coeur de guérir et de se libérer des couches de rancune, de tristesse ou de haine
                                    qui l'empêchent d'aimer pleinement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </Sections>

            <SectionInfos />
        </>
    );
};

export default Ateliers;
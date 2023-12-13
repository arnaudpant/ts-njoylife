import Sections from "../../components/UI/sections/Sections";

const SectionAccompagnement = () => {
    return (
        <Sections fond="vert">

            <div className="container flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 max-h-[427px]">
                    <img src="/photos/photo-vitalite.jpg" alt="personne pleine de vitalité sautant en l'air" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center text-center text-lg md:text-xl">
                    <h2 className="font-title  text-2xl md:text-4xl font-semibold p-8">ACCOMPAGNEMENT INDIVIDUEL</h2>
                    <p className="px-4">Coaching personnalisé en pack de 4 séances qui comprend:</p>
                    <p className="pb-4 px-4">2 ou 3 piliers selon vos besoins:</p>
                    <div className="mx-auto px-4">
                        <ul className="text-left pb-4">
                            <li>
                                ▸ Nutrition / Gestion des stress
                            </li>
                            <li>
                                ▸ Nutrition / Sport
                            </li>
                            <li>
                                ▸ Nutrition / Gestion des stress / Sport
                            </li>
                        </ul>
                    </div>
                    <p className="pb-4 px-4">Je suis à votre disposition du début à la fin de
                        l'accompagnement, en présentiel ou par visio/téléphone.</p>
                    <p className="pb-4 px-4"> Vous recevez un mail après chaque séance avec des fiches,
                        des conseils, des audios et vidéos.</p>
                </div>

            </div>
        </Sections>
    );
};

export default SectionAccompagnement;
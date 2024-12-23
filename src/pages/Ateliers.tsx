import { CalendarSearch, Clock7, Info, MapPin } from "lucide-react";
import Plumes from "../components/UI/plumes/Plumes";
import SectionInfos from "../components/UI/sections/SectionInfos";
import Sections from "../components/UI/sections/Sections";
import Bouton from "../components/UI/buttons/Bouton";
import { Link } from "react-router-dom";

const Ateliers = () => {
    return (
        <>
            <Sections fond="vert">
                <h1 className="text-2xl font-title md:text-4xl font-bold text-center my-4">
                    ATELIERS
                </h1>

                <div className="flex flex-col items-center gap-8 md:gap-0">
                    <div className="flex flex-col justify-center items-center p-4 my-8 mx-2 bg-action text-center text-blanc rounded-lg shadow-md">
                        <p className="pb-4 text-white text-xl">
                            PROGRAMME 2025
                        </p>
                        <h3 className="font-title text-lg md:text-xl font-semibold tracking-widest pb-1">
                            Relaxation guidée au{" "}
                            <span className="text-secondaire">tambour</span>,{" "}
                            <span className="text-secondaire">
                                bols de cristal
                            </span>
                            , instruments intuitif & voix
                        </h3>
                        <p>
                            « Voyage intérieur pour libérer les tensions et
                            retrouver la sérénité »
                        </p>
                        <p>
                            Ces séances sont basées sur une des fonctions
                            essentielles à la vie :{" "}
                            <span className="text-secondaire">
                                la respiration
                            </span>
                        </p>
                        <CalendarSearch className="mt-4" />
                        <p className="pt-2">Mercredi 5 février 2025</p>
                        <p>Vendredi 7 mars 2025</p>
                        <p>Vendredi 4 avril 2025</p>
                        <p>Mercredi 7 mai 2025</p>
                        <p>Mercredi 11 juin 2025</p>
                        <div className="flex items-center justify-center gap-2 my-4">
                            <Clock7 />
                            <p>De 18h à 19h15</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MapPin />
                            <Link
                                to="https://lafermedesessarts.com/stages-formations-retraites-art-therapie-yoga-chamanisme/"
                                target="_blank"
                            >
                                <p>
                                    Ferme des Essards <br />
                                </p>
                            </Link>
                        </div>
                        <Link
                            to="https://lafermedesessarts.com/stages-formations-retraites-art-therapie-yoga-chamanisme/"
                            target="_blank"
                        >
                            <p>
                                705 chemin du four à chaud
                                <br />
                                26750 Saint Paul les Romans
                            </p>
                        </Link>
                        <p className="pt-4 text-sm">
                            Participation consciente 20€
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-6 text-secondaire">
                            <p className="text-lg">Réservation et info</p>
                            <Info />
                        </div>
                        <div
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                            className="flex flex-col md:flex-row gap-4 my-4"
                        >
                            <Bouton
                                itemProp="telephone"
                                href="tel:+33651486895"
                                label="+33(0)6 51 48 68 95"
                            />
                        </div>
                    </div>
                    {/* BOX 1 */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        {/*  Text */}
                        <div className="md:w-1/2 md:max-w-[640px] text-center p-5">
                            <h2 className="font-title text-xl md:text-2xl font-semibold">
                                RELAXATION SONORE
                            </h2>
                            <div className="flex flex-col items-center gap-4 mt-4 text-lg">
                                <p>
                                    La relaxation sonore est à mi-chemin entre
                                    la méditation de pleine conscience et le
                                    massage sonore. Elle vous invite à vivre un
                                    profond voyage intérieur, vous permettant de
                                    laisser place au calme en vous. Stress,
                                    émotions intenses, ruminations mais aussi
                                    troubles du sommeil peuvent être apaisés
                                    grâce aux sons de relaxation.
                                </p>
                                <p className="pt-5">
                                    Relaxation au tambour, bols de cristal,
                                    instruments intuitifs & voix
                                </p>
                                <p>
                                    L’objectif d’une séance est de faire
                                    circuler l’énergie vitale de façon
                                    harmonieuse et de vous aider à retrouver un
                                    état de sérénité en diminuant le flot de
                                    pensées, les émotions limitantes et les
                                    tensions.
                                </p>
                                <p>
                                    Praticienne en relaxation sonore, je vous
                                    aide à créer un bel espace à l’intérieur de
                                    vous même et à augmenter votre taux
                                    vibratoire pour déployer votre énergie au
                                    quotidien.
                                </p>
                                <p>
                                    Séance en groupe ou individuelle. Merci de
                                    m’envoyer un message pour connaître les
                                    dates d’ateliers collectifs, ou si vous
                                    souhaitez vivre une séance en individuel.
                                </p>
                                <p className="pt-8 font-semibold">
                                    Relaxation au tambour, HANDPAN, bols de
                                    cristal, CARILLONS, instruments intuitifs &
                                    voix.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[400px] px-4 md:my-4">
                            <img
                                src="/photos/relax-sonore.jpeg"
                                alt="bols de cristal et bougies"
                                className="h-full bg-contain"
                            />
                        </div>
                    </div>
                    <Plumes />

                    {/* BOX 2 */}
                    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center bg-tealB">
                        {/* Image */}
                        <div className="md:w-1/2 md:max-w-[400px] px-4 my-4">
                            <img
                                src="/photos/cercle-pardon.jpeg"
                                alt="logo cercle de pardon"
                                className="h-full bg-contain shadow-lg"
                            />
                        </div>

                        <div className="md:w-1/2 text-center p-8">
                            {/* Text */}
                            <h2 className="font-title text-xl md:text-2xl font-semibold">
                                CERCLE DE PARDON
                            </h2>
                            <div className="flex flex-col items-center gap-2 mt-4 text-lg">
                                <p>
                                    Venez expérimenter une nouvelle approche
                                    laïque du pardon.
                                </p>
                                <p>
                                    Créés en 2012 par Olivier CLERC, les Cercles
                                    de Pardon ont pour objectif de vous faire
                                    vivre en deux ou trois heures un très beau
                                    rituel de guérison du coeur, aussi simple
                                    que puissant.
                                </p>
                                <p>
                                    Approche transpersonnelle, un Cercle de
                                    Pardon vous donne l'occasion de faire oeuvre
                                    de pardon vis-à-vis des autres et de
                                    vous-même, y compris par rapport à des
                                    personnes non présentes, sans avoir à
                                    évoquer devant autrui vos problèmatiques ou
                                    blessures personnelles.
                                </p>
                                <p className="pb-2">
                                    Il permet à votre coeur de guérir et de se
                                    libérer des couches de rancune, de tristesse
                                    ou de haine qui l'empêchent d'aimer
                                    pleinement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Sections>

            <SectionInfos map={false} />
        </>
    );
};

export default Ateliers;

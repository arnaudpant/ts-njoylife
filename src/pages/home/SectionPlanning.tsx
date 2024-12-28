import { Link } from "react-router-dom";
import Plumes from "../../components/UI/plumes/Plumes";


const SectionPlanning = () => {
    return (
        <section className="flex flex-col items-center md:justify-evenly w-full px-4 text-center bg-secondaire text-blanc">
            <h2 className="text-2xl md:text-4xl font-semibold pt-4 md:pt-8">
                Dernières infos
            </h2>
            <p className="text-blanc py-4 text-lg">
                Atelier Relaxation guidée au tambour, bols de cristal,
                instruments intuitif & voix
            </p>
            <Link to="/ateliers">
                <p className="text-lg pb-4 md:pb-8">
                    Toutes les infos et réservation dans la section <span className="text-xl">ATELIERS</span>
                </p>
            </Link>
            <Plumes color="blanche" />
        </section>
    );
};

export default SectionPlanning;
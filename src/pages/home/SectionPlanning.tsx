import { Link } from "react-router-dom";


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
                <p className="text-lg pb-4">
                    Toutes les infos et réservation dans la section <span className="text-action">ATELIERS</span>
                </p>
            </Link>
        </section>
    );
};

export default SectionPlanning;


const SectionAbout = () => {
    return (
        <section className="flex flex-col items-center md:justify-evenly w-full bg-tealB">
            {/* TITLES */}
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5">MON PARCOURS</h2>
            <h2 className="text-xl md:text-3xl m-2">Je suis Jo&euml;lle Corda</h2>
            <h3 className="md:text-xl">Naturopathe, Sophrologue et Éducatrice Sportive</h3>
            {/* BLOC 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                <div className="md:w-1/3">
                    <img src="/photos/about-joelle.png" alt="portrait de Joelle Corda" />
                </div>
                <div className="md:w-2/3 ml-4 md:ml-0 mr-4 md:mr-8">
                    <p className="pb-4">
                        Le bien-être est le fil d’argent de mon parcours
                        professionnel depuis 30 ans.
                    </p>
                    <p className="pb-4">
                        Esthéticienne de mon premier métier, je m’ouvre
                        au langage du corps par la pratique et
                        l’enseignement de l’expression corporelle
                        (Brevets d’États fitness et Sports pour Tous).
                    </p>
                    <p className="pb-4">
                        En 1999 J'étudie la Naturopathie en cursus
                        intensif à l'école Euronature d'Aix en Provence,
                        complété par le certificat de Conseillère en
                        Nutrition & Diététique à l'école Naturilys en
                        2017.
                    </p>
                    <p className="pb-4">
                        Après le certificat de Relaxologue en 2010
                        j’expérimente les techniques de Relaxation
                        psycho corporelle, ainsi que la Sophrologie
                        Caycédienne dont je suis certifiée depuis 2015.
                    </p>
                    <p className="pb-4">
                        Je suis sur la voie, celle de l’épanouissement
                        personnel et vous propose de vous partager mon
                        savoir-faire et mon savoir-être en toute
                        humilité.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default SectionAbout;
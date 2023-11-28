

const SectionAbout = () => {
    return (
        <section className="flex flex-col items-center md:justify-evenly w-full bg-tealB">
            {/* TITLES */}
            <h2 className="font-title text-2xl md:text-4xl font-semibold m-5">A PROPOS DE MOI</h2>
            <h2 className="text-xl md:text-3xl m-2">Je suis Jo&euml;lle Corda</h2>
            <h3 className="md:text-xl">Naturopathe</h3>
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
            {/* BLOC 2 */}
            <div className="flex flex-col justify-center items-center mt-4">
                <h2 className="text-xl md:text-3xl m-2">Mes diplômes</h2>
                <div className="w-10 h-10">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 284 270.7" enable-background="new 0 0 284 270.7">
                        <g>
                            <path fill="#36B3A2" d="M139.4,13.6c31.3,0,62.6,0,94,0c21.5,0,31.6,10.1,31.6,31.9c0,42.7-0.3,85.3,0.2,128
		c0.2,19.2-10.9,32.6-31.3,31.2c-9.6-0.7-19.2-0.1-28.8-0.1c-4,0-8.4-1.1-7.3-5.8c0.5-2.4,4.8-5.6,7.6-5.8
		c10.3-0.7,20.7-0.2,31.1-0.3c10.9-0.1,16.3-4.8,16.3-15.6c0.2-45.1,0.2-90.3,0-135.4c-0.1-10.8-5.3-15.6-16.3-15.7
		c-64.6-0.1-129.2-0.1-193.8,0c-11,0-16.1,4.9-16.1,15.8c-0.2,45.1-0.2,90.3,0,135.4c0,10.7,5.4,15.4,16.5,15.5
		c12.1,0.1,24.2,0.1,36.3,0c4.5,0,8.8,0.5,8.6,6.4c-0.1,5.8-4.5,5.4-8.6,5.4c-12.6,0-25.2,0.1-37.7,0c-16.4-0.1-27.2-10-27.3-26.6
		c-0.4-45.6-0.4-91.2,0-136.9c0.1-17.2,11.5-27.3,29.2-27.4C75.3,13.5,107.4,13.6,139.4,13.6z"/>
                            <path fill="#36B3A2" d="M155,226.2c-4.9,9.9-9.4,19.5-14.5,28.7c-1.5,2.7-4.7,6.2-7,6.1c-2.3-0.1-5.3-3.8-6.7-6.5
		c-15.3-31-23.6-63.6-23-98.3c0.2-14.8,8.3-25.2,21.1-31.4c12.9-6.2,25.6-4.1,36.7,4.8c8.2,6.6,13.5,15.2,13.4,26.1
		c-0.3,23.4,5.5,45.3,15.2,66.4c1.4,3,1,6.8,1.4,10.3c-3.9,0.4-8,1.7-11.6,0.9C171.7,231.5,163.6,228.7,155,226.2z M139.4,180.8
		c13.1,0,23.7-10.4,23.8-23.2c0.1-13.1-10.8-24.2-23.8-24.2c-13.1,0-23.7,10.9-23.6,24.3C115.9,170.6,126.2,180.8,139.4,180.8z"/>
                            <path fill="#36B3A2" d="M140.2,53.6c21.9,0,43.8-0.2,65.8,0.2c2.9,0.1,7.7,2.6,8.3,4.8c1.5,5.6-3,6.8-7.7,6.8
		c-18.5,0-36.9,0-55.4,0c-25.9,0-51.7,0-77.6,0c-4.3,0-9.3,0.4-9.4-5.5c-0.2-6.2,4.9-6.3,9.5-6.3C95.9,53.6,118.1,53.6,140.2,53.6z"
                            />
                            <path fill="#36B3A2" d="M139.2,95.5c-12.3,0-24.6,0-36.9,0c-4.4,0-8.4-0.9-8.5-6c0-5.2,4.2-5.8,8.5-5.8c24.9,0,49.7,0,74.6,0
		c3.9,0,7.9,0.6,8.1,5.5c0.2,5.1-3.7,6.4-8.1,6.4C164.3,95.5,151.8,95.5,139.2,95.5C139.2,95.5,139.2,95.5,139.2,95.5z"/>
                        </g>
                    </svg>
                </div>
                <div>
                    <ul className="px-4 space-y-4">
                        <li>• Naturopathe</li>
                        <li>
                            • Conseillère en Nutrition et Diététique
                        </li>
                        <li>
                            • Brevets d’États fitness et Sports pour
                            Tous
                        </li>
                        <li>
                            • Sophrologue certifiée RNCP
                        </li>
                        <li>
                            • Relaxologue certifiée CEFER
                        </li>
                        <li>
                            • Esthéticienne cosméticienne DE
                        </li>
                        <li>
                            • Membre de l’Organisation de la Médecine
                            Naturelle et de l'Education Sanitaire
                            ainsi que du Registre des Naturopathes
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap justify-center gap-4 my-8">
                    <img src="/diplomes/logo-diplome1.png" alt="logo diplome" className="h-28" />
                    <img src="/diplomes/logo-diplome2.png" alt="logo diplome" className="h-28" />
                    <img src="/diplomes/logo-diplome3.png" alt="logo diplome" className="h-28" />
                    <img src="/diplomes/logo-diplome4.jpg" alt="logo diplome" className="h-28" />
                </div>
            </div>
            <div className="mt-8">
            </div>
        </section>
    );
};

export default SectionAbout;
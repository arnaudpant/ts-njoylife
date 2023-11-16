import Sections from "./Sections";

const SectionWhyMe = () => {
    return (
        <Sections fond="vert">
            <h2 className="text-2xl md:text-4xl font-semibold m-5">Pourquoi me choisir ?</h2>
            <h2 className="text-xl md:text-3xl m-2">Naturopathe et aussi ...</h2>
            <div className="container mx-auto px-4 my-4">
                <p className="pb-4">
                    Je fais partie des naturopathes à être diplomée d'Etat
                    en Education Sportive, un atout pour vous aider à
                    résoudre définitivement vos problèmes de poids et vos
                    stress.
                </p>
                <p className="pb-4">
                    Etant Educatrice de Santé, je vous aide à atteindre vos
                    objectifs à travers une large palette d’outils, pour
                    retrouver harmonie et dynamisme dans la joie de vivre.
                </p>
                <p className="pb-4">
                    En complément, je prodigue des massages relaxants
                    (Californien, Infini et Kansu), ainsi que de la réfléxologie ventrale (Chi Nei Tsang).
                </p>

                <p className="pb-4">
                    Formée à la méthode TPV (Théorie Polyvagale). Cette
                    méthode de neurophysiologie va vous permettre de
                    retrouver votre pleine confiance.
                </p>
                <p className="pb-4">
                    Laissez moi vous accompagner vers la liberté d’Être afin
                    de devenir qui vous êtes profondément et consciemment
                    dans toutes vos infinies possibilités !
                </p>
            </div>
        </Sections>
    );
};

export default SectionWhyMe;
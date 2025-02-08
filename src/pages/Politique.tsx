import { useEffect } from "react";
import Sections from "../components/UI/sections/Sections";
import { Link } from "react-router-dom";

const Politique = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    return (
        <Sections>
            <div className="container mx-auto px-4 pb-16 pt-10 md:pt-4">
                <h1 className="font-title text-3xl text-center md:text-4xl font-semibold m-5">
                    POLITIQUE DE CONFIDENTIALITE
                </h1>
                <p className="text-center pb-8">
                    Date de mise à jour: 08 février 2025
                </p>
                <p>
                    Nous accordons une grande importance à la protection de
                    votre vie privée. Cette politique de confidentialité
                    explique comment nous collectons, utilisons et protégeons
                    vos données personnelles lors de votre visite sur notre site
                    web, conformément au Règlement Général sur la Protection des
                    Données (RGPD) et à la loi française "Informatique et
                    Libertés".
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Collecte et utilisation des données
                </h2>
                <p>
                    Notre site web utilise Google Analytics, un service
                    d'analyse web fourni par Google LLC.
                </p>
                <h3 className="text-md md:text-xl font-semibold mt-8 mb-2">
                    Nous collectons les données suivantes :
                </h3>
                <ul>
                    <li>- Pages visitées</li>
                    <li>- Temps passé sur le site</li>
                    <li>- Type d'appareil utilisé</li>
                    <li>- Localisation approximative (pays, région)</li>
                    <li>- Navigateur et système d'exploitation</li>
                    <li>
                        - Source du trafic (moteur de recherche, lien direct,
                        etc.)
                    </li>
                </ul>
                <p className="pt-2">
                    Ces données sont collectées de manière anonyme et ne
                    permettent pas d'identifier personnellement les utilisateurs
                </p>
                <h3 className="text-md md:text-xl font-semibold mt-8 mb-2">
                    Base légale du traitement
                </h3>
                <p>
                    Le traitement de vos données est basé sur votre
                    consentement, que vous pouvez retirer à tout moment
                </p>
                <h3 className="text-md md:text-xl font-semibold mt-8 mb-2">
                    Destinataires des données
                </h3>
                <p>
                    Les données collectées via Google Analytics sont transmises
                    et stockées par Google LLC aux États-Unis, conformément à
                    leur politique de confidentialité.
                </p>
                <h3 className="text-md md:text-xl font-semibold mt-8 mb-2">
                    Durée de conservation des données
                </h3>
                <p>
                    Les données collectées par Google Analytics sont conservées
                    pour une durée de 26 mois
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Vos droits
                </h2>
                <p>
                    Conformément au RGPD, vous disposez des droits suivants
                    concernant vos données personnelles :
                </p>
                <ul>
                    <li>- Droit d'accès</li>
                    <li>- Droit de rectification</li>
                    <li>- Droit à l'effacement</li>
                    <li>- Droit à la limitation du traitement</li>
                    <li>- Droit d'opposition</li>
                    <li>- Droit à la portabilité des données</li>
                </ul>
                <p className="pt-2">
                    Pour exercer ces droits ou pour toute question concernant
                    notre politique de confidentialité, veuillez nous contacter
                    à [insérez votre adresse e-mail de contact]2.
                </p>
                <p>
                    Vous avez également le droit d'introduire une réclamation
                    auprès de la Commission Nationale de l'Informatique et des
                    Libertés (CNIL).
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Cookies
                </h2>
                <p>
                    Google Analytics utilise des cookies pour collecter des
                    informations. Vous pouvez désactiver les cookies dans les
                    paramètres de votre navigateur ou utiliser le module
                    complémentaire de désactivation de Google Analytics
                    disponible{" "}
                    <Link to="/https://tools.google.com/dlpage/gaoptout" className="text-action">
                        ici
                    </Link>
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Transfert de données hors UE
                </h2>
                <p>
                    Les données collectées peuvent être transférées vers les
                    États-Unis par Google LLC. Ce transfert est encadré par les
                    clauses contractuelles types de la Commission européenne,
                    assurant un niveau de protection adéquat de vos données
                    personnelles
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Prise de décision automatisée et profilage
                </h2>
                <p>
                    Nous n'effectuons aucune prise de décision automatisée ni de
                    profilage à partir des données collectées.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">
                    Modifications de la politique de confidentialité
                </h2>
                <p>
                    Nous nous réservons le droit de modifier cette politique de
                    confidentialité à tout moment. Toute modification sera
                    publiée sur cette page avec une date de mise à jour révisée.
                    Nous vous encourageons à consulter régulièrement cette page
                    pour rester informé des éventuelles modifications2.
                </p>
                <p className="pt-4">
                    En utilisant notre site web, vous acceptez les termes de
                    cette politique de confidentialité.
                </p>
            </div>
        </Sections>
    );
};

export default Politique;

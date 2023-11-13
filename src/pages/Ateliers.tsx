import Plumes from "../components/Plumes";
import SectionInfos from "../components/UI/sections/SectionInfos";
import Sections from "../components/UI/sections/Sections";


const Ateliers = () => {
    return (
        <>
            <Sections fond="vert">
                <h1 className="text-2xl md:text-4xl font-bold text-center my-4">ATELIERS</h1>
                <h2 className="text-xl md:text-2xl font-bold text-center my-4">RELAXATION SONORE</h2>
                <p>2ème mardi de chaque mois à 20h00</p>
                <p>Relaxation au tambour chamanique Bols de cristal, instruments intuitifs & voix</p>
                <p>4ème mercredi de chaque mois à 20h00</p>
            </Sections>
            <Sections>
                <h2 className="text-xl md:text-2xl font-bold text-center my-4">CERCLE DE PARDON</h2>
                <p>4ème mardi de chaque mois à 20h</p>
                <p>
                    Venez expérimenter une nouvelle approche laïque du pardon.
                </p>
                <p>Créés en 2012 par Olivier CLERC, les Cercles de Pardon ont pour objectif de vous faire vivre en deux
                    ou trois heures un très beau rituel de guérison du coeur, aussi simple que puissant.</p>
                <p>Approche transpersonnelle, un Cercle de Pardon vous donne l'occasion de faire oeuvre de pardon
                    vis-à-vis des autres et de vous-même, y compris par rapport à des personnes non présentes, sans
                    avoir à évoquer devant autrui vos problèmatiques ou blessures personnelles.</p>
                <p>Il permet à votre coeur de guérir et de se libérer des couches de rancune, de tristesse ou de haine
                    qui l'empêchent d'aimer pleinement.</p>
                <p>Cette manière nouvelle d'aborder le pardon a déjà profité à des milliers de personnes, dans près
                    d'une dizaine de pays.</p>
            </Sections>
            <Plumes />
            <SectionInfos adress="" />
        </>
    );
};

export default Ateliers;
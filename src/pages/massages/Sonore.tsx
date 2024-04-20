import { useEffect } from 'react';
import Plumes from '../../components/UI/plumes/Plumes';
import SectionInfos from '../../components/UI/sections/SectionInfos';

const Sonore = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
            <div
                className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4"
                id="top-page"
            >
                <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">
                    RELAXATION SONORE
                </h1>
                <div className="h-52 overflow-hidden bg-page-sonore bg-center bg-cover rounded-xl mb-8"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-center my-4">
                    Comment se déroule une séance
                </h2>

                <div className="my-4 text-left leading-8">
                    <p>
                        J’utilise les sons et les vibrations des instruments qui
                        vous conviennent pour un voyage unique pour Vous. Les
                        bols de cristal, tibétains, le handpan, l’arbre de
                        pluie, les carillons et d’autres instrument intuitifs
                        ainsi que ma voix. Confortablement allongé(e), les yeux
                        fermés, vous vous laissez bercer par le chant des
                        instruments, qui vous mène peu à peu au lâcher prise.
                        Grâce aux sons et à ma voix, vous êtes entre veille et
                        sommeil, tout votre corps se détend.
                        <br />
                        S’il y a des douleurs, elles peuvent également
                        s’apaiser.
                    </p>
                    <p className="pt-4">
                        Votre seule mission est de vous laisser envelopper par
                        les vibrations produites qui vous plongent dans une
                        profonde détente. Celles-ci entrent doucement en
                        résonnance avec chacune de vos cellules. La relaxation
                        sonore stimule le système de neurotransmission, qui
                        permet aux deux hémisphères du cerveau d’entrer en mode
                        alpha, c’est à dire en détente et relaxation. Les ondes
                        thérapeutiques des bols et autres instruments se
                        propagent dans les différentes couches de votre corps
                        (physique, subtil) pour trouver l’harmonie. Vos forces
                        d’auto-guérison sont ainsi activées. Pendant une séance,
                        les notions d’espace et de temps s’évanouissent.
                        <br />
                        Vous entrez dans une forme de méditation.
                    </p>
                    <p className="pt-4">
                        Grâce à cette relaxation profonde, votre corps peut se
                        libérer de peurs, de souffrances ou d’émotions
                        désagréables et les remplacer par une véritable
                        sensation de bien-être dans la durée. La séance vous
                        aide à vous recentrer pour être plus à l’écoute de
                        vous-même, de vos intuitions et de vos besoins.
                        Apaisé(e), vous pouvez explorer petit à petit,
                        librement, votre intérieur et opérer les changements
                        essentiels à votre existence. Bien plus qu’un moment de
                        détente, la relaxation sonore vous accompagne dans un
                        processus de changement.
                        <br />
                        Une véritable porte d’entrée au mieux être, à tous les
                        niveaux.
                        <br />
                        La séance peut être précédée par un tirage d’Oracle.
                    </p>
                </div>
            </div>

            <Plumes />
            <SectionInfos map={false} />
        </div>
    );
};

export default Sonore;
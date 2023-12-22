import { useEffect } from "react";
import Plumes from "../../components/UI/plumes/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import { Link } from "react-router-dom";

const Sport = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    return (
        <>
            <div className="container max-w-screen-lg flex flex-col mx-auto mt-14 md:mt-0 px-4" id="top-page">
                <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">SPORT POUR TOUS</h1>

                <div className="h-40 overflow-hidden bg-page-sport bg-center bg-cover rounded-xl mb-4"></div>

                <p className="text-center text-lg">
                    "Vous souhaitez tonifier votre corps ou tout simplement retrouver un bien-être corporel dans les sensations"
                </p>


                <div className="my-4">
                    <h2 className="text-xl md:text-2xl font-semibold my-4">
                    Accompagnement pour Adultes, Séniors et Périodes Pré/Post-Natales
                    </h2>

                    <h3 className="text-lg md:text-xl pt-6 pb-2">
                    Rétablir l'Équilibre et la Fluidité Corporelle
                    </h3>
                    
                    <p className="pb-2">
                    Retrouvez la fluidité et la tonicité de votre corps grâce à des exercices spécifiques, 
                    ajustés en fonction de vos particularités physiques et de votre santé. 
                    Ces pratiques visent à développer la conscience corporelle et ses capacités, 
                    en mettant en lumière la <b>respiration</b> comme pilier central de la vie.
                    </p>
                </div>

                <div className="my-4">

                    <h3 className="text-lg md:text-xl pt-6 pb-2">Outils à Votre Disposition</h3>
                    <ul className="pl-2 md:pl-4">
                        <li className="font-bold">▸ Gymnastique Pilates</li>
                        <p className="pl-4 pb-4">
                        Une méthode douce et efficace pour renforcer et assouplir le corps en travaillant sur la stabilité et l'alignement postural.
                        </p>

                        <li className="font-bold">▸ Yoga</li>
                        <p className="pl-4 pb-4">
                        Une pratique millénaire permettant d'harmoniser le corps, l'esprit et la respiration pour cultiver la souplesse et la sérénité intérieure.
                        </p>

                        <li className="font-bold">▸ Entrainement fonctionnel</li>
                        <p className="pl-4 pb-4">
                        Des exercices fonctionnels pour développer la force, la mobilité et améliorer les gestes du quotidien.
                        </p>
                        <li className="font-bold">▸ Ecole du dos</li>
                        <p className="pl-4 pb-4">
                        Des exercices spécifiques visant à renforcer la musculature profonde du dos pour prévenir les douleurs et maintenir une colonne vertébrale saine.
                        </p>
                    </ul>

                    <p>
                        Ces outils sont conçus pour répondre à vos besoins spécifiques, que vous soyez adulte, senior ou que vous traversiez une période pré/post-natale.
                    </p>

                </div>

                <div className="mt-8 flex flex-col items-center">
                    <p className="text-center">Si vous souhaitez également retrouver une meilleure hygiène de vie, vous pouvez consulter le premier pilier:</p>
                    <Link to="/nutrition" className="cursor-pointer text-tealJ hover:text-tealH">NUTRITION</Link>
                </div>
                    <Plumes />
            </div>
            <SectionInfos />
        </>
    );
};

export default Sport;
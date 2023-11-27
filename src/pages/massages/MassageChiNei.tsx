import { useEffect } from "react";
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageChiNei = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}, [])
  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between">
      <div className="container max-w-screen-md  mx-auto mt-14 md:mt-0 px-4" id="top-page">

          <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE ENERGETIQUE</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Massage Chi Nei Tsang</h2>

          <div className="h-52 overflow-hidden bg-page-chinei bg-center bg-cover rounded-xl mb-4"></div>
          

          <div className="my-4 leading-8">
            <p>
              Le Chi Nei Tsang est une technique de réflexologie ventrale qui permet de soulager les problèmes digestifs physiques, il peut intervenir dans une démarche de perte ou reprise de poids.
            </p>
            <p>
              Il libère les émotions stockées dans nos intestins et les organes associés (foie relié à la colère, poumons reliés à la tristesse...) par détoxination et rechargement (sons, couleurs et visualisation).
            </p>
            <p>
              Vous êtes ainsi acteur de votre guérison.
              Ce soin physique et énergétique est très puissant.
            </p>
          </div>

        </div>

      <Plumes />
      <SectionInfos adress="sevigne" />
    </div>
  );
};

export default MassageChiNei;
import Plumes from "../../components/Plumes";
import SectionInfos from "../../components/UI/sections/SectionInfos";

const MassageChiNei = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row mx-auto mt-14 md:mt-0 px-4" id="top-page">
        <div className="md:w-1/2 text-center p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center my-4">MASSAGE ENERGETIQUE</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center my-4">Massage Chi Nei Tsang</h2>

          <div className="my-4">
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
        <div className="mx-auto md:w-1/2">
          <img src="/photos/photo-cours-collectif.jpg" alt="groupe de personnes enlassés" className="h-full bg-contain" />
        </div>
      </div>
      <Plumes />
      <SectionInfos adress="sevigne" />
    </>
  );
};

export default MassageChiNei;
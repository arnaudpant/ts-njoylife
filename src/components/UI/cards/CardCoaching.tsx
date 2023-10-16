import { Link } from "react-router-dom";
import { CardCoachingInfo } from "../../../types/CardsCoachingList";


const CardCoaching = (card: CardCoachingInfo) => {
    const { imgSrc, imgAlt, title, intro, liArr, link } = card

    return (
        <div className="flex flex-col w-[300px] shadow-card rounded-xl bg-white">
            {/* TITRE */}
            <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-center md:text-xl">{title}</h3>
            </div>
            {/* IMAGE */}
            <div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
            {/* TEXTE */}
            <div className="h-[190px] px-2 py-4">
                <p className="pb-1 text-lg">{intro}</p>
                <ul>
                    {liArr.map((li, index) => (
                        <li key={index} className="py-1 text-base">{li}</li>
                    ))}
                </ul>
            </div>
            {/* CALL TO ACTION */}
            <div className="mb-4 mx-auto">
                <Link to={link}>
                    <button className="px-4 py-2 bg-action text-blanc rounded-full">Cliquez pour en savoir plus</button>
                </Link>
            </div>
        </div>
    );
};

export default CardCoaching;
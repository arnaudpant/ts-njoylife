import { CardCoachingInfo } from "../types/CardsCoachingList"; 


const CardCoaching = (card: CardCoachingInfo) => {
    const {imgSrc, imgAlt, title, intro, liArr} = card

    return (
        <div className="">
            <h3 className="text-2xl md:text-3xl m-6">{title}</h3>
            <div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div>
                <p>{intro}</p>
                <ul>
                    {liArr.map((li, index) => (
                        <li key={index}>{li}</li>
                    ))}
                </ul>
            </div>
            <button className="px-4 py-2 bg-action text-blanc rounded-full">Cliquez pour en savoir plus</button>
        </div>
    );
};

export default CardCoaching;
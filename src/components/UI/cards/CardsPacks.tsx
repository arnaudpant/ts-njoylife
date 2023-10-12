import { CardPacks } from "../../../types/CardsPacksList";


const CardsPacks = (card: CardPacks) => {
    const { imgSrc, imgAlt, title } = card
    return (
        <div className="flex flex-col w-[300px] shadow-card rounded-xl bg-blanc">
            <div className="relative h-[100px] flex flex-col items-center justify-center">
                <img src={imgSrc} alt={imgAlt} className="absolute w-full" />
                <h3 className="text-xl text-center pl-10">PACK</h3>
                <h3 className="text-2xl text-center pl-10">{title}</h3>
            </div>
        </div>
    );
};

export default CardsPacks;
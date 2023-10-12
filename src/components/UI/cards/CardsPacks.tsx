import { CardPacks } from "../../../types/CardsPacks";


const CardsPacks = (card: CardPacks) => {
    const { imgSrc, imgAlt, title } = card
    return (
        <div className="flex flex-col w-[300px] shadow-card rounded-xl bg-blanc">
            <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-center md:text-xl">{title}</h3>
            </div>
        </div>
    );
};

export default CardsPacks;
import { CardMassageInfo } from "../../../types/CardsMassageList";

const CardMassage = (card: CardMassageInfo) => {
    const { imgSrc, imgAlt, title, time } = card
    return (
        <div>
            <div className="relative flex flex-col justify-center w-[300px] h-[200px] shadow-card rounded-xl bg-blanc overflow-hidden cursor-pointer">
                <img src={imgSrc} alt={imgAlt} className="absolute w-full " />
                <p className="absolute bg-action text-blanc text-2xl text-center py-1 rounded-full z-10 min-w-[180px] bottom-4 left-1/2 -translate-x-1/2 shadow-lg">{title}</p>
            </div>
                <p className="text-xl text-center py-3">{time}</p>

        </div>
    );
};

export default CardMassage;
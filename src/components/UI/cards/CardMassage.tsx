type CardMassageReflexologieInfo = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    time: string,
    link: string
}

const CardMassage = (card: CardMassageReflexologieInfo) => {
    const { imgSrc, imgAlt, title, time, link } = card
    return (
        <div>
            <a href={`${link}`}>
                <div className="relative flex flex-col justify-center w-[300px] h-[200px] shadow-card rounded-xl bg-tealA overflow-hidden cursor-pointer">
                    <img src={imgSrc} alt={imgAlt} className="absolute w-full " />
                    <p className="absolute bg-tealI text-tealA text-2xl text-center py-1 rounded-full z-10 min-w-[180px] bottom-4 left-1/2 -translate-x-1/2 shadow-lg">{title}</p>
                </div>

            </a>
            <p className="text-xl text-center py-3">{time}</p>

        </div>
    );
};

export default CardMassage;
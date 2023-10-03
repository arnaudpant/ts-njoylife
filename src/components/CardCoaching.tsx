interface Props {
    title: string,
    imgBg: string,
    imgBgAlt: string,
    imgAvatar: string,
    para: string,
    liArr: string[]
}

const CardCoaching = ({title, imgBg, imgBgAlt, imgAvatar, para, liArr}: Props) => {
    return (
        <div className="">
            <h2>{title}</h2>
            <div>
                <img src={imgBg} alt={imgBgAlt} />
                <img src={imgAvatar} alt="avatar" />
            </div>
            <div>
                <p>{para}</p>
                <ul>
                    {liArr.map((li, index) => (
                        <li key={index}>{li}</li>
                    ))}
                </ul>
            </div>
            <button>Cliquez pour en savoir plus</button>
        </div>
    );
};

export default CardCoaching;
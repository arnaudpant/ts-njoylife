export type CardPacks = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    link: string
}

export const CardsPacksList: CardPacks[] = [
    {
        imgSrc: "/cards/packs/pack-nutrition.png",
        imgAlt: "fruits et légumes",
        title: "NUTRITION",
        link: "/coaching-nutrition"
    },
    {
        imgSrc: "cards/packs/pack-stress.png",
        imgAlt: "femme seule sur la plage en méditation",
        title: "STRESS",
        link: "/coaching-gestion-stress"
    },
    {
        imgSrc: "cards/packs/pack-sport.png",
        imgAlt: "personnes faisant du yoga dehors",
        title: "SPORT",
        link: "/sport"
    },
]
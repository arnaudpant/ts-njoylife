export type CardCoachingInfo = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    intro: string,
    liArr: string[],
    link: string
}

export const CardsCoachingLlist: CardCoachingInfo[] = [
    {
        imgSrc: 'cards/coaching/card-nutrition.jpg',
        imgAlt: 'coaching nutrition',
        title: 'NUTRITION',
        intro: 'Vous voulez:',
        liArr: ['▸ Perdre du poids ou en reprendre', '▸ Rééquilibrer votre flore intestinale', '▸ Retrouver la santé'],
        link: "/coaching-nutrition"
    },
    {
        imgSrc: 'cards/coaching/card-stress.jpg',
        imgAlt: 'coaching gestion des stress',
        title: 'GESTION des STRESS et des EMOTIONS',
        intro: 'Vous souffrez de:',
        liArr: ['▸ Anxiétés, angoisses, insomnies', '▸ Migraines, acouphènes', '▸ Ulcère, contractures, spasmophilie...'],
        link: "/coaching-gestion-stress"
    },
    {
        imgSrc: 'cards/coaching/card-sport.jpg',
        imgAlt: 'coaching sport',
        title: 'SPORT SANTÉ',
        intro: 'Vous sortez:',
        liArr: ['▸ D\’une longue période sans activité physique', '▸ D\'une opération', '▸ D\'un burn-out, maladie, autre ...'],
        link: "/coaching-sport"
    },
]
export type CardCoachingInfo = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    intro: string,
    liArr: string[]
}

export const CardsCoachingLlist: CardCoachingInfo[] = [
    {
        imgSrc: 'cards/coaching/card-nutrition.jpg',
        imgAlt: 'photo de fruits et légumes',
        title: 'NUTRITION',
        intro: 'Vous voulez:',
        liArr: ['👉🏻 Perdre du poids ou en reprendre.', '👉🏻 Rééquilibrer votre flore intestinale.', '👉🏻 Retrouver la santé.']
    },
    {
        imgSrc: 'cards/coaching/card-stress.jpg',
        imgAlt: 'photo d une femme seule sur la plage',
        title: 'GESTION des STRESS et des EMOTIONS',
        intro: 'Vous souffrez:',
        liArr: ['👉🏻 Anxiétés, angoisses, insomnies.', '👉🏻 Migraines, acouphènes.', '👉🏻 Ulcère, contractures, spasmophilie...']
    },
    {
        imgSrc: 'cards/coaching/card-sport.jpg',
        imgAlt: 'personnes faisant du yoga dehors',
        title: 'SPORT pour TOUS',
        intro: 'Vous sortez:',
        liArr: ['👉🏻 D\’une longue période sans activité physique.', '👉🏻 D\'une opération.', '👉🏻 D\'un burn-out, maladie, autre ...']
    },
]
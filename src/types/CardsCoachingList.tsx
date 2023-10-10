export type CardCoachingInfo = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    intro: string,
    liArr: string[]
}

export const CardsCoachingLlist: CardCoachingInfo[] = [
    {
        imgSrc: 'images/photos/card-nutrition.jpg',
        imgAlt:'photo de fruits et légumes',
        title: 'NUTRITION',
        intro: 'Vous voulez:',
        liArr: ['Perdre du poids ou en reprendre.','Rééquilibrer votre flore intestinale.', 'Retrouver la santé.']
    },
    {
        imgSrc: 'images/photos/card-stress.jpg',
        imgAlt:'photo d une femme seule sur la plage',
        title: 'GESTION des STRESS et des EMOTIONS',
        intro: 'Vous souffrez:',
        liArr: ['Anxiétés, angoisses, insomnies.','Migraines, acouphènes.','Ulcère, contractures, spasmophilie...']
    },
    
]
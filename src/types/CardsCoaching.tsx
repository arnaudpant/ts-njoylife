type CardCoaching = {
    imgSrc: string,
    avatarScr: string,
    title: string,
    intro: string,
    li1: string,
    li2: string,
    li3: string,
}
const CardsCoaching: CardCoaching[] = [
    {
        imgSrc: 'images/photos/card-nutrition.jpg',
        avatarScr: 'images/woman/card-nutrition-woman.png',
        title: 'NUTRITION',
        intro: 'Vous voulez:',
        li1: 'Perdre du poids ou en reprendre.',
        li2: 'Rééquilibrer votre flore intestinale.',
        li3: 'Retrouver la santé.'
    },
    {
        imgSrc: 'images/photos/card-stress.jpg',
        avatarScr: 'images/woman/card-stress-woman.png',
        title: 'GESTION des STRESS et des EMOTIONS',
        intro: 'Vous souffrez:',
        li1: 'Anxiétés, angoisses, insomnies.',
        li2: 'Migraines, acouphènes.',
        li3: 'Ulcère, contractures, spasmophilie...'
    },
    
]

export default CardsCoaching;
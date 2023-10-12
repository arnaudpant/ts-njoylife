export type Adresses = {
    id: string,
    jours: string,
    heures: string,
    lieu: string,
    adresse: string,
    ville: string
}

export const ListAdresses: Adresses[] = [
    {
        id: "sevigne",
        jours: "Du lundi au samedi",
        heures: "9h à 19h",
        lieu: "",
        adresse: "11 rue Madame de Sévigné",
        ville: "26300 Bourg de Péage"
    },
    {
        id: "utopie",
        jours: "Les mardis",
        heures: "",
        lieu: "Le Bois de l'Utopie",
        adresse: "Chemin des Blanchards",
        ville: "26120 Chabeuil"
    },
    {
        id: "amour",
        jours: "Les mercredis",
        heures: "",
        lieu: "La maison d'Amour",
        adresse: "11 rue Madame de Sévigné",
        ville: "26300 Bourg de Péage"
    },
]
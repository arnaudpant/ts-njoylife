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
        adresse: "",
        ville: ""
    },
    {
        id: "utopie",
        jours: "Les mardis",
        heures: "",
        lieu: "",
        adresse: "",
        ville: ""
    },
    {
        id: "amour",
        jours: "Les mercredis",
        heures: "",
        lieu: "",
        adresse: "",
        ville: ""
    },
    {
        id: "sens",
        jours: "",
        heures: "",
        lieu: "Septième Sens",
        adresse: "45 allée du Vivarais",
        ville: "Bourg De Péage"
    },
]
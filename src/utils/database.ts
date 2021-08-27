const Database = [
    {
        name: 'S - Situation',
        button: true,
        substeps: [
            {
                name: 'Presentation',
                button: true,
                steps: [
                    "Presentation av dig själv med namn, titel, område",
                    "Presentation av vårdtagare med namen, ålder, personnummer och adress",
                    "Vad är problemet/anledningen till kontakten"
                ]
            }
        ]
    },
    {
        name: 'B - Bakgrund',
        button: true,
        substeps: [
            {
                name: 'Bröstsmärta',
                button: true,
                steps: [
                    "Presentation av dig själv med namn, titel, område",
                    "Presentation av vårdtagare med namen, ålder, personnummer och adress",
                    "Vad är problemet/anledningen till kontakten"
                ]
            }
        ]
    },
    {
        name: 'A - Aktuellt',
        button: true,
        substeps: [
            {
                name: 'Bröstsmärta',
                button: true,
                steps: [
                    "Presentation av dig själv med namn, titel, område",
                    "Presentation av vårdtagare med namen, ålder, personnummer och adress",
                    "Vad är problemet/anledningen till kontakten"
                ]
            }
        ]
    },
    {
        name: 'R - Rekommendation',
        button: true,
        substeps: [
            {
                name: 'Bröstsmärta',
                button: true,
                steps: [
                    "Presentation av dig själv med namn, titel, område",
                    "Presentation av vårdtagare med namen, ålder, personnummer och adress",
                    "Vad är problemet/anledningen till kontakten"
                ]
            }
        ]
    },
    {
        name: 'Skalor',
        button: true,
        substeps: [
            {
                name: 'Bröstsmärta',
                button: true,
                steps: [
                    "Presentation av dig själv med namn, titel, område",
                    "Presentation av vårdtagare med namen, ålder, personnummer och adress",
                    "Vad är problemet/anledningen till kontakten"
                ]
            }
        ]
    }
]

export const Categories = [
    { id: 1, name: "S - Situation", actions: ['Presentation'] },
    { id: 2, name: "B - Bakgrund" },
    { id: 3, name: "A - Aktuellt" },
    { id: 4, name: "R - Rekommendation" },
    { id: 5, name: "Skalor" },
]

export const SubCategories = [
    {
        parent: 1,
        id: 1,
        actions: ['Presentation'],
    }
]

export const Actions = [
    {
        id: 1,
        parent: 1,
        actions: [
            "Presentation av dig själv med namn, titel, område",
            "Presentation av vårdtagare med namen, ålder, personnummer och adress",
            "Vad är problemet/anledningen till kontakten"
        ]
    }
]

export default Database
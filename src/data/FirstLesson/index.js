// {
//     id: 1, id глагола
//     full_value: 'уйларга', полная форма
//     imperative: 'уйла', повелительное наклонение
//     если повелительная форма оканчивается на:
//     consonant: true, согласный
//     solid: true, твердый
// }

export const VERB_ENDINGS = {
    NOW: {
        CONSONANT: {
            SOLID: {
                I: "ам",
                YOU: "асың",
                HESHE: "а",
                WE: "абыз",
                YOUBIG: "асыз",
                THEY: "алар",
            },
            SOFT: {
                I: "əм",
                YOU: "əсең",
                HESHE: "ə",
                WE: "əбез",
                YOUBIG: "əсез",
                THEY: "əлəр",
            },
        },
        VOWEL: {
            SOLID: {
                I: "ыйм",
                YOU: "ыйсың",
                HESHE: "ый",
                WE: "ыйбыз",
                YOUBIG: "ыйсыз",
                THEY: "ыйлар",
            },
            SOFT: {
                I: "им",
                YOU: "исең",
                HESHE: "и",
                WE: "ибез",
                YOUBIG: "исез",
                THEY: "илəр",
            },
        },
    },
    PAST: {
        SOLID: {
            I: "дым",
            YOU: "дың",
            HESHE: "ды",
            WE: "дык",
            YOUBIG: "дыгыз",
            THEY: "ды(лар)",
        },
        SOFT: {
            I: "дем",
            YOU: "дең",
            HESHE: "де",
            WE: "дек",
            YOUBIG: "дегез",
            THEY: "де(лəр)",
        },
    },
    FUTURE: {
        SOLID: {
            I: "мын",
            YOU: "сың",
            HESHE: "",
            WE: "быз",
            YOUBIG: "сыз",
            THEY: "лар",
        },
        SOFT: {
            I: "мен",
            YOU: "сең",
            HESHE: "",
            WE: "без",
            YOUBIG: "сез",
            THEY: "лəр",
        },
    },
};
export const VERB_NEGATIVE = {
    NOW: {},
    PAST: {},
    FUTURE: {},
};

export const VERBS = [
    {
        id: 1,
        full_value: "алырга",
        imperative: "ал",
        consonant: true,
        solid: true,
    },
    {
        id: 2,
        full_value: "килəргə",
        imperative: "кил",
        consonant: true,
        solid: false,
    },
    {
        id: 3,
        full_value: "уйларга",
        imperative: "уйла",
        consonant: false,
        solid: true,
    },
    {
        id: 4,
        full_value: "эшлəргə",
        imperative: "эшлə",
        consonant: false,
        solid: false,
    },
];

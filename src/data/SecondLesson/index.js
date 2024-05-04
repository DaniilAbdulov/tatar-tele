import { VOICE, STATE, CASES, ALOT } from "../shared/index.js";
//VOICE.CONSONANT = для глагола это согласный звук. Для существительного глухой
//VOICE.VOWEL = для глагола это гласный звук. Для существительного звонкий звук

export const NOUNS_ENDINGS = {
    [CASES.NOMINATIVE]:{
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: '',
            [STATE.SOFT]: ''
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: '',
            [STATE.SOFT]: ''
        }
    },
    [CASES.POSSESSIVE]:{
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'ның',
            [STATE.SOFT]: 'нең'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'ның',
            [STATE.SOFT]: 'нең'
        }
    },
    [CASES.DIRECTIONAL]: {
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'га',
            [STATE.SOFT]: 'гә'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'ка',
            [STATE.SOFT]: 'кә'
        }
    },
    [CASES.ACCUSATIVE]: {
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'ны',
            [STATE.SOFT]: 'не'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'ны',
            [STATE.SOFT]: 'не'
        }
    },
    [CASES.LOCAL]:{
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'да',
            [STATE.SOFT]: 'дә'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'та',
            [STATE.SOFT]: 'тә'
        }
    },
    [CASES.ORIGINAL]:{
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'дан',
            [STATE.SOFT]: 'дән'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'тан',
            [STATE.SOFT]: 'тән'
        }
    }
}
export const NOUNS_ALOT_PART = {
    [ALOT.ON]: {
        [STATE.SOLID]: 'лар',
        [STATE.SOFT]: 'ләр'
    }
}
import { VOICE, STATE, CASES } from "../shared/index.js";
//VOICE.CONSONANT = для глагола это согласный звук. Для существительного глухой
//VOICE.VOWEL = для глагола это гласный звук. Для существительного звонкий звук

export const NOUNS_ENDINGS = {
    [CASES.ORIGINAL]:{
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'дан',
            [STATE.SOFT]: 'дән'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'тан',
            [STATE.SOFT]: 'тән'
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
    [CASES.DIRECTIONAL]: {
        [VOICE.CONSONANT]: {
            [STATE.SOLID]: 'га',
            [STATE.SOFT]: 'гә'
        },
        [VOICE.VOWEL]: {
            [STATE.SOLID]: 'ка',
            [STATE.SOFT]: 'кә'
        }
    }
}
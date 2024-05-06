import {SOUND, STATE, CASES, ALOT, VOICE, GENERAL} from '../shared/index.js';

export const NOUNS_ENDINGS = {
  [CASES.NOMINATIVE]: {
    [SOUND.RING]: {
      [STATE.SOLID]: '',
      [STATE.SOFT]: '',
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: '',
      [STATE.SOFT]: '',
    },
  },
  [CASES.POSSESSIVE]: {
    [SOUND.RING]: {
      [STATE.SOLID]: 'ның',
      [STATE.SOFT]: 'нең',
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: 'ның',
      [STATE.SOFT]: 'нең',
    },
  },
  [CASES.DIRECTIONAL]: {
    [SOUND.RING]: {
      [STATE.SOLID]: 'га', //sound:1 state:1
      [STATE.SOFT]: 'гә', //sound:1 state:2
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: 'ка', //sound:2 state:1
      [STATE.SOFT]: 'кә', //sound:2 state:2
    },
  },
  [CASES.ACCUSATIVE]: {
    [SOUND.RING]: {
      [STATE.SOLID]: 'ны',
      [STATE.SOFT]: 'не',
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: 'ны',
      [STATE.SOFT]: 'не',
    },
  },
  [CASES.LOCAL]: {
    [SOUND.RING]: {
      [STATE.SOLID]: 'да',
      [STATE.SOFT]: 'дә',
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: 'та',
      [STATE.SOFT]: 'тә',
    },
  },
  [CASES.ORIGINAL]: {
    [SOUND.RING]: {
      [STATE.SOLID]: 'дан',
      [STATE.SOFT]: 'дән',
    },
    [SOUND.DEAF]: {
      [STATE.SOLID]: 'тан',
      [STATE.SOFT]: 'тән',
    },
  },
};
export const NOUNS_ALOT_PART = {
  [ALOT.ON]: {
    [STATE.SOLID]: 'лар',
    [STATE.SOFT]: 'ләр',
  },
  [ALOT.OFF]: {
    [STATE.SOLID]: 'нар',
    [STATE.SOFT]: 'нәр',
  },
};
export const NOUNS_AFFILIATION_PART = {
  [VOICE.CONSONANT]: {
    [STATE.SOLID]: {
      [GENERAL.I]: 'ым',
      [GENERAL.YOU]: 'ың',
      [GENERAL.HS]: 'ы',
      [GENERAL.WE]: 'ыбыз',
      [GENERAL.YOUBIG]: 'ыгыз',
      [GENERAL.THEY]: 'ы',
    },
    [STATE.SOFT]: {
      [GENERAL.I]: 'ем',
      [GENERAL.YOU]: 'ең',
      [GENERAL.HS]: 'е',
      [GENERAL.WE]: 'ебез',
      [GENERAL.YOUBIG]: 'егез',
      [GENERAL.THEY]: 'е',
    },
  },
  [VOICE.VOWEL]: {
    [STATE.SOLID]: {
      [GENERAL.I]: 'м',
      [GENERAL.YOU]: 'ң',
      [GENERAL.HS]: 'сы',
      [GENERAL.WE]: 'быз',
      [GENERAL.YOUBIG]: 'гыз',
      [GENERAL.THEY]: 'сы',
    },
    [STATE.SOFT]: {
      [GENERAL.I]: 'м',
      [GENERAL.YOU]: 'ң',
      [GENERAL.HS]: 'се',
      [GENERAL.WE]: 'без',
      [GENERAL.YOUBIG]: 'гез',
      [GENERAL.THEY]: 'се',
    },
  },
};

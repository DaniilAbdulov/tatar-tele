import {GENERAL, VOICE, STATE} from '../shared/index';
//verbsEndings
export const NOW_VERB_ENDINGS = {
  [VOICE.CONSONANT]: {
    [STATE.SOLID]: {
      [GENERAL.I]: 'ам',
      [GENERAL.YOU]: 'асың',
      [GENERAL.HS]: 'а',
      [GENERAL.WE]: 'абыз',
      [GENERAL.YOUBIG]: 'асыз',
      [GENERAL.THEY]: 'алар'
    },
    [STATE.SOFT]: {
      [GENERAL.I]: 'əм',
      [GENERAL.YOU]: 'əсең',
      [GENERAL.HS]: 'ə',
      [GENERAL.WE]: 'əбез',
      [GENERAL.YOUBIG]: 'əсез',
      [GENERAL.THEY]: 'əлəр'
    }
  },
  [VOICE.VOWEL]: {
    [STATE.SOLID]: {
      [GENERAL.I]: 'ыйм',
      [GENERAL.YOU]: 'ыйсың',
      [GENERAL.HS]: 'ый',
      [GENERAL.WE]: 'ыйбыз',
      [GENERAL.YOUBIG]: 'ыйсыз',
      [GENERAL.THEY]: 'ыйлар'
    },
    [STATE.SOFT]: {
      [GENERAL.I]: 'им',
      [GENERAL.YOU]: 'исең',
      [GENERAL.HS]: 'и',
      [GENERAL.WE]: 'ибез',
      [GENERAL.YOUBIG]: 'исез',
      [GENERAL.THEY]: 'илəр'
    }
  }
};

export const PAST_VERB_ENDINGS = {
  [STATE.SOLID]: {
    [GENERAL.I]: 'дым',
    [GENERAL.YOU]: 'дың',
    [GENERAL.HS]: 'ды',
    [GENERAL.WE]: 'дык',
    [GENERAL.YOUBIG]: 'дыгыз',
    [GENERAL.THEY]: 'ды(лар)'
  },
  [STATE.SOFT]: {
    [GENERAL.I]: 'дем',
    [GENERAL.YOU]: 'дең',
    [GENERAL.HS]: 'де',
    [GENERAL.WE]: 'дек',
    [GENERAL.YOUBIG]: 'дегез',
    [GENERAL.THEY]: 'де(лəр)'
  }
};

export const PAST_NEGATIVE_VERB_PARTS = {
  [STATE.SOLID]: 'ма',
  [STATE.SOFT]: 'мə'
};

export const FUTURE_VERB_ENDINGS = {
  [STATE.SOLID]: {
    [GENERAL.I]: 'мын',
    [GENERAL.YOU]: 'сың',
    [GENERAL.HS]: '',
    [GENERAL.WE]: 'быз',
    [GENERAL.YOUBIG]: 'сыз',
    [GENERAL.THEY]: 'лар'
  },
  [STATE.SOFT]: {
    [GENERAL.I]: 'мен',
    [GENERAL.YOU]: 'сең',
    [GENERAL.HS]: '',
    [GENERAL.WE]: 'без',
    [GENERAL.YOUBIG]: 'сез',
    [GENERAL.THEY]: 'лəр'
  }
};

export const FUTURE_NEGATIVE_VERB_ENDINGS = {
  [STATE.SOLID]: {
    [GENERAL.I]: 'мам',
    [GENERAL.YOU]: 'массың',
    [GENERAL.HS]: 'мас',
    [GENERAL.WE]: 'мабыз',
    [GENERAL.YOUBIG]: 'масыз',
    [GENERAL.THEY]: 'маслар'
  },
  [STATE.SOFT]: {
    [GENERAL.I]: 'мəм',
    [GENERAL.YOU]: 'мəссең',
    [GENERAL.HS]: 'мəс',
    [GENERAL.WE]: 'мəбез',
    [GENERAL.YOUBIG]: 'мəcсез',
    [GENERAL.THEY]: 'мəслəр'
  }
};
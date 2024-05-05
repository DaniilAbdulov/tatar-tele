import {
  ALOT,
  CASES,
  NOUNS,
  NOUNS_AFFILIATION_PART,
  NOUNS_ALOT_PART,
  NOUNS_ENDINGS,
  SOUND,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

const expectedLetters = ['й', 'к', 'п', 'у'];

export const getChangedNoun = (nounId, caseId, alotId, pronounId) => {
  let answer = '';
  if (!nounId || !caseId || !alotId || !pronounId) {
    return answer;
  }
  const [noun] = actualValue(NOUNS, nounId);

  if (!noun?.fullValue) {
    return answer;
  }

  let general = noun.fullValue;
  const generalLastLetter = general[general.length - 1];
  const slicedGeneral = general.slice(0, general.length - 1);

  if (expectedLetters.includes(generalLastLetter) && alotId === ALOT.OFF) {
    switch (generalLastLetter) {
      case 'й':
        general = slicedGeneral;
        break;
      case 'к':
        general = slicedGeneral + 'г';
        break;
      case 'п':
        general = slicedGeneral + 'б';
        break;
      case 'у':
        general = slicedGeneral + 'в';
        break;
      default:
        break;
    }
  }
  answer += general;
  const alotPart = NOUNS_ALOT_PART[ALOT.ON][noun.state];

  const affiliationPart =
    NOUNS_AFFILIATION_PART[noun.voice][noun.state][pronounId];

  const nounCaseEnding =
    NOUNS_ENDINGS[caseId][alotId === ALOT.ON ? [SOUND.RING] : noun.sound][
      noun.state
    ];

  if (alotId === ALOT.ON) {
    answer += alotPart + affiliationPart;
  } else {
    answer += affiliationPart;
  }
  return answer + nounCaseEnding;
};

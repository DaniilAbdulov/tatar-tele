import {
  ALOT,
  CASES,
  NOUNS,
  NOUNS_ALOT_PART,
  NOUNS_ENDINGS,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

export const getChangedNoun = (nounId, caseId, alotId) => {
  const [noun] = actualValue(NOUNS, nounId);
  if (!noun.voice || !noun.state) {
    return;
  }
  const isAlot = alotId === ALOT.ON;
  const start = noun.fullValue;
  const startPartEndsWithN = start.endsWith('м') || start.endsWith('н');
  /////
  const alotPart = NOUNS_ALOT_PART[alotId][noun.state];
  const alotPartWithN = alotPart?.length ? 'н' + alotPart.slice(1) : '';
  /////
  const ending =
    NOUNS_ENDINGS[caseId][isAlot ? VOICE.CONSONANT : noun.voice][noun.state];
  const endingWithN = ending?.length ? 'н' + ending.slice(1) : '';
  ////////
  return isAlot
    ? `${start}${startPartEndsWithN ? alotPartWithN : alotPart}${ending}`
    : `${start}${startPartEndsWithN && caseId === CASES.ORIGINAL ? endingWithN : ending}`;
};

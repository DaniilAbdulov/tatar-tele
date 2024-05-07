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

const endsWithNM = str =>
  str.endsWith('м') || str.endsWith('н') || str.endsWith('ң');

export const getChangedNoun = (nounId, caseId, alotId, pronounId = null) => {
  if (!nounId || !caseId || !alotId) {
    return '';
  }

  const [noun] = actualValue(NOUNS, nounId);

  if (!noun?.fullValue) {
    return '';
  }

  const general = noun.fullValue;
  const nounCaseEnding =
    NOUNS_ENDINGS[caseId][alotId === ALOT.ON ? [SOUND.RING] : noun.sound][
      noun.state
    ];
  const slicedNounCaseEnding = nounCaseEnding.slice(1);
  const nounCaseEndWithN = 'н' + slicedNounCaseEnding;

  if (alotId === ALOT.ON) {
    const affiliationPart =
      NOUNS_AFFILIATION_PART[VOICE.CONSONANT][noun.state][pronounId];

    const alotPart = endsWithNM(general)
      ? NOUNS_ALOT_PART[ALOT.OFF][noun.state]
      : NOUNS_ALOT_PART[ALOT.ON][noun.state];

    const withoutNounCaseEnding = general + alotPart + affiliationPart;

    if (endsWithNM(withoutNounCaseEnding) && caseId === CASES.DIRECTIONAL) {
      return withoutNounCaseEnding + slicedNounCaseEnding;
    }
    return withoutNounCaseEnding + nounCaseEnding;
  }

  const generalLastLetter = general[general.length - 1];
  const slicedGeneral = general.slice(0, general.length - 1);

  const exludeIsNeed =
    expectedLetters.includes(generalLastLetter) && alotId === ALOT.OFF;

  let answer = general;
  let consonantToVowel = false;

  if (exludeIsNeed && pronounId) {
    switch (generalLastLetter) {
      case 'й':
        answer = slicedGeneral;
        break;
      case 'к':
        answer = slicedGeneral + 'г';
        break;
      case 'п':
        answer = slicedGeneral + 'б';
        break;
      case 'у':
        consonantToVowel = true;
        answer = slicedGeneral + 'в';
        break;
      default:
        break;
    }
  }

  const affiliationPart = pronounId
    ? NOUNS_AFFILIATION_PART[consonantToVowel ? VOICE.CONSONANT : noun.voice][
        noun.state
      ][pronounId]
    : '';

  if (!pronounId && endsWithNM(answer) && caseId === CASES.ORIGINAL) {
    return answer + nounCaseEndWithN;
  }

  return answer + affiliationPart + nounCaseEnding;
};

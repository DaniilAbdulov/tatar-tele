import {
  ALOT,
  CASES,
  GENERAL,
  NOUNS,
  NOUNS_AFFILIATION_PART,
  NOUNS_ALOT_PART,
  NOUNS_ENDINGS,
  SOUND,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

const expectedLetters = ['й', 'к', 'п', 'у'];

const endsWithNM = (str) => str.endsWith('м') || str.endsWith('н') || str.endsWith('ң');

export const getChangedNoun = (nounId, caseId, alotId, pronounId) => {
  let answer = '';
  if (!nounId || !caseId || !alotId || !pronounId) {
    return answer;
  }
  const [noun] = actualValue(NOUNS, nounId);

  if (!noun?.fullValue) {
    return answer;
  }

  const general = noun.fullValue;

  const nounCaseEnding =
    NOUNS_ENDINGS[caseId][alotId === ALOT.ON ? [SOUND.RING] : noun.sound][
      noun.state
    ];

  // console.log(`general: ${general}`);
  // console.log(`generalLastLetter: ${generalLastLetter}`);
  // console.log(`slicedGeneral: ${slicedGeneral}`);
  // console.log(`alotPart: ${alotPart}`);
  // console.log(`affiliationPart: ${affiliationPart}`);
  // console.log(`nounCaseEnding: ${nounCaseEnding}`);
  
  if (alotId === ALOT.ON) {
    const affiliationPart =
    NOUNS_AFFILIATION_PART[VOICE.CONSONANT][noun.state][pronounId];

    const alotPart = endsWithNM(general) ? NOUNS_ALOT_PART[ALOT.OFF][noun.state] : NOUNS_ALOT_PART[ALOT.ON][noun.state];

    const withoutNounCaseEnding = general + alotPart + affiliationPart;

    if (endsWithNM(withoutNounCaseEnding) && caseId === CASES.DIRECTIONAL) {

      const slicedNounCaseEnding = nounCaseEnding.slice(1);

      return withoutNounCaseEnding + slicedNounCaseEnding;
    }

    return  withoutNounCaseEnding + nounCaseEnding;
  } 

  const generalLastLetter = general[general.length - 1];
  const slicedGeneral = general.slice(0, general.length - 1);

  const exludeIsNeed = expectedLetters.includes(generalLastLetter) && alotId === ALOT.OFF;
  
  answer = general;
  let consonantToVowel = false;

  if (exludeIsNeed) {
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
  const affiliationPart =
  NOUNS_AFFILIATION_PART[consonantToVowel ? VOICE.CONSONANT : noun.voice][noun.state][pronounId];
  
  return answer + affiliationPart + nounCaseEnding;

};

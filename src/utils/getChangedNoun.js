import {
  ALOT,
  CASES,
  CONSONANT_LETTERS,
  GENERAL,
  NOUNS,
  NOUNS_AFFILIATION_PART,
  NOUNS_ALOT_PART,
  NOUNS_ENDINGS,
  PRONOUNS,
  SOUND,
  STATE,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

const expectedLetters = ['й', 'к', 'п', 'у', 'и', 'ю', 'ь'];

const endsWithNM = str =>
  str.endsWith('м') || str.endsWith('н') || str.endsWith('ң');

const nounWithAlot = (noun, caseId, general, pronounId) => {
  const nounCaseEnding = NOUNS_ENDINGS[caseId][SOUND.RING][noun.state];
  const alotPart = endsWithNM(general)
    ? NOUNS_ALOT_PART[ALOT.OFF][noun.state]
    : NOUNS_ALOT_PART[ALOT.ON][noun.state];

  const affiliationPart =
    NOUNS_AFFILIATION_PART[VOICE.CONSONANT][noun.state][pronounId];

  const withoutNounCaseEnding = general + alotPart + affiliationPart;

  if (endsWithNM(withoutNounCaseEnding) && caseId === CASES.DIRECTIONAL) {
    return withoutNounCaseEnding + nounCaseEnding.slice(1);
  }

  return withoutNounCaseEnding + nounCaseEnding;
};

const nounWithExpects = (
  noun,
  general,
  caseId,
  pronounId,
  generalLastLetter,
) => {
  const nounCaseEnding = NOUNS_ENDINGS[caseId][noun.sound][noun.state];
  const slicedGeneral = general.slice(0, general.length - 1);

  const affiliationPart =
    NOUNS_AFFILIATION_PART[noun.voice][noun.state][pronounId];

  const specialAffiliationPartForU =
    NOUNS_AFFILIATION_PART[VOICE.CONSONANT][noun.state][pronounId];

  switch (generalLastLetter) {
    case `ь`:
      return slicedGeneral + affiliationPart + nounCaseEnding;
    case `й`:
      let affiliationPartForStrongI = '';
      if (pronounId < 4) {
        affiliationPartForStrongI =
          NOUNS_AFFILIATION_PART[noun.voice][STATE.SOFT][pronounId];
        return slicedGeneral + affiliationPartForStrongI + nounCaseEnding;
      }
      return slicedGeneral + 'е' + affiliationPartForStrongI + nounCaseEnding;
    case `к`:
      return slicedGeneral + 'г' + affiliationPart + nounCaseEnding;
    case `п`:
      return slicedGeneral + 'б' + affiliationPart + nounCaseEnding;
    case `и`:
      const isHeShe = pronounId === GENERAL.HS;
      const specialAffiliationPart = isHeShe
        ? NOUNS_AFFILIATION_PART[noun.voice][noun.state][pronounId]
        : specialAffiliationPartForU;

      return general + specialAffiliationPart + nounCaseEnding;
    case `у`:
      const secondLastLetter = general.at(-2).toUpperCase();

      if (!CONSONANT_LETTERS.includes(secondLastLetter)) {
        return (
          slicedGeneral + 'в' + specialAffiliationPartForU + nounCaseEnding
        );
      }
      return general + specialAffiliationPartForU + nounCaseEnding;
    case `ю`:
      return general + specialAffiliationPartForU + nounCaseEnding;
    default:
      return general;
  }
};

const nounEndsWithN = (general, nounCaseEnding) => {
  return general + 'н' + nounCaseEnding.slice(1);
};

export const getChangedNoun = (nounId, caseId, alotId, pronounId = null) => {
  if (!nounId || !caseId || !alotId) {
    return '';
  }

  const [noun] = actualValue(NOUNS, nounId);

  if (!noun?.fullValue) {
    return '';
  }

  const general = noun.fullValue;
  const nounCaseEnding = NOUNS_ENDINGS[caseId][noun.sound][noun.state];

  if (alotId === ALOT.ON || (caseId === CASES.NOMINATIVE && pronounId === 6)) {
    return nounWithAlot(noun, caseId, general, pronounId);
  }

  const generalLastLetter = general.at(-1);
  const generalLastLetterIncludesInExpectedLetters =
    expectedLetters.includes(generalLastLetter);

  const affiliationPart =
    NOUNS_AFFILIATION_PART[noun.voice][noun.state][pronounId];

  if (generalLastLetterIncludesInExpectedLetters && pronounId) {
    return nounWithExpects(noun, general, caseId, pronounId, generalLastLetter);
  }

  if (endsWithNM(general) && !pronounId && caseId === CASES.ORIGINAL) {
    return nounEndsWithN(general, nounCaseEnding);
  }

  if (endsWithNM(affiliationPart) && caseId === CASES.DIRECTIONAL) {
    return general + affiliationPart + nounCaseEnding.slice(1);
  }

  return general + affiliationPart + nounCaseEnding;
};

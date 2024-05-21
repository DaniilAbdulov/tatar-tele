import {
  ALOT,
  CASES,
  CONSONANT_LETTERS,
  GENERAL,
  NOUNS,
  NOUNS_AFFILIATION_PART,
  NOUNS_ALOT_PART,
  NOUNS_ENDINGS,
  SOUND,
  STATE,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

const expectedLetters = ['й', 'к', 'п', 'у', 'и', 'ю', 'ь'];

const endsWithNM = str =>
  str.endsWith('м') || str.endsWith('н') || str.endsWith('ң');

const sliceOne = str => str.slice(1);

const nounWithAlot = (noun, caseId, general, specialAffiliationPart) => {
  const nounCaseEnding = NOUNS_ENDINGS[caseId][SOUND.RING][noun.state];
  const alotPart = endsWithNM(general)
    ? NOUNS_ALOT_PART[ALOT.OFF][noun.state]
    : NOUNS_ALOT_PART[ALOT.ON][noun.state];

  const withoutNounCaseEnding = general + alotPart + specialAffiliationPart;

  if (endsWithNM(withoutNounCaseEnding) && caseId === CASES.DIRECTIONAL) {
    return withoutNounCaseEnding + sliceOne(nounCaseEnding);
  }

  return withoutNounCaseEnding + nounCaseEnding;
};

const nounWithExpects = (
  noun,
  general,
  caseId,
  pronounId,
  generalLastLetter,
  affiliationPart,
  nounCaseEnding,
  specialAffiliationPart,
) => {
  const slicedGeneral = general.slice(0, general.length - 1);

  switch (generalLastLetter) {
    case `ь`:
      return slicedGeneral + affiliationPart + nounCaseEnding;
    case `й`:
      const affiliation =
        pronounId < 4
          ? NOUNS_AFFILIATION_PART[noun.voice][STATE.SOFT][pronounId]
          : sliceOne(affiliationPart);

      let end = nounCaseEnding;

      if (pronounId < 4) {
        if (endsWithNM(affiliation) && caseId === CASES.DIRECTIONAL) {
          end = sliceOne(end);
        }
        return slicedGeneral + affiliation + end;
      }

      if (endsWithNM(affiliation) && caseId === CASES.DIRECTIONAL) {
        end = sliceOne(end);
      }

      return slicedGeneral + 'е' + affiliation + end;
    case `к`:
      return slicedGeneral + 'г' + affiliationPart + nounCaseEnding;
    case `п`:
      return slicedGeneral + 'б' + affiliationPart + nounCaseEnding;
    case `и`:
      const isHeShe = pronounId === GENERAL.HS;
      const specialAffiliationPartForI = isHeShe
        ? affiliationPart
        : specialAffiliationPart;

      return general + specialAffiliationPartForI + nounCaseEnding;
    case `у`:
      const secondLastLetter = general.at(-2).toUpperCase();

      if (!CONSONANT_LETTERS.includes(secondLastLetter)) {
        return slicedGeneral + 'в' + specialAffiliationPart + nounCaseEnding;
      }
      return general + specialAffiliationPart + nounCaseEnding;
    case `ю`:
      return general + specialAffiliationPart + nounCaseEnding;
    default:
      return general;
  }
};

const nounEndsWithN = (general, nounCaseEnding) => {
  return general + 'н' + sliceOne(nounCaseEnding);
};

export const getChangedNoun = (nounId, caseId, alotId, pronounId = null) => {
  if (!nounId || !caseId || !alotId) {
    return '';
  }

  const noun = actualValue(NOUNS, nounId);

  if (!noun?.fullValue) {
    return '';
  }

  const general = noun.fullValue;
  const nounCaseEnding = NOUNS_ENDINGS[caseId][noun.sound][noun.state];

  const specialAffiliationPart =
    NOUNS_AFFILIATION_PART[VOICE.CONSONANT][noun.state][pronounId];

  if (alotId === ALOT.ON || (caseId === CASES.NOMINATIVE && pronounId === 6)) {
    return nounWithAlot(noun, caseId, general, specialAffiliationPart);
  }

  const generalLastLetter = general.at(-1);
  const generalExpectedLastLetter = expectedLetters.includes(generalLastLetter);

  const affiliationPart =
    NOUNS_AFFILIATION_PART[noun.voice][noun.state][pronounId];

  if (generalExpectedLastLetter && pronounId) {
    return nounWithExpects(
      noun,
      general,
      caseId,
      pronounId,
      generalLastLetter,
      affiliationPart,
      nounCaseEnding,
      specialAffiliationPart,
    );
  }

  if (endsWithNM(general) && !pronounId && caseId === CASES.ORIGINAL) {
    return nounEndsWithN(general, nounCaseEnding);
  }

  if (endsWithNM(affiliationPart) && caseId === CASES.DIRECTIONAL) {
    return general + affiliationPart + sliceOne(nounCaseEnding);
  }

  return general + affiliationPart + nounCaseEnding;
};

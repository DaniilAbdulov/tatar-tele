import {
  ADJECTIVES,
  CASES,
  NOUNS,
  PRONOUNS,
  TIMES,
  VERBS,
} from '../data/index.js';
import {randomInt} from './randomInt.js';

export const getRandomIntegers = () => {
  const nounId = randomInt(1, NOUNS.length);
  const caseId = randomInt(1, Object.keys(CASES).length);
  const pronounId = randomInt(1, PRONOUNS.length);
  const timeId = randomInt(1, Object.keys(TIMES).length);
  const verbId = randomInt(1, VERBS.length);
  const oneOrTwo = randomInt(1, 2);
  const adjectiveId = randomInt(1, ADJECTIVES.length);
  const randomNumber = randomInt(1, 999999);

  return {
    nounId,
    caseId,
    pronounId,
    timeId,
    verbId,
    oneOrTwo,
    adjectiveId,
    randomNumber,
  };
};

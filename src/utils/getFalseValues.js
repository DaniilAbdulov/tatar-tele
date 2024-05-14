import {ADJECTIVES, LESSONS, PART_SPEACH, PRONOUNS} from '../data/index.js';
import {
  actualValue,
  getChangedAdjective,
  getChangedNoun,
  getChangedVerb,
  getRandomIntegers,
  getTatarNumber,
} from './index.js';

export const getFalseValues = (value, parametr, lessonId) => {
  const arr = [];
  const COUNT = lessonId === LESSONS.THIRD ? 2 : 4;

  switch (parametr) {
    case PART_SPEACH.VERB:
      for (let i = 0; i < COUNT; i++) {
        const {
          pronounId,
          timeId,
          verbId,
          oneOrTwo: negativeId,
        } = getRandomIntegers();

        const item = getChangedVerb(verbId, pronounId, timeId, negativeId);

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.PRONOUN:
      for (let i = 0; i < COUNT; i++) {
        const {pronounId} = getRandomIntegers();
        const [pronoun] = actualValue(PRONOUNS, pronounId);

        const item = pronoun.value;

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.NOUN:
      for (let i = 0; i < COUNT; i++) {
        const {
          nounId,
          caseId,
          oneOrTwo: alotId,
          pronounId,
        } = getRandomIntegers();

        const item =
          lessonId === LESSONS.THIRD
            ? getChangedNoun(nounId, 6, 2)
            : getChangedNoun(nounId, caseId, alotId, pronounId);

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.ADJECTIVE:
      for (let i = 0; i < COUNT; i++) {
        const {adjectiveId} = getRandomIntegers();
        const [adjective] = actualValue(ADJECTIVES, adjectiveId);

        if (value.fullValue !== adjective.fullValue) {
          const item = getChangedAdjective(adjective);
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.NUMERAL:
      for (let i = 0; i <= 1; i++) {
        const {randomNumber} = getRandomIntegers();

        if (value !== randomNumber) {
          const item = getTatarNumber(randomNumber);
          arr.push(item);
        }
      }
      break;
    default:
      break;
  }

  return [...new Set(arr)];
};

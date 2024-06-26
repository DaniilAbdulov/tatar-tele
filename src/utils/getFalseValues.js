import {ADJECTIVES, LESSONS, PART_SPEACH, PRONOUNS} from '../data/index.js';
import {
  actualValue,
  getChangedAdjective,
  getChangedNoun,
  getChangedVerb,
  getRandomIntegers,
} from './index.js';

export const getFalseValues = (value, parametr, lessonId, curNounId = 1) => {
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
        } = getRandomIntegers(['pronounId', 'timeId', 'verbId', 'oneOrTwo']);

        const item = getChangedVerb(verbId, pronounId, timeId, negativeId);

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.PRONOUN:
      for (let i = 0; i < COUNT; i++) {
        const {pronounId} = getRandomIntegers(['pronounId']);
        const pronoun = actualValue(PRONOUNS, pronounId);

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
        } = getRandomIntegers(['nounId', 'caseId', 'oneOrTwo', 'pronounId']);

        const item =
          lessonId === LESSONS.THIRD
            ? getChangedNoun(nounId, 6, 2)
            : getChangedNoun(curNounId, caseId, alotId, pronounId);

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.ADJECTIVE:
      for (let i = 0; i < COUNT; i++) {
        const {adjectiveId} = getRandomIntegers(['adjectiveId']);
        const adjective = actualValue(ADJECTIVES, adjectiveId);

        if (value.fullValue !== adjective.fullValue) {
          const item = getChangedAdjective(adjective);
          arr.push(item);
        }
      }
      break;
    default:
      break;
  }

  return [...new Set(arr)];
};

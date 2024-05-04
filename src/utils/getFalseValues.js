import {NOUNS, PART_SPEACH, PRONOUNS} from '../data/index.js';
import {
  actualValue,
  getChangedNoun,
  getChangedVerb,
  getRandomIntegers,
} from './index.js';

export const getFalseValues = (value, parametr) => {
  const arr = [];
  const COUNT = 4;
  
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
        const {nounId, caseId, oneOrTwo: alotId} = getRandomIntegers();

        const item = getChangedNoun(nounId, caseId, alotId);

        if (!item) {
          console.log([nounId, caseId, alotId]);
        }

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    default:
      break;
  }

  return [...new Set(arr)];
};

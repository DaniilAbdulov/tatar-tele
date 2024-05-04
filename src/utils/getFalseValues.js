import {NOUNS, PART_SPEACH, PRONOUNS} from '../data/index.js';
import {actualValue, getChangedVerb, getRandomIntegers} from './index.js';

export const getFalseValues = (value, parametr) => {
  const arr = [];

  switch (parametr) {
    case PART_SPEACH.VERB:
      for (let i = 0; i < 6; i++) {
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
      for (let i = 0; i < 5; i++) {
        const {pronounId} = getRandomIntegers();
        const [pronoun] = actualValue(PRONOUNS, pronounId);

        const item = pronoun.value;

        if (value !== item) {
          arr.push(item);
        }
      }
      break;
    case PART_SPEACH.NOUN:
      for (let i = 0; i < 6; i++) {
        const {nounId} = getRandomIntegers();

        const [noun] = actualValue(NOUNS, nounId);

        const item = noun.fullValue;
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

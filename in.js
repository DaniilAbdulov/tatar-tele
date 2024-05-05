import {CONSONANT_LETTERS, NOUNS} from './src/data/index.js';

const nouns = NOUNS;
const conLet = CONSONANT_LETTERS;
const conLetSmall = conLet.map(l => l.toLowerCase());

const newArr = nouns.map((n, index) => {
  const fullValue = n.fullValue;
  return {
    id: index + 1,
    fullValue,
    russian: n.russian,
    sound: null,
    voice: conLetSmall.includes(fullValue[fullValue.length - 1]) ? 1 : 2,
    state: null,
  };
});

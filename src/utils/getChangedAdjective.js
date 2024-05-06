import {ADJECTIVE_ENDINGS} from '../data/index.js';

export const getChangedAdjective = adjective => {
  return adjective.value + ADJECTIVE_ENDINGS[adjective.state];
};

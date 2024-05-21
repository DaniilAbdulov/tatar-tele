import {
  ADJECTIVES,
  CASES,
  NOUNS,
  PRONOUNS,
  TIMES,
  VERBS,
} from '../data/index.js';
import {randomInt} from './randomInt.js';

export const getRandomIntegers = (request) => {
  const randomIntegers = {};
  request.forEach((reqName) => {
      switch (reqName) {
          case 'nounId':
              randomIntegers.nounId = randomInt(1, NOUNS.length);
              break;
          case 'caseId':
              randomIntegers.caseId = randomInt(1, Object.keys(CASES).length);
              break; 
          case 'pronounId':
              randomIntegers.pronounId = randomInt(1, PRONOUNS.length);
              break;   
          case 'timeId':
              randomIntegers.timeId = randomInt(1, Object.keys(TIMES).length);
              break;    
          case 'verbId':
              randomIntegers.verbId = randomInt(1, VERBS.length);
              break;
          case 'oneOrTwo':
              randomIntegers.oneOrTwo = randomInt(1, 2);
              break; 
          case 'adjectiveId':
              randomIntegers.adjectiveId = randomInt(1, ADJECTIVES.length);
              break;   
          case 'randomNumber':
              randomIntegers.randomNumber = randomInt(1, 999999);
              break;   
          default:
              break;
      }
  })

  return randomIntegers;

};

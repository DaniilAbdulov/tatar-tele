import {autorun, makeAutoObservable} from 'mobx';
import {LESSONS, NOUNS, ADJECTIVES, VERBS} from '../../../data/index.js';
import {actualValue, getRandomIntegers} from '../../../utils/index.js';
import {progressStore} from '../ProgressStore.js';
const myProgressStore = progressStore;

class PairWordsStore {
  lessonId = LESSONS.FIVE;
  trueTaskValue = {
    lessonId: this.lessonId,
  };
  variants = {};
  userAnswer = [];

  constructor() {
    makeAutoObservable(this);

    autorun(() => this.getLessonData());
  }

  getLessonData = () => {
    this.getTask();
  };

  setVariants = obj => {
    this.variants = obj;
  };

  getVariants = () => {
    const {nounId, verbId, adjectiveId} = getRandomIntegers();
    let anotherNounId = nounId;

    while (anotherNounId === nounId) {
      const {nounId} = getRandomIntegers();
      anotherNounId = nounId;
    }

    let anotherVerbId = verbId;

    while (anotherVerbId === verbId) {
      const {verbId} = getRandomIntegers();
      anotherVerbId = verbId;
    }

    const [noun] = actualValue(NOUNS, nounId);
    const [anotherNoun] = actualValue(NOUNS, anotherNounId);
    const [verb] = actualValue(VERBS, verbId);
    const [anotherVerb] = actualValue(VERBS, anotherVerbId);
    const [adjective] = actualValue(ADJECTIVES, adjectiveId);

    const arrForVariants = [noun, anotherNoun, verb, adjective, anotherVerb];

    const leftColumn = [];
    const rightColumn = [];

    for (let i = 0; i < arrForVariants.length; i++) {
      const objForLeft = {...arrForVariants[i]};
      objForLeft.id = i + 1;
      const objForRight = {...arrForVariants[i]};
      objForRight.id = i + 5;

      leftColumn.push(objForLeft);
      rightColumn.push(objForRight);
    }

    this.setVariants({
      leftColumnArray: leftColumn,
      rightColumnArray: rightColumn,
    });
  };

  excludeAnswer = fullValue => {
    const {leftColumnArray, rightColumnArray} = this.variants;

    const excludedLArr = leftColumnArray.filter(v => v.fullValue !== fullValue);
    const excludedRArr = rightColumnArray.filter(
      v => v.fullValue !== fullValue,
    );

    this.variants = {
      leftColumnArray: excludedLArr,
      rightColumnArray: excludedRArr,
    };
  };

  checkAnswer = () => {
    if (this.userAnswer.length < 2) {
      return;
    }
    const [one, two] = this.userAnswer;

    if (one.fullValue === two.fullValue) {
      myProgressStore.handleSuccess();
      this.excludeAnswer(one.fullValue);
      myProgressStore.setResult('');
    }
    this.userAnswer = [];
  };

  setUserAnswer = value => {
    this.userAnswer = [...this.userAnswer, value];
  };

  getTask = () => {
    this.getVariants();
  };
}

export const pairWordsStore = new PairWordsStore();

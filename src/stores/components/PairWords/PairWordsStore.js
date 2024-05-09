import {autorun, makeAutoObservable} from 'mobx';
import {LESSONS, NOUNS, ADJECTIVES, VERBS} from '../../../data/index.js';
import {actualValue, getRandomIntegers} from '../../../utils/index.js';
class PairWordsStore {
  lessonId = LESSONS.FIVE;
  trueTaskValue = {
    lessonId: this.lessonId,
  };
  variants = [];
  userAnswer = [];

  constructor() {
    makeAutoObservable(this);

    autorun(() => this.getLessonData());
  }

  getLessonData = () => {
    this.getTask();
  };

  setVariants = arr => {
    this.variants = arr;
  };

  getVariants = () => {
    const {nounId, verbId, adjectiveId} = getRandomIntegers();
    let anotherNounId = nounId;

    while (anotherNounId === nounId) {
      const {nounId} = getRandomIntegers();
      anotherNounId = nounId;
    }

    const [noun] = actualValue(NOUNS, nounId);
    const [anotherNoun] = actualValue(NOUNS, anotherNounId);
    const [verb] = actualValue(VERBS, verbId);
    const [adjective] = actualValue(ADJECTIVES, adjectiveId);

    this.setVariants([noun, anotherNoun, verb, adjective]);
  };

  excludeAnswer = id => {
    this.variants = this.variants.filter(v => v.id !== id);
  };

  checkAnswer = () => {
    if (this.userAnswer.length < 2) {
      return;
    }
    const [one, two] = this.userAnswer;

    if (one === two) {
      this.excludeAnswer(one);
    }
    this.userAnswer = [];
  };

  setUserAnswer = id => {
    this.userAnswer = [...this.userAnswer, id];
  };

  getTask = () => {
    this.getVariants();
  };
}

export const pairWordsStore = new PairWordsStore();

import {autorun, makeAutoObservable} from 'mobx';
import {
  PART_SPEACH,
  LESSONS,
  NOUNS,
  RUSSIAN_CASES_PART,
} from '../../../data/index.js';
import {
  actualValue,
  getFalseValues,
  getRandomIntegers,
  shuffleArray,
  getChangedNoun,
} from '../../../utils/index.js';
import {messageStore} from '../MessageStore.js';
const myMessageStore = messageStore;

class SecondLessonStore {
  trueTaskValue = {};
  falseTaskNouns = [];
  falseTaskPronouns = [];
  variants = [];
  userAnswer = [];

  constructor() {
    makeAutoObservable(this);

    autorun(() => this.getLessonData());
  }

  resetTask = () => {
    this.trueTaskValue = {};
    this.falseTaskNouns = [];
    this.falseTaskPronouns = [];
    this.variants = [];
    this.userAnswer = [];
  };

  getLessonData = () => {
    this.getTask();
    this.getVariants();
  };

  setTrueTaskValue = obj => {
    this.trueTaskValue = obj;
  };

  setFalseTaskNouns = arr => {
    this.falseTaskNouns = arr;
  };

  setFalseTaskPronouns = arr => {
    this.falseTaskPronouns = arr;
  };

  setVariants = arr => {
    this.variants = arr;
  };

  getAnotherTask = () => {
    this.resetTask();
    this.getTask();
    this.getVariants();
  };

  getVariants = () => {
    const nounsArray = [...this.falseTaskNouns, this.trueTaskValue.value];
    const nouns = shuffleArray(nounsArray);

    const variants = [...nouns].map((item, index) => {
      const miniObj = {
        id: index + 1,
        value: item,
      };

      return miniObj;
    });
    this.setVariants([...variants]);
  };

  checkAnswer = () => {
    if (!this.userAnswer.length) {
      return;
    }

    const userAnswerArray = this.userAnswer.map(e => e.value);

    const userAnswer = userAnswerArray.join(' ');
    const trueAnswer = `${this.trueTaskValue.value}`;

    if (userAnswer === trueAnswer) {
      myMessageStore.handleSuccess();
      setTimeout(() => {
        this.resetTask();
        this.getAnotherTask();
        myMessageStore.setResult('');
      }, 2000);
    } else {
      myMessageStore.handleError();
      setTimeout(() => {
        myMessageStore.setResult('');
      }, 2000);
    }
  };

  setUserAnswer = variant => {
    this.variants = this.variants.filter(v => v.id !== variant.id);
    this.userAnswer = [...this.userAnswer, variant];
    this.userAnswer = this.userAnswer.sort((a, b) => a.id - b.id);
  };

  deleteOneUserAnswerItem = answer => {
    this.variants = [...this.variants, answer];
    this.userAnswer = this.userAnswer.filter(a => a.id !== answer.id);
    this.variants = this.variants.sort((a, b) => a.id - b.id);
  };

  getTask = () => {
    const trueTaskValue = this.getTrueTaskValue();
    const {value} = trueTaskValue;
    const falseTaskNouns = getFalseValues(value, PART_SPEACH.NOUN);

    this.setTrueTaskValue(trueTaskValue);
    this.setFalseTaskNouns(falseTaskNouns);
  };

  getTrueTaskValue = () => {
    const lessonId = LESSONS.SECOND;
    const {nounId, caseId, oneOrTwo: alotId} = getRandomIntegers();
    const [noun] = actualValue(NOUNS, nounId);
    const casePart = RUSSIAN_CASES_PART[caseId];
    const value = getChangedNoun(nounId, caseId, alotId);

    return {
      lessonId,
      noun,
      value,
      caseId,
      casePart,
      alotId,
    };
  };
}

export const secondLessonStore = new SecondLessonStore();

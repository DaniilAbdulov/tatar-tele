import {autorun, makeAutoObservable, runInAction} from 'mobx';
import {LESSONS} from '#data/index.js';
import {getRandomIntegers, getTatarNumber, shuffleArray} from '#utils/index.js';
import {progressStore} from '../ProgressStore.js';
const myProgressStore = progressStore;

class FourthLessonStore {
  lessonId = LESSONS.FOURTH;
  trueTaskValue = {};
  falseTaskNumbers = [];
  variants = [];
  userAnswer = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getLessonData());
  }

  resetTask = () => {
    this.trueTaskValue = {};
    this.falseTaskNumbers = [];
    this.variants = [];
    this.userAnswer = [];
  };

  setResult = value => {
    runInAction(() => {
      this.result = value;
    });
  };

  getLessonData = () => {
    this.getTask();
    this.getVariants();
  };

  setTrueTaskValue = obj => {
    runInAction(() => {
      this.trueTaskValue = obj;
    });
  };

  setVariants = arr => {
    runInAction(() => {
      this.variants = arr;
    });
  };

  getAnotherTask = () => {
    this.resetTask();
    this.getTask();
    this.getVariants();
  };

  getVariants = () => {
    const numbers = this.trueTaskValue.value.split(' ');

    const unShuffledvariants = [...numbers].map((item, index) => {
      const miniObj = {
        id: index + 1,
        value: item,
      };

      return miniObj;
    });

    const variants = shuffleArray(unShuffledvariants);

    this.setVariants([...variants]);
  };

  checkAnswer = () => {
    if (!this.userAnswer.length) {
      return;
    }
    const {value} = this.trueTaskValue;
    const userAnswerArray = this.userAnswer.map(e => e.value);
    const userAnswer = userAnswerArray.join(' ');

    if (userAnswer === value) {
      myProgressStore.handleSuccess();
      this.resetTask();
      this.getAnotherTask();
      myProgressStore.setResult('');
    } else {
      myProgressStore.handleError();
      setTimeout(() => {
        myProgressStore.setResult('');
      }, 2000);
    }
  };

  setUserAnswer = variant => {
    this.variants = this.variants.filter(v => v.id !== variant.id);
    this.userAnswer = [...this.userAnswer, variant];
  };

  deleteOneUserAnswerItem = answer => {
    this.variants = [...this.variants, answer];
    this.userAnswer = this.userAnswer.filter(a => a.id !== answer.id);
  };

  getTask = () => {
    const trueTaskValue = this.getTrueTaskValue();
    this.setTrueTaskValue(trueTaskValue);
  };

  getTrueTaskValue = () => {
    const {randomNumber} = getRandomIntegers(['randomNumber']);
    const value = getTatarNumber(randomNumber);

    return {
      lessonId: this.lessonId,
      value,
      randomNumber,
    };
  };
}

export const fourthLessonStore = new FourthLessonStore();

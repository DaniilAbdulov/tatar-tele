import {autorun, makeAutoObservable, runInAction} from 'mobx';
import {
  PART_SPEACH,
  LESSONS,
  NOUNS,
  RUSSIAN_CASES,
} from '../../../data/index.js';
import {
  actualValue,
  getFalseValues,
  getRandomIntegers,
  shuffleArray,
  getChangedNoun,
} from '../../../utils/index.js';
import {progressStore} from '../ProgressStore.js';
const myProgressStore = progressStore;

class SecondLessonStore {
  lessonId = LESSONS.SECOND;
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
    runInAction(() => {
      this.trueTaskValue = obj;
    });
  };

  setFalseTaskNouns = arr => {
    runInAction(() => {
      this.falseTaskNouns = arr;
    });
  };

  setFalseTaskPronouns = arr => {
    runInAction(() => {
      this.falseTaskPronouns = arr;
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
    const {nounId, caseId, oneOrTwo: alotId, pronounId} = getRandomIntegers();
    const [noun] = actualValue(NOUNS, nounId);
    const casePart = RUSSIAN_CASES[caseId];
    const value = getChangedNoun(nounId, caseId, alotId, pronounId);

    return {
      lessonId: this.lessonId,
      noun,
      value,
      caseId,
      casePart,
      alotId,
      pronounId,
    };
  };
}

export const secondLessonStore = new SecondLessonStore();

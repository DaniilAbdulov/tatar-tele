import {autorun, makeAutoObservable, runInAction} from 'mobx';
import {PART_SPEACH, VERBS, PRONOUNS, LESSONS} from '../../../data/index.js';
import {
  actualValue,
  getFalseValues,
  getRandomIntegers,
  shuffleArray,
} from '../../../utils/index.js';
import {getChangedVerb} from '../../../utils/index.js';
import {progressStore} from '../ProgressStore.js';
const myProgressStore = progressStore;

class FirstLessonStore {
  lessonId = LESSONS.FIRST;
  trueTaskValue = {};
  falseTaskVerbs = [];
  falseTaskPronouns = [];
  variants = [];
  userAnswer = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getLessonData());
  }

  resetTask = () => {
    this.trueTaskValue = {};
    this.falseTaskVerbs = [];
    this.falseTaskPronouns = [];
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

  setFalseTaskVerbs = arr => {
    runInAction(() => {
      this.falseTaskVerbs = arr;
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
    const pronounsArray = [
      ...this.falseTaskPronouns,
      this.trueTaskValue.pronoun.value,
    ];
    const verbsArray = [...this.falseTaskVerbs, this.trueTaskValue.value];

    const pronouns = shuffleArray(pronounsArray);
    const verbs = shuffleArray(verbsArray);

    const variants = [...pronouns, ...verbs].map((item, index) => {
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
    const {pronoun: truePronoun, value: trueVerbValue} = this.trueTaskValue;
    const userAnswerArray = this.userAnswer.map(e => e.value);

    const userAnswer = userAnswerArray.join(' ');
    const trueAnswer = `${truePronoun.value} ${trueVerbValue}`;

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
    const {value, pronoun} = trueTaskValue;

    const falseTaskVerbs = getFalseValues(value, PART_SPEACH.VERB);
    const falseTaskPronouns = getFalseValues(
      pronoun.value,
      PART_SPEACH.PRONOUN,
    );

    this.setTrueTaskValue(trueTaskValue);
    this.setFalseTaskVerbs(falseTaskVerbs);
    this.setFalseTaskPronouns(falseTaskPronouns);
  };

  getTrueTaskValue = () => {
    const {
      pronounId,
      timeId,
      verbId,
      oneOrTwo: negativeId,
    } = getRandomIntegers(['pronounId','timeId','verbId','oneOrTwo']);
    const pronoun = actualValue(PRONOUNS, pronounId);
    const verb = actualValue(VERBS, verbId);

    const value = getChangedVerb(verbId, pronounId, timeId, negativeId);

    return {
      lessonId: this.lessonId,
      pronoun,
      verb,
      value,
      timeId,
      negativeId,
    };
  };
}

export const firstLessonStore = new FirstLessonStore();

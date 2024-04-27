import {autorun, makeAutoObservable} from 'mobx';
import {
  PART_SPEACH,
  PAST_VERB_ENDINGS,
  NEGATIVE,
  TIMES,
  PAST_NEGATIVE_VERB_PARTS,
  NOW_VERB_ENDINGS,
  FUTURE_NEGATIVE_VERB_ENDINGS,
  VOICE,
  FUTURE_VERB_ENDINGS,
  VERBS,
  PRONOUNS

} from '../../../data/index';
import {actualValue, getRandomIntegers, shuffleArray} from '../../../utils/index';

class FirstLessonStore {
    trueTaskValue = {}
    falseTaskVerbs = []
    falseTaskPronouns = []
    variants = []
    userAnswer = []
    result = '';

    constructor() {
      makeAutoObservable(this);

      autorun(() => this.getFirstLessonData());
    }

    resetTask = () => {
      this.trueTaskValue = {};
      this.falseTaskVerbs = [];
      this.falseTaskPronouns = [];
      this.variants = [];
      this.userAnswer = [];
      this.result = '';
    }

    setResult = (value) => {
      this.result = value;
    }

    getFirstLessonData = () => {
      this.getTask();
      this.getVariants();
    }

    setTrueTaskValue = (obj) => {
      this.trueTaskValue = obj;
    }

    setFalseTaskVerbs = (arr) => {
      this.falseTaskVerbs = arr;
    }

    setFalseTaskPronouns = (arr) => {
      this.falseTaskPronouns = arr;
    }

    setVariants = (arr) => {
      this.variants = arr;
    }

    getAnotherTask = () => {
      this.resetTask();
      this.getTask();
      this.getVariants();
    }

    getVariants = () => {
      const pronounsArray = [...this.falseTaskPronouns, this.trueTaskValue.pronoun.value];
      const verbsArray = [...this.falseTaskVerbs, this.trueTaskValue.value];

      const pronouns = shuffleArray(pronounsArray);
      const verbs = shuffleArray(verbsArray);

      const variants = [...pronouns, ...verbs].map((item, index) => {
        const miniObj = {
          id: index + 1,
          value: item
        };

        return miniObj;
      });

      this.setVariants([...variants]);

    }

    checkAnswer = () => {
      if (!this.userAnswer.length) {
        return;
      }
      const {pronoun: truePronoun, value: trueVerbValue} = this.trueTaskValue;
      const userAnswerArray = this.userAnswer.map((e) => e.value);

      const userAnswer = userAnswerArray.join(' ');
      const trueAnswer = `${truePronoun.value} ${trueVerbValue}`;

      if (userAnswer === trueAnswer) {
        this.setResult('success');
      } else {
        this.setResult('error');
      }
    }

    setUserAnswer = (variant) => {
      if (!this.userAnswer.includes(variant)) {
        this.userAnswer.push(variant);
        this.userAnswer = this.userAnswer.sort((a, b) => a.id - b.id);
        this.variants = this.variants.filter((v) => v.id !== variant.id);
      }
    }

    deleteOneUserAnswerItem = (answerItem) => {
      this.variants.push(answerItem);
      this.variants = this.variants.sort((a, b) => a.id - b.id);
      this.userAnswer = this.userAnswer.filter((a) => a.id !== answerItem.id);
    }

    getTask = () => {
      const trueTaskValue = this.getTrueTaskValue();
      const {changedVerb: verb, pronoun} = trueTaskValue;

      const falseTaskVerbs = this.getFalseValues(verb, PART_SPEACH.VERB);
      const falseTaskPronouns = this.getFalseValues(pronoun.value, PART_SPEACH.PRONOUN);

      this.setTrueTaskValue(trueTaskValue);
      this.setFalseTaskVerbs(falseTaskVerbs);
      this.setFalseTaskPronouns(falseTaskPronouns);
    }

    getChangedVerb = (verb, pronounId, timeId, negativeId) => {

      //деструктуризация глагола
      const {fullValue: verbFull, imperative, voice, state} = verb;
      const slicedImperative = imperative.slice(0, imperative.length - 1);
      const slicedFullValue = verbFull.slice(0, verbFull.length - 2);

      //используется два раза, поэтому вынес
      const pastVerbEnd = PAST_VERB_ENDINGS[state][pronounId];

      if (negativeId === NEGATIVE.ON) {
        switch (timeId) {
          case TIMES.PAST:
            const pastNegativeVerbPart = PAST_NEGATIVE_VERB_PARTS[state];

            return imperative + pastNegativeVerbPart + pastVerbEnd;
          case TIMES.NOW:
            const nowVerbEnd = NOW_VERB_ENDINGS[VOICE.VOWEL][state][pronounId];

            return `${imperative}м${nowVerbEnd}`;
          case TIMES.FUTURE:
            const futureVerbEnd = FUTURE_NEGATIVE_VERB_ENDINGS[state][pronounId];

            return imperative + futureVerbEnd;
          default:
            return '';
        }
      } else if (negativeId === NEGATIVE.OFF) {
        switch (timeId) {
          case TIMES.PAST:

            return imperative + pastVerbEnd;
          case TIMES.NOW:
            const nowVerbEnd = NOW_VERB_ENDINGS[voice][state][pronounId];

            if (voice === VOICE.VOWEL) {
              return slicedImperative + nowVerbEnd;
            }

            return imperative + nowVerbEnd;

          case TIMES.FUTURE:
            const futureVerbEnd = FUTURE_VERB_ENDINGS[state][pronounId];

            return slicedFullValue + futureVerbEnd;
          default:
            return '';
        }
      } else {
        return '';
      }
    };

    getFalseValues = (value, parametr) => {
      const arr = [];

      switch (parametr) {
        case PART_SPEACH.VERB:
          for (let i = 0; i < 6; i++) {
            const {pronounId, timeId, verbId, negativeId} = getRandomIntegers();
            const [verb] = actualValue(VERBS, verbId);
            const item = this.getChangedVerb(verb, pronounId, timeId, negativeId);

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
        default:
          break;
      }

      return [...new Set(arr)];
    };

    getTrueTaskValue = () => {
      const {pronounId, timeId, verbId, negativeId} = getRandomIntegers();
      const [pronoun] = actualValue(PRONOUNS, pronounId);
      const [verb] = actualValue(VERBS, verbId);

      const value = this.getChangedVerb(verb, pronounId, timeId, negativeId);

      return {
        pronoun,
        verb,
        value,
        timeId,
        negativeId
      };
    }
}

export const firstLessonStore = new FirstLessonStore();

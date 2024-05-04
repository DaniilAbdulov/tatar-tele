import { autorun, makeAutoObservable } from "mobx";
import { PART_SPEACH, VERBS, PRONOUNS, LESSONS } from "../../../data/index.js";
import {
    actualValue,
    getRandomIntegers,
    shuffleArray,
} from "../../../utils/index.js";
import { getChangedVerb } from "../../../utils/index.js";
import { messageStore } from "../MessageStore.js";
const myMessageStore = messageStore;

class FirstLessonStore {
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

    setResult = (value) => {
        this.result = value;
    };

    getLessonData = () => {
        this.getTask();
        this.getVariants();
    };

    setTrueTaskValue = (obj) => {
        this.trueTaskValue = obj;
    };

    setFalseTaskVerbs = (arr) => {
        this.falseTaskVerbs = arr;
    };

    setFalseTaskPronouns = (arr) => {
        this.falseTaskPronouns = arr;
    };

    setVariants = (arr) => {
        this.variants = arr;
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
        const { pronoun: truePronoun, value: trueVerbValue } =
            this.trueTaskValue;
        const userAnswerArray = this.userAnswer.map((e) => e.value);

        const userAnswer = userAnswerArray.join(" ");
        const trueAnswer = `${truePronoun.value} ${trueVerbValue}`;

        if (userAnswer === trueAnswer) {
            myMessageStore.handleSuccess();
            setTimeout(() => {
                this.resetTask();
                this.getAnotherTask();
                myMessageStore.setResult("");
            }, 2000);
        } else {
            myMessageStore.handleError();
            setTimeout(() => {
                myMessageStore.setResult("");
            }, 2000);
        }
    };

    setUserAnswer = (variant) => {
        this.variants = this.variants.filter((v) => v.id !== variant.id);
        this.userAnswer = [...this.userAnswer, variant];
        this.userAnswer = this.userAnswer.sort((a, b) => a.id - b.id);
    };

    deleteOneUserAnswerItem = (answer) => {
        this.variants = [...this.variants, answer];
        this.userAnswer = this.userAnswer.filter((a) => a.id !== answer.id);
        this.variants = this.variants.sort((a, b) => a.id - b.id);
    };

    getTask = () => {
        const trueTaskValue = this.getTrueTaskValue();
        const { value, pronoun } = trueTaskValue;

        const falseTaskVerbs = this.getFalseValues(value, PART_SPEACH.VERB);
        const falseTaskPronouns = this.getFalseValues(
            pronoun.value,
            PART_SPEACH.PRONOUN
        );

        this.setTrueTaskValue(trueTaskValue);
        this.setFalseTaskVerbs(falseTaskVerbs);
        this.setFalseTaskPronouns(falseTaskPronouns);
    };

    getFalseValues = (value, parametr) => {
        const arr = [];

        switch (parametr) {
            case PART_SPEACH.VERB:
                for (let i = 0; i < 6; i++) {
                    const { pronounId, timeId, verbId, oneOrTwo: negativeId } =
                        getRandomIntegers();

                    const item = getChangedVerb(
                        verbId,
                        pronounId,
                        timeId,
                        negativeId
                    );

                    if (value !== item) {
                        arr.push(item);
                    }
                }
                break;
            case PART_SPEACH.PRONOUN:
                for (let i = 0; i < 5; i++) {
                    const { pronounId } = getRandomIntegers();
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
        const lessonId = LESSONS.FIRST;
        const { pronounId, timeId, verbId, oneOrTwo: negativeId } = getRandomIntegers();
        const [pronoun] = actualValue(PRONOUNS, pronounId);
        const [verb] = actualValue(VERBS, verbId);

        const value = getChangedVerb(verbId, pronounId, timeId, negativeId);

        return {
            lessonId,
            pronoun,
            verb,
            value,
            timeId,
            negativeId,
        };
    };
}

export const firstLessonStore = new FirstLessonStore();

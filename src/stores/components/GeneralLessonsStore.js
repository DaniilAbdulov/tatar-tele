import { autorun, makeAutoObservable } from "mobx";

class GeneralLessonsStore {
    trueTaskValue = {};
    falseTaskVerbs = [];
    falseTaskPronouns = [];
    variants = [];
    userAnswer = [];
    result = "";

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
        this.result = "";
    };

    getLessonData = () => {
        this.getTask();
        this.getVariants();
    };

    setTrueTaskValue = (obj) => {
        this.trueTaskValue = obj;
    };

    setVariants = (arr) => {
        this.variants = arr;
    };

    getAnotherTask = () => {
        this.resetTask();
        this.getTask();
        this.getVariants();
    };

    getVariants = () => {};

    getTask = () => {};

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

}

export const generalLessonStore = new GeneralLessonsStore();

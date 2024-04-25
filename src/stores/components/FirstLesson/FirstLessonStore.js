import { autorun, makeAutoObservable } from "mobx";
import {
    VERB_ENDINGS,
    VERBS,
    VERB_NEGATIVE,
    GENERAL_ENUMS,
    RUSSIAN_PRONOUNS,
    TIMES,
} from "../../../data/index";
import { RUSSIAN_TIMES } from "../../../data/shared";
class FirstLessonStore {
    verbs = [];
    verbEndings = [];
    verbNegative = [];
    task = {};
    trueVerb = "";

    constructor() {
        makeAutoObservable(this);

        autorun(() => this.getFirstLessonData());
    }

    getFirstLessonData = () => {
        this.setVerbs(VERBS);
        this.setVerbEdnings(VERB_ENDINGS);
        this.setVerbNegative(VERB_NEGATIVE);
        this.setTask();
    };

    setVerbs = (newVerbs) => {
        this.verbs = newVerbs;
    };

    setVerbEdnings = (newVerbEndings) => {
        this.verbEndings = newVerbEndings;
    };

    setVerbNegative = (newVerbNegative) => {
        this.verbNegative = newVerbNegative;
    };

    randomInt = (min, max) => {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

    randomVerb = () => {
        const randomInt = this.randomInt(1, VERBS.length);
        return VERBS.filter((v) => v.id === randomInt)[0];
    };

    setTask = () => {
        this.task = this.getTask();
    };

    setTrueVerb = (word, ending) => {
        this.trueVerb = word + ending;
    };

    getVerbNowEnding = (pronouns, voice, state) => {
        //ДОДЕЛАТЬ НАСТОЯЩЕЕ ВРЕМЯ
        return VERB_ENDINGS.NOW[`${voice}`][`${state}`][`${pronouns}`];
    };

    getVerbPastEnding = (pronouns, state) => {
        return VERB_ENDINGS.PAST[`${state}`][`${pronouns}`];
    };

    getVerbFutureEnding = (pronouns, state) => {
        return VERB_ENDINGS.FUTURE[`${state}`][`${pronouns}`];
    };

    getEnding = (pronouns, time, verb) => {
        const voice = verb.consonant ? "CONSONANT" : "VOWEL";
        const state = verb.solid ? "SOLID" : "SOFT";

        switch (time) {
            case "NOW":
                return this.getVerbNowEnding(pronouns, voice, state);
            case "PAST":
                return this.getVerbPastEnding(pronouns, state);
            case "FUTURE":
                return this.getVerbFutureEnding(pronouns, state);
            default:
                return "";
        }
    };

    getTask = () => {
        const pronouns =
            GENERAL_ENUMS[this.randomInt(0, GENERAL_ENUMS.length - 1)];

        // const timesIndex = this.randomInt(0, TIMES.length - 1);
        const timesIndex = 0;
        const time = TIMES[timesIndex];
        const verb = this.randomVerb();
        const fullVerb = verb.full_value;
        verb.futureValue = fullVerb.slice(0, fullVerb.length - 2);

        const ending = this.getEnding(pronouns, time, verb);

        if (time === "FUTURE") {
            this.setTrueVerb(verb.futureValue, ending);
        } else if (time === "NOW") {
            //Если императив заканчивается на гласный, то удалить последний гласный
            // const nowVerbImperative = verb.imperative.endsWith('')
            this.setTrueVerb(verb.imperative, ending);
        }

        const taskObject = {
            pronouns: RUSSIAN_PRONOUNS[`${pronouns}`],
            time: RUSSIAN_TIMES[timesIndex],
            verb,
        };

        return taskObject;
    };
}

export const firstLessonStore = new FirstLessonStore();

import { PRONOUNS, TIMES, VERBS } from "../data/index.js";
import { randomInt } from "./randomInt.js";

export const getRandomIntegers = () => {
    const pronounId = randomInt(1, PRONOUNS.length);
    const timeId = randomInt(1, Object.keys(TIMES).length);
    const verbId = randomInt(1, VERBS.length);
    const negativeId = randomInt(1, 2);

    return {
        pronounId,
        timeId,
        verbId,
        negativeId,
    };
};

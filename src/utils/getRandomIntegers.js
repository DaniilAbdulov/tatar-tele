import { CASES, NOUNS, PRONOUNS, TIMES, VERBS } from "../data/index.js";
import { randomInt } from "./randomInt.js";

export const getRandomIntegers = () => {
    const nounId = randomInt(1, NOUNS.length);
    let caseId = randomInt(1, Object.keys(CASES).length)
    if (caseId === 1) {
        caseId = 3;
    } else if (caseId === 2) {
        caseId = 5
    } else if (caseId === 4){
        caseId = 6
    }
    const pronounId = randomInt(1, PRONOUNS.length);
    const timeId = randomInt(1, Object.keys(TIMES).length);
    const verbId = randomInt(1, VERBS.length);
    const negativeId = randomInt(1, 2);

    return {
        nounId,
        caseId,
        pronounId,
        timeId,
        verbId,
        negativeId,
    };
};

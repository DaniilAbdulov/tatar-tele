import { ALOT, NOUNS, NOUNS_ALOT_PART, NOUNS_ENDINGS, STATE, VOICE } from "../data/index.js";
import { actualValue } from "./actualValue.js";

export const getChangedNoun = (nounId, caseId, alotId) => {
    const [noun] = actualValue(NOUNS, nounId);
    const start = noun.fullValue;
    const ending = NOUNS_ENDINGS[caseId][noun.voice][noun.state];
    if (alotId === ALOT.ON) {
        return start + NOUNS_ALOT_PART[alotId][noun.state] + ending;
    }
    return start + ending;

};

import { NOUNS, NOUNS_ENDINGS } from "../data/index.js";
import { actualValue } from "./actualValue.js";

export const getChangedNoun = (nounId, caseId) => {
    const [noun] = actualValue(NOUNS, nounId);
    return noun.fullValue + NOUNS_ENDINGS[caseId][noun.voice][noun.state];
};

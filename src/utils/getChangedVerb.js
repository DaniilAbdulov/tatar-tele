import {
  FUTURE_NEGATIVE_VERB_ENDINGS,
  FUTURE_VERB_ENDINGS,
  NEGATIVE,
  NOW_VERB_ENDINGS,
  PAST_NEGATIVE_VERB_PARTS,
  PAST_VERB_ENDINGS,
  TIMES,
  VERBS,
  VOICE,
} from '../data/index.js';
import {actualValue} from './actualValue.js';

export const getChangedVerb = (verbId, pronounId, timeId, negativeId) => {
  const [verb] = actualValue(VERBS, verbId);
  //деструктуризация глагола
  const {fullValue: verbFull, imperative, voice, state} = verb;
  const slicedImperative = imperative.slice(0, imperative.length - 1);
  const slicedFullValue = verbFull.slice(0, verbFull.length - 2);

  //используется два раза, поэтому вынес
  const pastVerbEndD = PAST_VERB_ENDINGS[state][pronounId];
  const pastVerbEndT = 'т' + pastVerbEndD.slice(1);

  if (negativeId === NEGATIVE.ON) {
    switch (timeId) {
      case TIMES.PAST:
        const pastNegativeVerbPart = PAST_NEGATIVE_VERB_PARTS[state];

        return imperative + pastNegativeVerbPart + pastVerbEndD;
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
        if (imperative.endsWith('т') || imperative.endsWith('п')) {
          return imperative + pastVerbEndT;
        }
        return imperative + pastVerbEndD;
      case TIMES.NOW:
        const nowVerbEnd = NOW_VERB_ENDINGS[voice][state][pronounId];

        if (voice === VOICE.VOWEL) {
          return slicedImperative + nowVerbEnd;
        }

        if (imperative.endsWith('п')) {
          const changedImperative =
            imperative.slice(0, imperative.length - 1) + 'б';
          return changedImperative + nowVerbEnd;
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

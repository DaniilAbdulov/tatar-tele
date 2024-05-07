import React from 'react';
import {LessonView} from '../shared/Lesson/LessonView';
import { pairWordsStore } from '../../stores/components/PairWords/PairWordsStore';

export const PairWordsWrapper = () => {
  return (
    <LessonView
      title={'Подберите пару для слова'}
      store={pairWordsStore}
    />
  );
};

import React from 'react';
import {LessonView} from '../shared/Lesson/LessonView';
import {thirthLessonStore} from '../../stores/components/ThirthLesson/ThirthLessonStore';

export const ThirthLessonWrapper = () => {
  return (
    <LessonView
      title={'Сравните два существительных'}
      store={thirthLessonStore}
    />
  );
};

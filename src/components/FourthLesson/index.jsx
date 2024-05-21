import React from 'react';
import {LessonView} from '../shared/Lesson/LessonView';
import {fourthLessonStore} from '#stores/components/FourthLesson/FourthLessonStore';

export const FourthLessonWrapper = () => {
  return (
    <LessonView title={'Переведите на татарский'} store={fourthLessonStore} />
  );
};

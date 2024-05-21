import React from 'react';
import {LessonView} from '../shared/Lesson/LessonView';
import {firstLessonStore} from '#stores/components/FirstLesson/FirstLessonStore';

export const FirstLessonWrapper = () => {
  return <LessonView title={'Просклоняйте глагол'} store={firstLessonStore} />;
};

import React from 'react';
import {observer} from 'mobx-react-lite';
import {thirthLessonStore} from '../../../stores/components/ThirthLesson/ThirthLessonStore';
import {SharedNoun} from '../../shared/Lesson/Content/Task/SharedNoun';
import Title from 'antd/es/typography/Title';

export const AdjectiveTask = observer(() => {
  const {trueTaskValue} = thirthLessonStore;

  return (
    <>
      <SharedNoun noun={trueTaskValue.noun} />
      <Title level={4}>более {trueTaskValue.adjective.russian}, чем</Title>
      <SharedNoun noun={trueTaskValue.secondNoun} />
    </>
  );
});

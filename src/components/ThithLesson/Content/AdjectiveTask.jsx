import React from 'react';
import {observer} from 'mobx-react-lite';
import {thirthLessonStore} from '../../../stores/components/ThirthLesson/ThirthLessonStore';
import {SharedDropDown} from '../../shared/Lesson/Content/Task/SharedDropDown';
import { Space } from 'antd';
import Text from 'antd/es/typography/Text';

export const AdjectiveTask = observer(() => {
  const {trueTaskValue} = thirthLessonStore;

  return (
    <>
      <span>*некоторые предложения могут быть абсолютно бессмысленны</span>
      <Space>

      <SharedDropDown noun={trueTaskValue.noun} />
      <SharedDropDown adjective={trueTaskValue.adjective}/>
      <Text>чем</Text>
      <SharedDropDown noun={trueTaskValue.secondNoun} />
      </Space>
    </>
  );
});

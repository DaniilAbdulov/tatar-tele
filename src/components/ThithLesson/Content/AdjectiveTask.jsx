import React from 'react';
import {observer} from 'mobx-react-lite';
import {thirthLessonStore} from '../../../stores/components/ThirthLesson/ThirthLessonStore';
import {SharedDropDown} from '../../shared/Lesson/Content/Task/SharedDropDown';
import {Flex} from 'antd';
import Text from 'antd/es/typography/Text';

export const AdjectiveTask = observer(() => {
  const {trueTaskValue} = thirthLessonStore;

  if (
    !trueTaskValue?.noun ||
    !trueTaskValue?.secondNoun ||
    !trueTaskValue?.adjective
  ) {
    return <></>;
  }

  return (
    <Flex vertical gap={10} align="center">
      <span style={{textAlign: 'center'}}>
        *некоторые предложения могут быть абсолютно бессмысленны
      </span>

      <SharedDropDown noun={trueTaskValue.noun} />
      <SharedDropDown adjective={trueTaskValue.adjective} />
      <Text>чем</Text>
      <SharedDropDown noun={trueTaskValue.secondNoun} />
    </Flex>
  );
});

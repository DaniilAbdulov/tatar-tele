import React from 'react';
import {observer} from 'mobx-react-lite';
import {Flex} from 'antd';
import {fourthLessonStore} from '../../../stores/components/FourthLesson/FourthLessonStore';
import Title from 'antd/es/typography/Title';

export const NumbersTask = observer(() => {
  const {trueTaskValue} = fourthLessonStore;
  if (!trueTaskValue?.value) {
    return <></>;
  }

  return (
    <Flex gap={10} align="center">
      <Title>{trueTaskValue.randomNumber}</Title>
    </Flex>
  );
});

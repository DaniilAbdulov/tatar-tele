import React from 'react';
import {observer} from 'mobx-react-lite';
import Title from 'antd/es/typography/Title';
import {secondLessonStore} from '../../../../stores/components/SecondLesson/SecondLessonStore';
import {ALOT} from '../../../../data';

export const Case = observer(() => {
  const nounCase = secondLessonStore?.trueTaskValue?.casePart || '';
  const alotPart =
    secondLessonStore?.trueTaskValue?.alotId === ALOT.ON
      ? 'Во множественном числе'
      : 'В единственном числе';
  console.log(secondLessonStore);

  return (
    <>
      <Title level={4}>{nounCase}</Title>
      <span>{alotPart}</span>
    </>
  );
});

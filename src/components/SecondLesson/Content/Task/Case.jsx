import React from 'react';
import {observer} from 'mobx-react-lite';
import Title from 'antd/es/typography/Title';
import {secondLessonStore} from '../../../../stores/components/SecondLesson/SecondLessonStore';
import {ALOT, RUSSIAN_CASES_PART} from '../../../../data/index.js';
import { Card, Col, Flex, Row } from 'antd';

export const Case = observer(() => {
  const trueTaskValue = secondLessonStore.trueTaskValue;
  const alotPart = trueTaskValue?.alotId === ALOT.ON
  ? 'Во множественном'
  : 'В единственном';
  const nounCase = trueTaskValue?.casePart || '';
  const russianNounPart = RUSSIAN_CASES_PART[trueTaskValue?.pronounId] || '';

  const arrOfParts = [
  {
    id:1,
    title: alotPart,
    value: 'числе'
  },
  {
    id:2,
    title: nounCase,
    value: 'падеже'
  },
  {
    id:1,
    title: 'Принадлежащий',
    value: russianNounPart
  },
];

  console.log(arrOfParts);

  return (
    <Flex wrap gap={5}>
      {arrOfParts?.length > 1 && (
        arrOfParts.map((c) => {
          return (
      <Card size='small' title={c.title} bordered={false} key={c.id} style={{textAlign:'center'}}>
        {c.value}
      </Card>

          )
        })
      )}

  </Flex>
  );
});

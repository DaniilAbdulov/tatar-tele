import React from 'react';
import {observer} from 'mobx-react-lite';
import {secondLessonStore} from '../../../../stores/components/SecondLesson/SecondLessonStore';
import {ALOT, RUSSIAN_CASES_PART} from '../../../../data/index.js';
import { Descriptions, Flex} from 'antd';

export const Case = observer(() => {
  const trueTaskValue = secondLessonStore.trueTaskValue;
  const alotPart = trueTaskValue?.alotId === ALOT.ON
  ? 'несколько'
  : 'один';
  const nounCase = trueTaskValue?.casePart || '';
  const russianNounPart = RUSSIAN_CASES_PART[trueTaskValue?.pronounId] || '';

  const arrOfParts = [
  {
    id:1,
    label: 'Численность',
    children: <span>{alotPart}</span>
  },
  {
    id:2,
    label: 'Принадлежащий',
    children: <span>{russianNounPart}</span>
  },
  {
    id:3,
    label: 'Падеж',
    children: <span>{nounCase}</span>
  },
];

  console.log(arrOfParts);

  return (
    <Flex wrap gap={5}>
<Descriptions items={arrOfParts} />


  </Flex>
  );
});

import React from 'react';
import {observer} from 'mobx-react-lite';
import {Dropdown} from 'antd';
import {secondLessonStore} from '../../../../stores/components/SecondLesson/SecondLessonStore';

export const Noun = observer(() => {
  const noun = secondLessonStore?.trueTaskValue?.noun || '';
  const items = [
    {
      label: `Перевод: ${noun.fullValue}`,
      key: '1',
    },
  ];
  const menuProps = {
    items,
  };
  return <Dropdown.Button menu={menuProps}>{noun.russian}</Dropdown.Button>;
});

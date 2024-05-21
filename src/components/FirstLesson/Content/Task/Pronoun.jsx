import React from 'react';
import {observer} from 'mobx-react-lite';
import {firstLessonStore} from '#stores/components/FirstLesson/FirstLessonStore';
import Text from 'antd/es/typography/Text';

export const Pronoun = observer(() => {
  const pronoun = firstLessonStore?.trueTaskValue?.pronoun?.rus_value || '';

  return <Text>{pronoun}</Text>;
});

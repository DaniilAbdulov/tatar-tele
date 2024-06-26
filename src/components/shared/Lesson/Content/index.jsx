import React from 'react';
import {Divider, Flex} from 'antd';
import {Answer} from './Answer/Answer';
import {Task} from './Task/index';
import {Variants} from './Variants/Variants';
import {CheckAnswer} from './CheckAnswer/index';
import {observer} from 'mobx-react-lite';
import {LESSONS} from '#data/index.js';

export const Content = observer(({store, lessonId}) => {
  const task = store?.trueTaskValue || {};
  const answer = [...store?.userAnswer] || [];
  const variants = store?.variants || [];

  if (lessonId !== LESSONS.FIVE) {
    return (
      <Flex vertical align="center">
        <Task task={task} />
        <Divider />
        <Answer answer={answer} store={store} />
        <Divider />
        <Variants variants={variants} store={store} />
        <Divider />
        <CheckAnswer store={store} />
      </Flex>
    );
  } else {
    return (
      <Flex vertical align="center">
        <Task task={task} />
      </Flex>
    );
  }
});

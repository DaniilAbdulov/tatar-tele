import React from 'react';
import {LESSONS} from '../../../../../data/index.js';
import {TimePart} from '../../../../FirstLesson/Content/Task/TimePart';
import {Verb} from '../../../../FirstLesson/Content/Task/Verb';
import {Flex, Space} from 'antd';
import {Pronoun} from '../../../../FirstLesson/Content/Task/Pronoun';
import {Case} from '../../../../SecondLesson/Content/Task/Case';
import {AdjectiveTask} from '../../../../ThithLesson/Content/AdjectiveTask';
import {SharedDropDown} from './SharedDropDown.jsx';

export const Task = ({task}) => {
  switch (task?.lessonId) {
    case LESSONS.FIRST:
      return (
        <Flex>
          <Space>
            <Pronoun />
            <TimePart />
            <Verb />
          </Space>
        </Flex>
      );
    case LESSONS.SECOND:
      return (
        <Space>
          <Flex vertical>
            <SharedDropDown noun={task.noun} />
            <Case />
          </Flex>
        </Space>
      );
    case LESSONS.THIRD:
      return <AdjectiveTask />;
    default:
      return <div>None</div>;
  }
};

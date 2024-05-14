import React from 'react';
import {LESSONS} from '../../../../../data/index.js';
import {TimePart} from '../../../../FirstLesson/Content/Task/TimePart';
import {Verb} from '../../../../FirstLesson/Content/Task/Verb';
import {Flex, Space} from 'antd';
import {Pronoun} from '../../../../FirstLesson/Content/Task/Pronoun';
import {Case} from '../../../../SecondLesson/Content/Task/Case';
import {AdjectiveTask} from '../../../../ThithLesson/Content/AdjectiveTask';
import {NumbersTask} from '../../../../FourthLesson/Content/NumbersTask.jsx';
import {SharedDropDown} from './SharedDropDown.jsx';
import {Pairs} from '../../../../PairWords/Content/Pairs.jsx';

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
        <Flex>
          <Flex vertical>
            <SharedDropDown noun={task.noun} />

            <Case />
          </Flex>
        </Flex>
      );
    case LESSONS.THIRD:
      return <AdjectiveTask />;
    case LESSONS.FOURTH:
      return <NumbersTask />;
    case LESSONS.FIVE:
      return <Pairs />;
    default:
      return <div>None</div>;
  }
};

import React from 'react';
import {LESSONS} from '../../../../../data/index.js';
import {TimePart} from '../../../../FirstLesson/Content/Task/TimePart';
import {Verb} from '../../../../FirstLesson/Content/Task/Verb';
import {Flex, Space} from 'antd';
import {Pronoun} from '../../../../FirstLesson/Content/Task/Pronoun';
import {Case} from '../../../../SecondLesson/Content/Task/Case';
import {Noun} from '../../../../SecondLesson/Content/Task/Noun';

export const Task = ({task}) => {
  if (task?.lessonId === LESSONS.FIRST) {
    return (
      <Flex>
        <Space>
          <Pronoun />
          <TimePart />
          <Verb />
        </Space>
      </Flex>
    );
  }
  if (task?.lessonId === LESSONS.SECOND) {
    return (
      <Space>
        <Flex vertical>

        <Noun />
        <Case />
        </Flex>
      </Space>



    );
  }
  return <div>None</div>;
};

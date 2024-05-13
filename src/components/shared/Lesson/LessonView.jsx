import React from 'react';
import {Content} from './Content';
import {Button, Card, Divider, Flex} from 'antd';
import {NavLink} from 'react-router-dom';
import {Message} from '../Message';

export const LessonView = ({title, store}) => {
  const lessonId = store.lessonId;

  return (
    <Flex
      vertical={true}
      align="center"
      style={{maxWidth: '600px', margin: '10px'}}
    >
      <Divider />
      <Card title={title || ''}>
        <Content store={store} lessonId={lessonId} />
      </Card>
      <Divider />
      <Button>
        <NavLink to="/">К списку уроков</NavLink>
      </Button>
      <Message />
    </Flex>
  );
};

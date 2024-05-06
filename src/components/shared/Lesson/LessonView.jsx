import React from 'react';
import {Content} from './Content';
import {Button, Card, Divider, Flex, Space} from 'antd';
import {NavLink} from 'react-router-dom';
import {Message} from '../Message';
import { LinearProgress } from '../LinearProgress';

export const LessonView = ({title, store}) => (
  <Flex
    vertical={true}
    align="center"
    style={{maxWidth: '600px', margin: '10px'}}
  >
    <LinearProgress/>
    <Divider />
    <Card title={title || ''}>
      <Content store={store} />
    </Card>
    <Divider />
    <Button>
      <NavLink to="/">К списку уроков</NavLink>
    </Button>
    <Message />
  </Flex>
);

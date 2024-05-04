import React from 'react';
import {observer} from 'mobx-react-lite';
import {Card, Flex} from 'antd';
import {homeStore} from '../stores/views/HomeStore.js';
import {NavLink} from 'react-router-dom';
import './Home.scss';

export const Home = observer(() => {
  const lessons = homeStore.lessons;

  return (
    <Card title="Выберите урок" className="content">
      <Flex wrap="wrap" gap="small">
        {lessons &&
          lessons?.length &&
          lessons.map(lesson => {
            return (
              <Card key={lesson.id} className="card">
                <NavLink style={{color: 'black'}} to={lesson.path}>
                  {lesson.title}
                </NavLink>
              </Card>
            );
          })}
      </Flex>
    </Card>
  );
});

import React from 'react';
import {observer} from 'mobx-react-lite';
import { pairWordsStore } from '../../../stores/components/PairWords/PairWordsStore';
import { Button, Divider, Flex } from 'antd';

export const Pairs = observer(() => {
  //const {trueTaskValue} = pairWordsStore;

  const variants = [
    {
        id: 1,
        fullValue: 'One',
        imperative: 'ал',
        russian: 'один',
        voice: 1,
        state: 1,
      },
      {
        id: 2,
        fullValue: 'Two',
        imperative: 'кил',
        russian: 'два',
        voice: 1,
        state: 2,
      },
      {
        id: 3,
        fullValue: 'Three',
        russian: 'три',
        sound: 1,
        voice: 1,
        state: 2,
      },
      {
        id: 4,
        fullValue: 'Four',
        russian: 'четыре',
        russianSuper: 'больше',
        state: 1
      },
  ];

  const sendAnswer = (id) => {
    pairWordsStore.setUserAnswer(id);
    pairWordsStore.checkAnswer();
  }

  return (
    <Flex>
     <Flex vertical gap={10}>
        {variants.map((v) => <Button key={v.id} onClick={()=>sendAnswer(v.id)}>{v.fullValue}</Button>)}
     </Flex>
     <Divider type="vertical"/>
     <Flex vertical gap={10}>
     {variants.sort((a, b) => b.id - a.id).map((v) => <Button key={v.id} onClick={()=>sendAnswer(v.id)}>{v.russian}</Button>)}
     </Flex>
    </Flex>
  );
});

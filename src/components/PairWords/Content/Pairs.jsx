import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {pairWordsStore} from '../../../stores/components/PairWords/PairWordsStore';
import {Button, Divider, Flex} from 'antd';

export const Pairs = observer(() => {
  const {leftColumnArray, rightColumnArray} = pairWordsStore?.variants;
  const answer = pairWordsStore?.userAnswer;
  const ansIds = answer.map(a => a.id);

  const sendAnswer = value => {
    pairWordsStore.setUserAnswer(value);
    pairWordsStore.checkAnswer();
  };

  useEffect(() => {
    if (!leftColumnArray.length || !rightColumnArray.length) {
      pairWordsStore.getLessonData();
    }
  }, [leftColumnArray, rightColumnArray]);

  const upperedValue = value => {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
  };

  return (
    <Flex>
      <Flex vertical gap={10}>
        {leftColumnArray.map(v => (
          <Button
            key={v.id}
            disabled={ansIds.includes(v.id)}
            onClick={() => sendAnswer(v)}
          >
            {upperedValue(v.fullValue)}
          </Button>
        ))}
      </Flex>
      <Divider type="vertical" />
      <Flex vertical gap={10}>
        {rightColumnArray
          .slice()
          .sort((a, b) => b.id - a.id)
          .map(v => (
            <Button
              key={v.id}
              disabled={ansIds.includes(v.id)}
              onClick={() => sendAnswer(v)}
            >
              {upperedValue(v.russian)}
            </Button>
          ))}
      </Flex>
    </Flex>
  );
});

import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {pairWordsStore} from '../../../stores/components/PairWords/PairWordsStore';
import {Button, Divider, Flex} from 'antd';

export const Pairs = observer(() => {
  const {variants} = pairWordsStore;

  const sendAnswer = id => {
    pairWordsStore.setUserAnswer(id);
    pairWordsStore.checkAnswer();
  };

  useEffect(() => {
    if (!variants.length) {
      pairWordsStore.getLessonData();
    }
  }, [variants]);

  return (
    <Flex>
      <Flex vertical gap={10}>
        {variants.map(v => (
          <Button key={v.id} onClick={() => sendAnswer(v.id)}>
            {v.fullValue}
          </Button>
        ))}
      </Flex>
      <Divider type="vertical" />
      <Flex vertical gap={10}>
        {variants
          .slice()
          .sort((a, b) => b.id - a.id)
          .map(v => (
            <Button key={v.id} onClick={() => sendAnswer(v.id)}>
              {v.russian}
            </Button>
          ))}
      </Flex>
    </Flex>
  );
});

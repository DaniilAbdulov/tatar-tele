import React, { useCallback, useEffect} from 'react';
import {Button} from 'antd';

export const CheckAnswer = ({store}) => {
  const checkHandler = () => {
    store.checkAnswer();
  };

  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;
    console.log([key, keyCode]);
    if (key === 'Enter' || keyCode === 13) {
      checkHandler();
    }
   }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
    };
   }, [handleUserKeyPress]);

  return (
    <Button type="primary" onClick={() => checkHandler()}>
      Проверить ответ
    </Button>
  );
};

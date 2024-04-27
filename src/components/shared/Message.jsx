import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import { firstLessonStore } from '../../stores/components/FirstLesson/FirstLessonStore';
import { observer } from 'mobx-react-lite';

export const Message = observer(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const result = firstLessonStore.result;

  useEffect(() => {
    const handleSuccess = () => {
      messageApi.open({
        type: 'success',
        content: 'Әйбат булды !',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    };

    const handleError = () => {
      messageApi.open({
        type: 'error',
        content: 'Неверный ответ',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    };

    if (result === 'success') {
      handleSuccess();
      setTimeout(() => {
        firstLessonStore.setResult('');
        firstLessonStore.resetTask();
        firstLessonStore.getAnotherTask();
      }, 2000);
    } else if (result === 'error') {
      handleError();
      setTimeout(() => {
        firstLessonStore.setResult('');
      }, 2000);
    }
  }, [result, messageApi]);
  return (
    <>
      {contextHolder}
    </>
  );
});

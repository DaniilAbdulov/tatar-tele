import React, {useEffect} from 'react';
import {message} from 'antd';
import {observer} from 'mobx-react-lite';
import {messageStore} from '../../stores/components/MessageStore';

export const Message = observer(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const result = messageStore.result;

  useEffect(() => {
    const handleSuccess = () => {
      messageApi.open({
        type: 'success',
        content: 'Әйбат булды !',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    };

    const handleError = () => {
      messageApi.open({
        type: 'error',
        content: 'Неверный ответ',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    };

    if (result === 'success') {
      handleSuccess();
    } else if (result === 'error') {
      handleError();
    }
  }, [result, messageApi]);
  return <>{contextHolder}</>;
});

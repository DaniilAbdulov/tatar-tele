import {Dropdown} from 'antd';
import {observer} from 'mobx-react-lite';
import {BulbOutlined} from '@ant-design/icons';

export const MyHint = observer(({store}) => {
  const {trueTaskValue} = store;

  if (!trueTaskValue?.value) {
    return <></>;
  }

  const items = [
    {
      key: '1',
      label: trueTaskValue.value,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <BulbOutlined style={{cursor: 'pointer'}} />
    </Dropdown>
  );
});

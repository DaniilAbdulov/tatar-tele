import {useState} from 'react';
import {Dropdown} from 'antd';
import {observer} from 'mobx-react-lite';
import {BulbOutlined, BulbFilled} from '@ant-design/icons';
import './shared.scss';

export const MyHint = observer(({store}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {trueTaskValue} = store;

  if (!trueTaskValue?.value) {
    return <></>;
  }

  const handleOpenChange = nextOpen => {
    setIsOpen(nextOpen);
  };

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
      onOpenChange={handleOpenChange}
    >
      {isOpen ? (
        <BulbFilled className="hovered" />
      ) : (
        <BulbOutlined style={{cursor: 'pointer'}} />
      )}
    </Dropdown>
  );
});

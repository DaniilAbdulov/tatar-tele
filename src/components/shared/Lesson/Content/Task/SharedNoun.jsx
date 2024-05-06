import React from 'react';
import {Dropdown} from 'antd';

export const SharedNoun = ({noun}) => {
  const items = [
    {
      label: `Перевод: ${noun.fullValue}`,
      key: '1',
    },
  ];
  const menuProps = {
    items,
  };
  return <Dropdown.Button menu={menuProps}>{noun.russian}</Dropdown.Button>;
};

import React from 'react';
import {Dropdown} from 'antd';

export const SharedDropDown = ({noun, adjective = {}}) => {
  const items = adjective?.id ? 
  [
    {
      label: `Перевод: ${adjective.value}`,
      key: '1',
    },
  ]
  :[
    {
      label: `Перевод: ${noun.fullValue}`,
      key: '1',
    },
  ];
  const menuProps = {
    items,
  };
  return <Dropdown.Button menu={menuProps}>{adjective?.id ? adjective.russianSuper : noun.russian}</Dropdown.Button>;
};

import React from 'react';
import {Dropdown} from 'antd';

export const SharedDropDown = ({noun, adjective = {}}) => {
  const items = adjective?.id
    ? [
        {
          label: `Перевод: ${adjective.fullValue}`,
          key: '1',
        },
      ]
    : [
        {
          label: `Перевод: ${noun.fullValue}`,
          key: '1',
        },
      ];
  const menuProps = {
    items,
  };
  return (
    <Dropdown.Button style={{justifyContent: 'center'}} menu={menuProps}>
      {adjective?.id ? adjective.russianSuper : noun.russian}
    </Dropdown.Button>
  );
};

import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import { Dropdown } from "antd";


export const Verb = observer(() => {
    const verb = firstLessonStore?.trueTaskValue?.verb || "";
    const items = [
        {
          label: `Инфинитив: ${verb.fullValue}`,
          key: '1',
        },
        {
          label: `Повелительная форма: ${verb.imperative}`,
          key: '2',
        }
      ];
      const menuProps = {
        items
      };
    return (
        <Dropdown.Button menu={menuProps}>
            {verb.russian}
        </Dropdown.Button>
    );
});

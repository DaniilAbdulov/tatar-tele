import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import Title from "antd/es/typography/Title";

export const Pronoun = observer(() => {
    const pronoun = firstLessonStore?.trueTaskValue?.pronoun?.rus_value || "";

    return (
        <Title level={4}>
            {pronoun}
        </Title>
    );
});

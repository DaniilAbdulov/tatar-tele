import React from "react";
import { observer } from "mobx-react-lite";
import Title from "antd/es/typography/Title";
import { secondLessonStore } from "../../../../../stores/components/SecondLesson/SecondLessonStore";

export const Case = observer(() => {
    const nounCase = secondLessonStore?.trueTaskValue?.casePart || "";

    return (
        <Title level={4}>
            {nounCase}
        </Title>
    );
});

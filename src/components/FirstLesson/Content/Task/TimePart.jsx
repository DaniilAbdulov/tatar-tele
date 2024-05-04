import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import { RUSSIAN_TIME_PART, TIMES, RUSSIAN_NEGATIVE } from "../../../../data/index.js";
import Title from "antd/es/typography/Title";


export const TimePart = observer(() => {
    const verb = firstLessonStore?.trueTaskValue;

    const negative = RUSSIAN_NEGATIVE[verb.negativeId] || '';
    const timePart = RUSSIAN_TIME_PART[verb.timeId]?.[verb.pronoun.id] || '';

    const str = verb.timeId === TIMES.PAST ? timePart + ' ' + negative : negative + ' ' + timePart;

    return (
        <Title level={4}>
            {str}
        </Title>
    );
});

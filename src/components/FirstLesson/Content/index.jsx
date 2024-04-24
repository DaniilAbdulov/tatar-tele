import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../stores/components/FirstLesson/FirstLessonStore";

export const Content = observer(() => {
    const task = firstLessonStore.task;
    const trueVerb = firstLessonStore.trueVerb;
    console.log(task);
    console.log(trueVerb);
    return (
        <>
            <div>
                {task.pronouns} (отрицательная форма) ({task.time}){" "}
                {task.actualVerb}
            </div>
            <div>{trueVerb}</div>
        </>
    );
});

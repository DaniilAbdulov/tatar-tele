import React from "react";
import { LessonView } from "../shared/Lesson/LessonView";
import { secondLessonStore } from "../../stores/components/SecondLesson/SecondLessonStore";

export const SecondLessonWrapper = () => {
    return <LessonView title={'Просклоняйте существительное'} store={secondLessonStore}/>
};

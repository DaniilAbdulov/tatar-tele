import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import { AnsNVans } from "../../../shared/AnsNVans";

export const Answer = observer(() => {
  const answer = [...firstLessonStore?.userAnswer] || [];

  const answerClick = (value) => {
    firstLessonStore.deleteOneUserAnswerItem(value);
  };

  return <AnsNVans array={answer} handler={answerClick}/>

});

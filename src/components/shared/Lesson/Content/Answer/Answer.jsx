import React from "react";
import { AnsVans } from "../AnsVans";


export const Answer = ({answer, store}) => {
  const answerClick = (value) => {
    store.deleteOneUserAnswerItem(value);
  };

  return <AnsVans array={answer} handler={answerClick}/>

};

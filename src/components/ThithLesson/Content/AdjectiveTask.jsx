import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {thirthLessonStore} from '../../../stores/components/ThirthLesson/ThirthLessonStore';
import {SharedDropDown} from '../../shared/Lesson/Content/Task/SharedDropDown';
import './AdjectiveTask.scss';
import {progressStore} from '../../../stores/components/ProgressStore';

export const AdjectiveTask = observer(() => {
  const [showInfo, setShowInfo] = useState(true);
  const {trueTaskValue} = thirthLessonStore;
  const trueAnswerCount = progressStore.countOfTrueAnswers;
  const errorResult = progressStore.result;

  useEffect(() => {
    if (trueAnswerCount || errorResult) {
      setShowInfo(false);
    }
  }, [showInfo, trueAnswerCount, errorResult]);

  return (
    <div className="adjective">
      {showInfo && (
        <span>*некоторые предложения могут быть абсолютно бессмысленны</span>
      )}
      <div className="adjective_task">
        <SharedDropDown noun={trueTaskValue.noun} />
        <SharedDropDown adjective={trueTaskValue.adjective} />
        <span>чем</span>
        <SharedDropDown noun={trueTaskValue.secondNoun} />
      </div>
    </div>
  );
});

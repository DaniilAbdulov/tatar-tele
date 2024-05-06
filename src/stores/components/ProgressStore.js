import {makeAutoObservable} from 'mobx';
import { COUNT_FOR_LESSON_DONE } from '../../data/index.js';

class ProgressStore {
  result = '';
  lessonIsDone = false;
  countOfTrueAnswers = 0;
  percent = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setResult = value => {
    this.result = value;
  };

  resetStore = () => {
    this.result = '';
    this.lessonIsDone = false;
    this.countOfTrueAnswers = 0;
    this.percent = 0;
  }

  checkDoneLesson = () => {
    if (COUNT_FOR_LESSON_DONE === this.countOfTrueAnswers) {
      setTimeout(()=>{
        this.lessonIsDone = true;
      },1500)
    }
  }

  ingreeCountOfTrueTask = () => {
    this.countOfTrueAnswers += 1;

    const percentFloat = this.countOfTrueAnswers/COUNT_FOR_LESSON_DONE;
    const percent = Math.round(percentFloat * 100);
    this.percent = percent;

    this.checkDoneLesson();

  }

  handleSuccess = () => {
    //this.setResult('success');
    this.ingreeCountOfTrueTask();
  };

  handleError = () => {
    this.setResult('error');
  };
}

export const progressStore = new ProgressStore();

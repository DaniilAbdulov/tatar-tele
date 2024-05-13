import {makeAutoObservable} from 'mobx';
import {COUNT_FOR_LESSON_DONE} from '../../data/index.js';

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
  };

  checkDoneLesson = () => {
    if (COUNT_FOR_LESSON_DONE === this.countOfTrueAnswers) {
      this.lessonIsDone = true;
    }
  };
  
  getPercent = (count) => {
    const percentFloat = count / COUNT_FOR_LESSON_DONE;
    const percent = Math.round(percentFloat * 100);
  };

  ingreeCountOfTrueTask = () => {
    this.countOfTrueAnswers += 1;
    this.percent = this.getPercent(this.countOfTrueAnswers);
    this.checkDoneLesson();
  };
  
  degreeCountOfTrueTask = () => {
    if (this.countOfTrueAnswers > 0) {
      this.countOfTrueAnswers -= 1;
      this.percent = this.getPercent(this.countOfTrueAnswers);
     }
  };
  
  handleSuccess = () => {
    //this.setResult('success');
    this.ingreeCountOfTrueTask();
  };

  handleError = () => {
    this.setResult('error');
    this.degreeCountOfTrueTask();
  };
}

export const progressStore = new ProgressStore();

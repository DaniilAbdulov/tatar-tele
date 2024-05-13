import {autorun, makeAutoObservable} from 'mobx';

class GeneralLessonsStore {
  lessonId = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLessonId = id => (this.lessonId = id);

  resetTask = () => {
    this.lessonId = null;
  };
}

export const generalLessonStore = new GeneralLessonsStore();

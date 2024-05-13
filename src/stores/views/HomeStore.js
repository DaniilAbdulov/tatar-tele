import {autorun, makeAutoObservable} from 'mobx';

class HomeStore {
  lessons = [];
  constructor() {
    makeAutoObservable(this);

    autorun(() => this.getLessons());
  }

  getLessons = () => {
    this.setLessons([
      {
        id: 1,
        title: 'Образование глаголов',
        path: '/lesson/first',
      },
      {
        id: 2,
        title: 'Образование существительных',
        path: '/lesson/second',
      },
      {
        id: 3,
        title: 'Образование прилагательных',
        path: '/lesson/thirth',
      },
      {
        id: 4,
        title: 'Счёт',
        path: '/lesson/fourth',
      },
      {
        id: 5,
        title: 'Подбери пару',
        path: '/pairs',
      },
    ]);
  };

  setLessons = lessonsList => {
    this.lessons = lessonsList;
  };
}

export const homeStore = new HomeStore();

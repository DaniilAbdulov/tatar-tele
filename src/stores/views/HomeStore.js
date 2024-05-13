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
        path: '/first',
      },
      {
        id: 2,
        title: 'Образование существительных',
        path: '/second',
      },
      {
        id: 3,
        title: 'Образование прилагательных',
        path: '/thirth',
      },
      {
        id: 4,
        title: 'Счёт',
        path: '/fourth',
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

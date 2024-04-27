import { autorun, makeAutoObservable } from "mobx";

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
                title: "Образование глаголов",
                path: "/first",
            },
            {
                id: 2,
                title: "Падежи существительных",
                path: "/second",
            },
            {
                id: 3,
                title: "Принадлежность",
                path: "/thirth",
            },
            {
                id: 4,
                title: "Счёт",
                path: "/fourth",
            },
        ]);
    };

    setLessons = (lessonsList) => {
        this.lessons = lessonsList;
    };
}

export const homeStore = new HomeStore();

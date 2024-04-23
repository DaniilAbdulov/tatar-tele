import { autorun, makeAutoObservable } from "mobx";

class HomeStore {
    constructor() {
        makeAutoObservable(this);

        autorun(() => this.getHomePageData());
    }

    getHomePageData = () => {
        console.log(`getHomePageData`);
        this.setData([
            {
                title: "Урок 1",
                value: "Образование глаголов",
                path: "/first",
            },
            {
                title: "Урок 2",
                value: "Падежи существительных",
                path: "/second",
            },
            {
                title: "Урок 3",
                value: "Принадлежность",
                path: "/thirth",
            },
            {
                title: "Урок 4",
                value: "Счёт",
                path: "/fourth",
            },
        ]);
    };

    setData = (newData) => {
        this.data = newData;
    };
}

export const homeStore = new HomeStore();

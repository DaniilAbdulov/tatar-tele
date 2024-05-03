import { autorun, makeAutoObservable } from "mobx";


class MessageStore {
    result = "";
    constructor() {
        makeAutoObservable(this);
    }

    setResult = (value) => {
        this.result = value;
    };

    handleSuccess = () => {
        this.setResult('success');
    };

    handleError = () => {
        this.setResult('error');
    };
}

export const messageStore = new MessageStore();

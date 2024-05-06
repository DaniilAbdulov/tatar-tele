import {makeAutoObservable} from 'mobx';

class ProgressStore {
  result = '';

  constructor() {
    makeAutoObservable(this);
  }

  setResult = value => {
    this.result = value;
  };

  handleSuccess = () => {
    this.setResult('success');
  };

  handleError = () => {
    this.setResult('error');
  };
}

export const progressStore = new ProgressStore();

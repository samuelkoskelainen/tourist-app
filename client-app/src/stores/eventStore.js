import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';

export default class EventStore {
  events = [];
  loading = false;
  title = 'test';

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.loading = true;
    try {
      await agent.Events.list().then((result) => {
        this.events = result;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  };
}

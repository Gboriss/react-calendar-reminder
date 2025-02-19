import { makeAutoObservable } from "mobx";

interface Event {
  id: number;
  title: string;
}

class EventStore {
  events: { [date: string]: Event[] } = {};

  constructor() {
    makeAutoObservable(this);
  }

  addEvent(date: string, title: string) {
    const newEvent = { id: Date.now(), title };

    if (!this.events[date]) {
      this.events[date] = [];
    }

    this.events[date].push(newEvent);
  }

  removeEvent(date: string, eventId: number) {
    if (this.events[date]) {
      this.events[date] = this.events[date].filter(
        (event) => event.id !== eventId
      );
      if (this.events[date].length === 0) delete this.events[date];
    }
  }

  getEventsByDate(date: string) {
    return this.events[date] || [];
  }
}

const eventStore = new EventStore();
export default eventStore;

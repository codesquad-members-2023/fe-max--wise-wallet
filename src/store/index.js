export let currDate = new Date();

// class Store {
//   #state;
//   #subscriberCbs = new Set();

//   constructor(state) {
//     this.#state = state;
//   }

//   getState() {
//     return this.#state;
//   }

//   setState(newState) {
//     this.#state = { ...this.#state, ...newState };
//     this.notifySubscribers();
//   }

//   addSubscriber(subscriberCb) {
//     this.#subscriberCbs.add(subscriberCb);
//   }

//   notifySubscribers() {
//     this.#subscriberCbs.forEach((cb) => cb());
//   }
// }

// class Subscriber {
//   #cb;

//   constructor(cb) {
//     this.#cb = cb;
//   }

//   subscribeTo(publisher) {
//     publisher.addSubscriber(this.#cb);
//   }
// }

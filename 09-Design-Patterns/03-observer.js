class Subject {
  constructor() { this.observers = []; }

  subscribe(observer) { this.observers.push(observer); }

  unsubscribe(observer) { this.observers = this.observers.filter(obs => obs !== observer); }

  notify() { this.observers.forEach(observer => observer.update()); }
}

class Observer {
  constructor(name) { this.name = name; }

  update() { console.log(`${this.name} has been notified!`); }
}

const weatherStation = new Subject();


const weatherApp = new Observer("Weather App");
const newsChannel = new Observer("News Channel");
const userDevice = new Observer("User Device");


weatherStation.subscribe(weatherApp);
weatherStation.subscribe(newsChannel);
weatherStation.subscribe(userDevice);


console.log("Weather update: It's raining!");
weatherStation.notify(); // All observers are notified


weatherStation.unsubscribe(newsChannel);


console.log("\nWeather update: It's sunny!");
weatherStation.notify();
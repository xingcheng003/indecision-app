class Person {
  constructor(name = "Anoymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }

  getGreeting() {
    return `Hi, I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

// Traveler -> Person
// Add support for home location
// Override getGreeting
// 1. Hi. I am Jason Zhang. I'm visiting from New York

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += `I'm visiting from ${this.location}`;
    }
    return greeting;
  }
}

const me = new Traveler("Jason Zhang", 25, "New York");
// console.log(me.hasMajor());
// console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

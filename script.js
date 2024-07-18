/*************  Advance JavaScript Problem Solving Day 2  ***************/

// TODO: 1. You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

let person = {
  name: "Don",
  age: 23,
};

let { name, age } = person;
console.log(name); // Don
console.log(age); // 23

// TODO: 2. Create a module that exports a function to calculate the area of a circle and import it into another file.

// import { calculateArea } from "./module.js";
// const radius = 5;

// const area = calculateArea(radius);
// console.log("Area of the circle:", area);

// TODO: 3. Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(20, 8);

const area = rect.calculateArea();
console.log("Area of the rectangle:", area); // 160

// TODO: 4. Create a class Person with a getter and setter for the fullName property.

class Person {
  constructor(fullName) {
    this.name = fullName;
  }
  get getName() {
    return this.name;
  }
  set setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

let man = new Person("Muhammad Fahim Faysal");
console.log(man.getName); // Muhammad Fahim Faysal

man.setName = "Programmer Mia";
console.log(man.getName); // Programmer Mia

// TODO: 5. Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }
  calculateCircumference() {
    const pi = Math.PI;
    return 2 * pi * this.radius;
  }
};

const circle1 = new Circle(20);
const circumference = circle1.calculateCircumference();
console.log("Circumference:", circumference); // Circumference: 125.66370614359172

// TODO: 6. Create an object with computed property names based on variables.

const profession = "skill";
const work = "Programmer";

const human = {
  [profession]: "Web-developer",
  fullName: "Muhammad Fahim Faysal",
  age: 23,
};

console.log(human.skill); // Web-developer
console.log(human[profession]); // Web-developer

// TODO: 7. Create a base class Animal and a derived class Dog that inherits from Animal.

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    return "walking on " + this.legs + " legs";
  }
}

class Dog extends Animal {
  constructor(legs) {
    super(legs);
  }
  run() {
    return this.walk() + ", now he can running";
  }
}

let myAnimal = new Dog(4);
console.log(myAnimal);
console.log(myAnimal.run());
console.log(myAnimal.walk());

// TODO: 8. Use new.target to create an abstract class Shape that cannot be instantiated directly.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError(
        "Shape is an abstract class and cannot be instantiated directly"
      );
    }
  }
}

class Circles extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circles = new Circles(5);
console.log(circles.calculateArea()); // 78.53981633974483

// TODO: 9. Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil {
  static square(number) {
    return number * number;
  }
}
const result = MathUtil.square(8);
console.log(result); // 64

// TODO: 10. Create an object with a symbol as a property key and demonstrate accessing it.

const mySymbol = Symbol("secret");

const myObject = {
  [mySymbol]: "This is a secret value",
};

console.log(myObject[mySymbol]); // This is a secret value

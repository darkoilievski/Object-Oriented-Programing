'use strict';

/*
OBJECT ORIENTED PROGRAMING (OOP)

*/
// WHAT IS OBJECT ORIENTED PROGRAMING LECTURE 206
/*
1. API's are interactions that happen through a public interface.
Methods that the code outside of the object can access and use 
to communicate with the object
// 
2. OOP was developed with the goal of organizing code to make it more 
flexible and easier to maintain (to avoid so called "spagheti code")
// 
3. In OOP we use classes, like a blueprint* (architechture) 
from which we can create new objects from which we can create instances
We cvan create multiple instances using tthe same class (like building a house
  from the same blueprint*)

4. Class 4 fundamental principles of OOP
* Abstraction - basically means to ignore or hide details that dont matter
* Encapsulation - keep properties and methods private inside the class so
they are not accesible from outside the class
* Inheritance - making all properties and methods of a certain class available 
to a child class, forming a heriarchical relationship between classes.
* Polymorphism - a child class can overwrite a method it inherited from a 
parent class

*/

/*

OOP IN JAVASCRIPT - LECTURE 207

// Javascript syntax is a bit different

1. OOP in JS uses prototypes and objects (similar like class and instance).
2 3 WAYS OF IMPLEMENTIG PROTOTYPAL PROGRAMING INHERITANCE IN JS
* CONSTRUCTOR FUNCTIONS - Technique to create obejcts from a function
* ES6 CLASSES - Introduced classes in JS (alternative to constructor functions)
* Object.create() - The easies way to link an object to a prototype object (not as used as the other 2)


*/

/*

CONSTRACTOR FUNCTIONS AND THE NEW OPERATOR - LECTURE 208

*/
// Constractor functions - using the new operator

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Methods
//   // Dont use methods (functions inside) - not used
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

/*

Behin the scene 4 things happen with the new operator
1. New {} empty object is created
2. Than the function is called and the this keyword is equal to the new empty object
3. This newly created object is linked to a prototype
4. The obejct that was created in the begining was automatically returned from the
constructor function. Actually at this point the object does no longer need to be empty.

*/

// Practice

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// How to check if its an instance of the prototype (class)
// console.log(jonas instanceof Person);
// const jay = 'jay';

// My own practice

// const Ime = function (firstName, lastName, birthYear, location) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.location = location;
// };

// const darko = new Ime('Darko', 'Ilievski', 1990, 'Skopje, Macedonia');
// console.log(darko);

// console.log(darko instanceof Ime);

// if (darko instanceof Ime) console.log('Vistina e');

/*

PROTOTYPES - LECTURE 209

*/
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Methods
//   // Dont use methods (functions inside) - not used
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// // Prototypes - how to use methods the right way
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // True
// console.log(Person.prototype.isPrototypeOf(jonas)); // True
// console.log(Person.prototype.isPrototypeOf(matilda)); // True
// console.log(Person.prototype.isPrototypeOf(Person)); //False

// // Inherited properties
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species, jack.species);
// console.log(jonas.hasOwnProperty('firstName')); // True
// console.log(jonas.hasOwnProperty('species')); // False

// /*

// PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN - LECTURE 210

// */
// /*

// PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS - LECTURE 211

// */

// // Using the same person example

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // null  - the top of the scope chain

// console.dir(Person.prototype.constructor);

// // Arrays

// const arr = [3, 4, 5, 6, 6, 7, 8, 9, 7, 8, 9]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // True
// console.log(arr.__proto__.__proto__); // object.prototype

// // Example adding method to select only the uniqe numbers (not a good idea in a big project)
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); // Logs [3,4,5,6,7,8,9]

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

/*

CHALLENGE #01

Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 

*/

// 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const data = new Car('Bmw', 120);
// const data2 = new Car('Mercedes', 95);

// console.log(data, data2);
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// data.accelerate();
// data.accelerate();
// data.brake();
// data.accelerate();

/*

ES 6 CLASSES - LECTURE 213

*/
// Class expression

// const PersonCL = class {};

// Class declaration - prefered option
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName} you are born in ${this.birthYear}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`The ${name} is not a full name`);
//   }

//   get fullNAme() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(jessica.__proto__ === PersonCl.prototype); // True
// jessica.calcAge(); // Logs 41
// console.log(jessica.age);
// jessica.greet();

// Important classes info
// 1. Classes are NOT hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

// Which should you use constractor function or ES6 Classes
// It's easeier to use constractor function but it's also okay to use ES6 Classes

/*

SETTERS AND GETTERS - LECTURE 214

They are not used most of the time but they can be used sometimes
// Setters and getters can be very usefull for data validation

*/

// Acessor properties -getters and setters
// const walter = new PersonCl('Walter White', 1965);
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   // Getters
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   // Setter
//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

/*

STATIC METHODS - LECTURE 215


*/

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// Person.hey = function () {
//   console.log(`Hey there`);
// };
// Person.hey();
// jonas.hey(); // Error it's not inherited (static method)

// Adding the static method
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName} you are born in ${this.birthYear}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`The ${name} is not a full name`);
//   }

//   get fullNAme() {
//     return this._fullName;
//   }
//   // static method
//   static hey() {
//     console.log(`Hey there :)`);
//     console.log(this);
//   }
// }

// const darko = new PersonCl('Darko Ilievski', 1990);
// PersonCl.hey(); //Not available on isntances

/*

Object.create() - LECTURE 216 (the least used way)


*/

// Works in a different way

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); //True

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

/*

CHALLENGE #02

Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀

*/

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return `${this.make} is driving ${this.speed / 1.6} mp/h`;
//   }
//   set speedUS(newSpeed) {
//     this.speed = newSpeed * 1.6;
//   }
//   get speedEU() {
//     return `${this.make} is going ${this.speed} km/h`;
//   }
//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
//   brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
// }

// const data = new CarCl('Ford', 120);
// const data2 = new CarCl('Sorento', 160);

// data.accelerate();
// data.accelerate();
// data.accelerate();
// console.log(data.speedEU);
// data.brake();
// console.log(data.speedEU);
// data.brake();
// console.log(data.speedEU);

/*

Inheritance between Classes - constructor functions - LECTURE 218


*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

/*

CODING CHALLENGE #03


*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, at a charge ${this.charge}%`
  );
};

const EV = function (make, speed, charge) {
  // You need to call the parent object using the this keyword .call(this, ...., ...)
  Car.call(this, make, speed);
  this.charge = charge;
};

// Always do this to link the parent and child objects
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Polymorphism the data takes the method below (the child method ) instead of the Car method

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, at a charge ${this.charge}%`
  );
};

EV.prototype.brake = function () {
  this.speed -= 5;
  this.charge += 10;
  console.log(
    `${this.make} going at ${this.speed} km/h, at a charge ${this.charge}%`
  );
};
const data = new EV('Tesla', 120, 23);

data.chargeBattery(90);
console.log(data);
data.accelerate();
data.accelerate();
data.accelerate();

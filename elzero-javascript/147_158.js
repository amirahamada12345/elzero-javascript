"use strict"
// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }

// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
class Car {

  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;

  }

  run() {
    return ("Car Is Running Now");

  }
  stop() {
    return ("Car Is Stopped");
  }



};
let first_car = new Car();
let second_car = new Car();
let third_car = new Car();
first_car.n = "MG";
first_car.m = " 2022";
first_car.p = "420000";
console.log(`Car One Name Is ${first_car.n} And Model Is ${first_car.m} And Price Is ${first_car.p} `);
console.log(first_car.run());
//*****************************task2 */

class Phone {
  constructor(name, serial, price) {
    this.n = name;
    this.s = serial;
    this.p = price;
  }
};
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "unkown";
  }
  fullDetails() {
    return (` ${this.n} Serial is ${this.s} And Price Is ${this.p} And Size Is ${this.size} `);
  }
};

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
//*************************task3 challenge */

//***************************************task4 */
let myStr = "Elzero";
String.prototype.addLove = function () {

  return `I Love ${ myStr} Web School`;
}
console.log(myStr.addLove());
// I Love Elzero Web School
//***************************************task5 */
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  score: {
    writable: false
  },
  id: {
    enumerable: false
  },
  country: {
    configurable: true,
    enumerable: false
  }
})
delete myObj.country;
// myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output 
// "username => Elzero"
// "score => 1000"
//{username: 'Elzero', score: 1000, id: 100}
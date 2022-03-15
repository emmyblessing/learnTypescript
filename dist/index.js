"use strict";
//This is an industrial-grade general-purpose greeter function:
/* function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Emmy", new Date()); */
/* let id:number = 5;
console.log(`ID: ${id}`);
 */
// Tuple 
let person = [1, "Emmy", true];
// Tuple Array
let staff;
staff = [
    [1, "sola", true],
    [2, "Bisi", false],
    [3, "Jumoke", true],
];
// Unions
let cId;
cId = 'sola';
// Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 3] = "Up";
    Directions[Directions["Down"] = 4] = "Down";
    Directions[Directions["Left"] = 5] = "Left";
    Directions[Directions["Right"] = 6] = "Right";
})(Directions || (Directions = {}));
var DirectionsTwo;
(function (DirectionsTwo) {
    DirectionsTwo["Up"] = "Up";
    DirectionsTwo["Down"] = "Down";
    DirectionsTwo["Left"] = "Left";
    DirectionsTwo["Right"] = "Right";
})(DirectionsTwo || (DirectionsTwo = {}));
const users = {
    id: 1,
    name: 'John',
};
// Type Assertion: Treating any entity as different type
let pId = 1;
// let productId = <number>pId
//OR
let productId = pId;
// Functions
const addNum = (x, y) => {
    return (x + y);
};
// Void
const log = (message) => {
    console.log(message);
};
const users2 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Emmanuel Olawole");
const mike = new Person(2, "Dotun");
// Extend class Or Subclasses
class Staff extends Person {
    constructor(id, name, position) {
        // a better to re-initialize (this.id = id; this.name = name) is using super
        super(id, name);
        this.position = position;
    }
}
const stf = new Staff(3, "Tolu", "Devops");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['john', 'mike']);
strArray.push('hello');
console.log(numArray, strArray);

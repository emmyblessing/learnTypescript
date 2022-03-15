 //This is an industrial-grade general-purpose greeter function:
/* function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Emmy", new Date()); */


/* let id:number = 5;
console.log(`ID: ${id}`);
 */


// Tuple 
let person: [number, string, boolean] = [1, "Emmy", true];

// Tuple Array
let staff: [number, string, boolean][]

staff = [
  [1, "sola", true],
  [2, "Bisi", false],
  [3, "Jumoke", true],

]

// Unions
let cId: number | string;

cId = 'sola';

// Enum
enum Directions {
  Up = 3,
  Down,
  Left,
  Right,
}

enum DirectionsTwo {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number,
  name: string,
}

const users: User = {
  id: 1,
  name: 'John',
}

// Type Assertion: Treating any entity as different type
let pId: any = 1;
// let productId = <number>pId
//OR
let productId = pId as number

// Functions
const addNum = (x:number, y:number): number => {
  return (x + y);
}

// Void
const log = (message: string | number): void => {
  console.log(message);
}

// Interfaces: It can only be used with objects not unions
// readonly means using the value cannot be re-assign to the id
interface UserInterface {
  readonly id: number,
  name: string,
  // (?:): means optional
  age?: number;
}

const users2: User = {
  id: 1,
  name: 'John',
}

interface MathFuc {
  (x:number, y:number): number
}

const add: MathFuc = (x:number, y:number):number => x + y;
const sub: MathFuc = (x:number, y:number):number => x - y;

// Classes: They are used to create multiple object

// using interface in classes
interface PersonInterface {
  readonly id: number,
  name: string,
  register(): string;
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, "Emmanuel Olawole");
const mike = new Person(2, "Dotun");

// Extend class Or Subclasses
class Staff extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    // a better to re-initialize (this.id = id; this.name = name) is using super
    super(id, name)
    this.position = position
  }
}

const stf = new Staff(3, "Tolu", "Devops");

// Generics
function getArray<T> (items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['john', 'mike']);

strArray.push('hello');

console.log(numArray, strArray);
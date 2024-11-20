// import { Point1,Point2 } from "./point"

function log(msg){
    console.log(msg)
}

log("HELLO\ world")

function doSomething() {
    for(var i=0; i<5; i++) { 
        console.log(i)
    }
    console.log('finally with let:', i)
}

doSomething()

//Strong typing in js we can use any vals to any variables but in typeScript we declare type to variable ,so we can't assign any vals to that variable like js
let count:string ="GGM";
count =1;

count = function(a,b) {return a+b}

//Types
let a:number = "GGM";
let b:string = 1 ;
let c:boolean = true;
a=b;
b=c;
c=a;

//Inferred Typing means a variable declare vals then that var can identify that datatype
let a1 ="Mil"
let a2 = 1
a1 = a2

//Duck Typing means essential to handle the missing propery in object while changing variable's obj vals
let complexType ={ name: "GGM" , id: 1 }
complexType = {id: 2}
complexType = {name: "mil"};
complexType = { address: "address" }
console.log(complexType);

let d:any;

//Array means in particularly ts in variable once we declare data type of that var so we give particular vals of var
let e: number[] = [1,2,3,'a','b',true] //strings & boolean restricted
e = [3,4,5]

// any means changes in var of data types to set every valid vals but don't use too much it may lead some logic errs & weakens the strong typing
let complexType1:any ={ name: "GGM" , id: 1 }
complexType1 = {id: 2}
let f: any[] = [1,2,3,'a','b',true]

const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;

//enum
enum Color {Red,Blue, Green};
let backgroundColor = Color.Red;

enum Direction{
    up,
    down,
    left,
    right
}

function move (direction){
    console.log(`Moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.left)
console.log(Direction)

//function 
function addNumbers(a:number, b:number){
    return a+b;
}
let result = addNumbers(1,2)
result = addNumbers("1","2")
console.log(result);

//optional params

let concatStrings = function(a:string, b:string, c?:string, d:string = "ggm"){
    return a + b + c + d;
}
console.log(concatStrings('a', 'b', 'c'))
console.log(concatStrings('a', 'b'))

let color1 = 'red'
let endsWithD1 = color1.endsWith('d');

let color; // don't redecalare scoped variables becos it may cause some logical errs & val mischanges & don't use any data type becos it also cause logical errs and can't access any method from suggesstion
color = 'red';

//Type Assertions

let endsWithD = (<string>color).endsWith('d');
let altEndsWithD = (color as string).endsWith('d')


let doLog = message => console.log(message)

let draw1 = (x:number,y:number, z:number) => {
    //...
}

/* interface Point{ //like a abstract class just defining a variable ddata type and void funcs
    // x:number;
    // y:number;
    // z:number;
    // draw:() => void
}
 let draw = (point:Point) => {
    //...
} 

let drawRectangle = (point:Point) => {
   point.draw()
}

//draw({x:2,y:3,z:1})

let someFunction =() => {

}

console.log(drawRectangle({x:2,y:3,z:1,draw:someFunction})) */
//Interfaces

interface User {
    firstName: string;
    lastName: string;
    age?: number;
    middleName?: string;
}
function greetUser(user: User){
    return `Hello ${user.firstName} ${user.lastName}`
}

function logUserDetails(user: User){
    return `Hello ${user.firstName} ${user.middleName} ${user.lastName}, Age: ${user.age}`
}

let user1 = {firstName: "John",middleName:"Mil", lastName: 'GGM', age: 24}
let user2 = {firstName: "John1", lastName: 'GGM1'}

console.log(greetUser(user2))
console.log(logUserDetails(user1))

//class
class User1 {
    firstName: string;
    lastName: string;
    age1: number;

    constructor(firstname: string, lastName: string, age1: number){
        this.firstName = firstname;
        this.lastName = lastName;
        this.age1 = age1;
    }
    greet(){
        return `Hello,${this.firstName} ${this.lastName}`
    }

    getAge() {
        return this.age1;
    }
}

// creating instances or object
let user13 = new User1("John1",'GGM1',27);
let user132 = new User1("mil",'GGMil1',24);

console.log(user13.greet())
console.log(user132.getAge())

// let user12 = {firstName: "John1", lastName: 'GGM1', Age:27}
// let user123 = {firstName: "John12", lastName: 'GGM12',Age:28}


class Point{ //like a abstract class
    // x:number;
    // y:number;
    // z:number;
    constructor(private x?:number, public y?:number,public z?:number) {
            // this.x =x;
            // this.y =y;
            // this.z =z;
    }

    protected draw = ():any => {
        console.log('X:'+ this.x + " Y:" + this.y + ' Z:' + this.z)
    }
    drawRectangle = ():any => {
        console.log('Drawing Rectangle')
        this.draw()
     }

     get X(){
        return this.x;
     }

     set X(value){
        this.x = value;
     }
}

let shape: Point = new Point();
shape.x = 5;
shape.y = 10;
shape.z = 15;
shape.draw();         // Output: "X:5 Y:10 Z:15"
shape.drawRectangle(); // Output: "X:5 Y:10 Z:15"

console.log('\n')
let shape2: Point = new Point();
shape2.x = 6;
shape2.y = 12;
shape2.z = 18;
shape2.draw();
shape2.drawRectangle(); 

console.log('\n')
let shape3: Point = new Point(5,10,15);
shape3.draw();
shape3.drawRectangle(); 
console.log('\n')

let shape24: Point = new Point(6,12,18);
shape24.draw();
shape24.drawRectangle(); 
console.log('\n')

let shapess = new Point(1,2,3);
shapess.x=4;
shapess.X=75;
shapess.draw()
shapess.drawRectangle()
console.log('X:',shapess.X)

// without Inheritance

class User3 {
    firstName: string;
    lastName: string;
    age1: number;

    constructor(firstName: string, lastName: string, age1: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
    }

    greet(){
        return `Hello,${this.firstName} ${this.lastName}`
    }

    getAge() {
        return this.age1;
    }
}

class Admin{
    firstName: string;
    lastName: string;
    age1: number;
    role: string;
    
    constructor(firstName: string, lastName: string, age1: number, role: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
        this.role = role;
    }

    greet(){
        return `Hello,${this.firstName} ${this.lastName}, Role: ${this.role}`
    }

    getAge() {
        return this.age1;
    }

    manageUsers(){
        return `Managing users with role ${this.role}`
    }
}

let User111 = new User3("Jhon","Doe",25)
let user222 = new Admin("GGM","Mil", 24,"Administrator")

console.log(User111.greet())
console.log(User111.getAge())

console.log(user222.greet())
console.log(user222.getAge())
console.log(user222.manageUsers())

// with inheritance

class Person {
    firstName: string;
    lastName: string;
    age1: number;

    constructor(firstName: string, lastName: string, age1: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
    }

    greet(){
        return `Hello,${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age1;
    }

}

class UserSuper extends Person {
    constructor(firstName: string, lastName: string, age1: number){
        super(firstName,lastName,age1)
    }
}

class Admin1 extends Person {
    role: string
    constructor(firstName: string, lastName: string, age1: number, role: string){
        super(firstName, lastName, age1)
        this.role = role 
    }

    greet(): string {
        return `Hello,${this.firstName} ${this.lastName}, Role: ${this.role}`
    }

    manageUsers(){
         return `Managing users with role ${this.role}`
    }
}


let User333 = new UserSuper("Jhon","Doe",25)
let user444 = new Admin1("GGM","Mil", 24,"Administrator")

console.log(User333.greet())
console.log(User333.getAge())

console.log(user444.greet())
console.log(user444.getAge())
console.log(user444.manageUsers())

//  without closure

let counterValue = 0;

function incrementCounter() {
    counterValue++;
}

function getcounterValue() {
    return counterValue;
}

incrementCounter()
console.log(getcounterValue())

incrementCounter()
console.log(getcounterValue())

incrementCounter()
console.log(getcounterValue())

// closure encapsulation protecting specific vals other general variable vals

function createCounter(){
    let counterValue =0;

    return {
        increment: function(){
            counterValue++;
        },
        getvalue: function (){
            return counterValue;
        },
        decrement: function(){
            counterValue--;
        }
    }
}

const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment()
counter1.increment()
counter1.decrement()
counter2.increment()
console.log(counter1.getvalue(), 'COUNTER1')
console.log(counter2.getvalue(), 'COUNTER2')

// without Access Modifiers
class User7 {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const user = new User7("alice", 30)
console.log(user.name)
console.log(user.age)

user.name = "Bob"
user.age = 40

console.log(user.name)
console.log(user.age)

// with class modifiers

class User8 {
    private name: string;
    private age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    public getName(){
        return this.name;
    }

    public getAge(){
        return this.age;
    }

    public setName(name:string){
        this.name =name
    }

    public setAge(age:number){
        if (age > 0){
            this.age = age
        }
    }
}

const user22 = new User8("alice", 30)
console.log(user22.getName())
console.log(user22.getAge())

user22.setName("Boobby")
user22.setAge(50)

console.log(user22.getName())
console.log(user22.getAge())

//static Functions without using obj, so we have to access vals(params) of var in a direct manner

class User77{
    name: string;
    age: number;

    constructor (name:string, age:number){
        this.name = name;
        this.age = age;
    }

    static isAdult(age: number)   {
        // return this.age >=30;
        return age >=30;
    }

}

// const usee = new User77("Alice",30)
// console.log(usee.isAdult())

console.log(User77.isAdult(30), '30')
console.log(User77.isAdult(27), '27')

// static properties means static var of val is accessed by static prop of func

class User17 {
    name: string;
    // age: number;
    static totalUsers:number = 0;

    constructor (name:string, /*age:number*/){
        this.name = name;
        // this.age = age;
        User17.totalUsers++;
    }

    public getName(){
        return this.name;
    }

    static getTotalUsers(){
        return User17.totalUsers
    }
}

// let totalUsers = 0;

/* function createUser(name){
    totalUsers++; // type coupling issue two dissimilar actions
    return new User17(name)
} */

// const user23 = createUser("Alice")
// const user24 = createUser("Bob")

console.log(User17.totalUsers,"Users at start")
const user23 = new User17("Alice")
const user24 =new  User17("Bob")
console.log(user23.getName())
console.log(user24.getName())
console.log(User17.getTotalUsers(), "Users at end")

// console.log(totalUsers)

// generics

class NumberStack{
    private items: number[] = []

    push(item:number){
        this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }
}

class StringStack{
    private items: string[] = []

    push(item:string){
        this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }
}

const numberStack = new NumberStack();
numberStack.push(1)
numberStack.push(2)
console.log(numberStack.pop())

const stringStack = new StringStack()
stringStack.push("Hello")
stringStack.push("World")
console.log(stringStack.pop())

class Stack <T> { // T means generic class , and then generic means if two classes have same functions or methods or variable of vals , so we prefer seperate class, but in generic it is way to code resuablity in making a common manner to use in this concept
    private items:T[] = [];

    push(item: T){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
}

const numberStack1 = new Stack<number>()
numberStack1.push(1)
numberStack1.push(2)
console.log(numberStack1.pop())

const stringStack1 = new Stack<string>()
stringStack1.push("Hello")
stringStack1.push("World")
console.log(stringStack1.pop())

// Type Casting means it gives jsonData to define their type in interface, Basically parsed Jsondata is correctly matched with thier types and avoiding undefined issues

interface User2 {
    name: string;
    age: number;
}

const jsonData = '{"name": "Alicce", "age": 30}'

const userr1 = JSON.parse(jsonData) as User2 // Type Casting with interface
console.log(`Name: ${userr1.name}, Age: ${userr1.age}`)

//Type Assertions in advance
/* const element = document.getElementById("myElement") as HTMLInputElement; // 
const element1 = document.getElementById("myElement") as HTMLSelectElement; // 

// console.log(element.value = "Hello Typescript")
// console.log(element1.selectedIndex = 0) */

// Intersection Types means combine two types to single type like two interfaces

interface Employee {
    name:string;
    id:number
}

interface Admin2{
    isAdmin:boolean;
    accessLevel: number;
}

type AdminEmployee = Employee & Admin2;

let adminEmployee: AdminEmployee = {
    id:123,
    name:'Alice',
    isAdmin: true,
    accessLevel: 4
}

console.log(adminEmployee.name)
console.log(adminEmployee.isAdmin)
console.log(adminEmployee.id)
console.log(adminEmployee.accessLevel)

//Decorator means it gives advantage tofocusing only on functions or anyother actions which is main to our program and other logs are maintained by decorators('@' symbol using)

class Calculator {
    add(a:number, b:number){
        console.log(`Call add method with arguments ${a} and ${b}`)
        const result  = a + b;
        console.log(`Result:${result}`)
        return result
    }

    subtract(a:number, b:number){
        console.log(`Call substract method with arguments ${a} and ${b}`)
        const result  = a - b;
        console.log(`Result:${result}`)
        return result
    }
}

const calculator = new Calculator()
calculator.add(5, 3)
calculator.subtract(7,5)

function logMethod(target:any, propertyKey: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args:any[]){
        console.log(`Call ${propertyKey} method with arguments ${args.join(',')}`)
        const result = originalMethod.apply(this, args)
        console.log(`Result:${result}`)
        return result;
    }
}

class Calculator1 {

    @logMethod
    add(a:number, b:number){
        const result  = a + b;
        return result
    }

    @logMethod
    subtract(a:number, b:number){
        const result  = a - b;
        return result
    }
}

const calculator1 = new Calculator1()
calculator1.add(5, 3)
calculator1.subtract(7,5)
// import { Point1,Point2 } from "./point"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(msg) {
    console.log(msg);
}
log("HELLO\ world");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally with let:', i);
}
doSomething();
//Strong typing in js we can use any vals to any variables but in typeScript we declare type to variable ,so we can't assign any vals to that variable like js
var count = "GGM";
count = 1;
count = function (a, b) { return a + b; };
//Types
var a = "GGM";
var b = 1;
var c = true;
a = b;
b = c;
c = a;
//Inferred Typing means a variable declare vals then that var can identify that datatype
var a1 = "Mil";
var a2 = 1;
a1 = a2;
//Duck Typing means essential to handle the missing propery in object while changing variable's obj vals
var complexType = { name: "GGM", id: 1 };
complexType = { id: 2 };
complexType = { name: "mil" };
complexType = { address: "address" };
console.log(complexType);
var d;
//Array means in particularly ts in variable once we declare data type of that var so we give particular vals of var
var e = [1, 2, 3, 'a', 'b', true]; //strings & boolean restricted
e = [3, 4, 5];
// any means changes in var of data types to set every valid vals but don't use too much it may lead some logic errs & weakens the strong typing
var complexType1 = { name: "GGM", id: 1 };
complexType1 = { id: 2 };
var f = [1, 2, 3, 'a', 'b', true];
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving ".concat(Direction[direction].toLowerCase()));
}
move(Direction.left);
console.log(Direction);
//function 
function addNumbers(a, b) {
    return a + b;
}
var result = addNumbers(1, 2);
result = addNumbers("1", "2");
console.log(result);
//optional params
var concatStrings = function (a, b, c, d) {
    if (d === void 0) { d = "ggm"; }
    return a + b + c + d;
};
console.log(concatStrings('a', 'b', 'c'));
console.log(concatStrings('a', 'b'));
var color1 = 'red';
var endsWithD1 = color1.endsWith('d');
var color; // don't redecalare scoped variables becos it may cause some logical errs & val mischanges & don't use any data type becos it also cause logical errs and can't access any method from suggesstion
color = 'red';
//Type Assertions
var endsWithD = color.endsWith('d');
var altEndsWithD = color.endsWith('d');
var doLog = function (message) { return console.log(message); };
var draw1 = function (x, y, z) {
    //...
};
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age: ").concat(user.age);
}
var user1 = { firstName: "John", middleName: "Mil", lastName: 'GGM', age: 24 };
var user2 = { firstName: "John1", lastName: 'GGM1' };
console.log(greetUser(user2));
console.log(logUserDetails(user1));
//class
var User1 = /** @class */ (function () {
    function User1(firstname, lastName, age1) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.age1 = age1;
    }
    User1.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName);
    };
    User1.prototype.getAge = function () {
        return this.age1;
    };
    return User1;
}());
// creating instances or object
var user13 = new User1("John1", 'GGM1', 27);
var user132 = new User1("mil", 'GGMil1', 24);
console.log(user13.greet());
console.log(user132.getAge());
// let user12 = {firstName: "John1", lastName: 'GGM1', Age:27}
// let user123 = {firstName: "John12", lastName: 'GGM12',Age:28}
var Point = /** @class */ (function () {
    // x:number;
    // y:number;
    // z:number;
    function Point(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('X:' + _this.x + " Y:" + _this.y + ' Z:' + _this.z);
        };
        this.drawRectangle = function () {
            console.log('Drawing Rectangle');
            _this.draw();
        };
        // this.x =x;
        // this.y =y;
        // this.z =z;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var shape = new Point();
shape.x = 5;
shape.y = 10;
shape.z = 15;
shape.draw(); // Output: "X:5 Y:10 Z:15"
shape.drawRectangle(); // Output: "X:5 Y:10 Z:15"
console.log('\n');
var shape2 = new Point();
shape2.x = 6;
shape2.y = 12;
shape2.z = 18;
shape2.draw();
shape2.drawRectangle();
console.log('\n');
var shape3 = new Point(5, 10, 15);
shape3.draw();
shape3.drawRectangle();
console.log('\n');
var shape24 = new Point(6, 12, 18);
shape24.draw();
shape24.drawRectangle();
console.log('\n');
var shapess = new Point(1, 2, 3);
shapess.x = 4;
shapess.X = 75;
shapess.draw();
shapess.drawRectangle();
console.log('X:', shapess.X);
// without Inheritance
var User3 = /** @class */ (function () {
    function User3(firstName, lastName, age1) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
    }
    User3.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName);
    };
    User3.prototype.getAge = function () {
        return this.age1;
    };
    return User3;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age1, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName, ", Role: ").concat(this.role);
    };
    Admin.prototype.getAge = function () {
        return this.age1;
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}());
var User111 = new User3("Jhon", "Doe", 25);
var user222 = new Admin("GGM", "Mil", 24, "Administrator");
console.log(User111.greet());
console.log(User111.getAge());
console.log(user222.greet());
console.log(user222.getAge());
console.log(user222.manageUsers());
// with inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age1) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age1 = age1;
    }
    Person.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age1;
    };
    return Person;
}());
var UserSuper = /** @class */ (function (_super) {
    __extends(UserSuper, _super);
    function UserSuper(firstName, lastName, age1) {
        return _super.call(this, firstName, lastName, age1) || this;
    }
    return UserSuper;
}(Person));
var Admin1 = /** @class */ (function (_super) {
    __extends(Admin1, _super);
    function Admin1(firstName, lastName, age1, role) {
        var _this = _super.call(this, firstName, lastName, age1) || this;
        _this.role = role;
        return _this;
    }
    Admin1.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName, ", Role: ").concat(this.role);
    };
    Admin1.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin1;
}(Person));
var User333 = new UserSuper("Jhon", "Doe", 25);
var user444 = new Admin1("GGM", "Mil", 24, "Administrator");
console.log(User333.greet());
console.log(User333.getAge());
console.log(user444.greet());
console.log(user444.getAge());
console.log(user444.manageUsers());
//  without closure
var counterValue = 0;
function incrementCounter() {
    counterValue++;
}
function getcounterValue() {
    return counterValue;
}
incrementCounter();
console.log(getcounterValue());
incrementCounter();
console.log(getcounterValue());
incrementCounter();
console.log(getcounterValue());
// closure encapsulation protecting specific vals other general variable vals
function createCounter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getvalue: function () {
            return counterValue;
        },
        decrement: function () {
            counterValue--;
        }
    };
}
var counter1 = createCounter();
var counter2 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();
counter2.increment();
console.log(counter1.getvalue(), 'COUNTER1');
console.log(counter2.getvalue(), 'COUNTER2');
// without Access Modifiers
var User7 = /** @class */ (function () {
    function User7(name, age) {
        this.name = name;
        this.age = age;
    }
    return User7;
}());
var user = new User7("alice", 30);
console.log(user.name);
console.log(user.age);
user.name = "Bob";
user.age = 40;
console.log(user.name);
console.log(user.age);
// with class modifiers
var User8 = /** @class */ (function () {
    function User8(name, age) {
        this.name = name;
        this.age = age;
    }
    User8.prototype.getName = function () {
        return this.name;
    };
    User8.prototype.getAge = function () {
        return this.age;
    };
    User8.prototype.setName = function (name) {
        this.name = name;
    };
    User8.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return User8;
}());
var user22 = new User8("alice", 30);
console.log(user22.getName());
console.log(user22.getAge());
user22.setName("Boobby");
user22.setAge(50);
console.log(user22.getName());
console.log(user22.getAge());
//static Functions without using obj, so we have to access vals(params) of var in a direct manner
var User77 = /** @class */ (function () {
    function User77(name, age) {
        this.name = name;
        this.age = age;
    }
    User77.isAdult = function (age) {
        // return this.age >=30;
        return age >= 30;
    };
    return User77;
}());
// const usee = new User77("Alice",30)
// console.log(usee.isAdult())
console.log(User77.isAdult(30), '30');
console.log(User77.isAdult(27), '27');
// static properties means static var of val is accessed by static prop of func
var User17 = /** @class */ (function () {
    function User17(name) {
        this.name = name;
        // this.age = age;
        User17.totalUsers++;
    }
    User17.prototype.getName = function () {
        return this.name;
    };
    User17.getTotalUsers = function () {
        return User17.totalUsers;
    };
    // age: number;
    User17.totalUsers = 0;
    return User17;
}());
// let totalUsers = 0;
/* function createUser(name){
    totalUsers++; // type coupling issue two dissimilar actions
    return new User17(name)
} */
// const user23 = createUser("Alice")
// const user24 = createUser("Bob")
console.log(User17.totalUsers, "Users at start");
var user23 = new User17("Alice");
var user24 = new User17("Bob");
console.log(user23.getName());
console.log(user24.getName());
console.log(User17.getTotalUsers(), "Users at end");
// console.log(totalUsers)
// generics
var NumberStack = /** @class */ (function () {
    function NumberStack() {
        this.items = [];
    }
    NumberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    NumberStack.prototype.pop = function () {
        return this.items.pop();
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
        this.items = [];
    }
    StringStack.prototype.push = function (item) {
        this.items.push(item);
    };
    StringStack.prototype.pop = function () {
        return this.items.pop();
    };
    return StringStack;
}());
var numberStack = new NumberStack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
var stringStack = new StringStack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack1 = new Stack();
numberStack1.push(1);
numberStack1.push(2);
console.log(numberStack1.pop());
var stringStack1 = new Stack();
stringStack1.push("Hello");
stringStack1.push("World");
console.log(stringStack1.pop());
var jsonData = '{"name": "Alicce", "age": 30}';
var userr1 = JSON.parse(jsonData); // Type Casting with interface
console.log("Name: ".concat(userr1.name, ", Age: ").concat(userr1.age));
var adminEmployee = {
    id: 123,
    name: 'Alice',
    isAdmin: true,
    accessLevel: 4
};
console.log(adminEmployee.name);
console.log(adminEmployee.isAdmin);
console.log(adminEmployee.id);
console.log(adminEmployee.accessLevel);
//Decorator 
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("Call add method with arguments ".concat(a, " and ").concat(b));
        var result = a + b;
        console.log("Result:".concat(result));
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        console.log("Call substract method with arguments ".concat(a, " and ").concat(b));
        var result = a - b;
        console.log("Result:".concat(result));
        return result;
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(7, 5);
function logMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Call ".concat(propertyKey, " method with arguments ").concat(args.join(',')));
        var result = originalMethod.apply(this, args);
        console.log("Result:".concat(result));
        return result;
    };
}
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    Calculator1.prototype.add = function (a, b) {
        var result = a + b;
        return result;
    };
    Calculator1.prototype.subtract = function (a, b) {
        var result = a - b;
        return result;
    };
    __decorate([
        logMethod
    ], Calculator1.prototype, "add", null);
    __decorate([
        logMethod
    ], Calculator1.prototype, "subtract", null);
    return Calculator1;
}());
var calculator1 = new Calculator1();
calculator1.add(5, 3);
calculator1.subtract(7, 5);

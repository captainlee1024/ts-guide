var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.brak = function () {
        console.log("woof woof!");
    };
    return Dog1;
}(Animal1));
var dog = new Dog1();
dog.brak();
dog.move(10);
dog.brak();
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the palomino");
sam.move();
tom.move(34);
// 修饰符
// 默认 public
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.mvoe = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
// private
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
//new Animal4("catA.").name; // Property 'name' is private and only accessible within class 'Animal4'.
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal4));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal4 = new Animal4("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal4 = rhino;
// Types have separate declarations of a private property 'name'.
// animal4 = employee; // [tsserver 2322] [E] Type 'Employee' is not assignable to type 'Animal4'.
// protected
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person));
var howard = new Employee2("howard", "Sales");
console.log(howard.getElevatorPitch());
// [2445] [Error] Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//console.log(howard.name);
var Person2 = /** @class */ (function () {
    function Person2(theName) {
        this.name = theName;
    }
    ;
    return Person2;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.getElevatorPitch = function () {
        return "Hi, I'm " + this.name + " and I work in " + this.department + ".";
    };
    return Employee3;
}(Person2));
var howard2 = new Employee3("Howard3", "Sales");
// [2674] [Error] Constructor of class 'Person2' is protected and only accessible within the class declaration.
// let john = new Person2("Jhon")
// readonly 修饰符
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//d.dname = "xxx"; // [7005] [Error] Variable 'd' implicitly has an 'any' type.
// 参数属性
var Octopus2 = /** @class */ (function () {
    function Octopus2(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus2;
}());
// 存取器
var Employee4 = /** @class */ (function () {
    function Employee4() {
    }
    return Employee4;
}());
var employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
    console.log(employee4.fullName);
}
var passcode = "secret passcode";
var Employee5 = /** @class */ (function () {
    function Employee5() {
    }
    Object.defineProperty(Employee5.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee5;
}());
var employee5 = new Employee5();
employee5.fullName = "Bob Smith";
if (employee5.fullName) {
    //alert(employee5.fullName);
    console.log("alert => Bob Simth");
}
// 静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类
var Animal5 = /** @class */ (function () {
    function Animal5() {
    }
    Animal5.prototype.move = function () {
        console.log("roaming the earch..");
    };
    return Animal5;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
//department = new Department(); // [2511] [Error] Cannot create an instance of an abstract class.
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports(); // [2339] [Error] Property 'generateReports' does not exist on type 'Department'.
// 高级技巧
// 构造函数
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter2;
}());
var greeter2;
greeter = new Greeter("wrold");
console.log(greeter.greet());
var Greeter3 = /** @class */ (function () {
    function Greeter3() {
    }
    Greeter3.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter3.standardGreeting;
        }
    };
    Greeter3.standardGreeting = "hello, there";
    return Greeter3;
}());
var greeter3;
greeter3 = new Greeter3();
console.log("====>" + greeter3.greet());
var greeterMaker = Greeter3;
greeterMaker.standardGreeting = "Hey there!";
var greeter4 = new greeterMaker();
console.log(greeter4.greet());
// 把类当接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };

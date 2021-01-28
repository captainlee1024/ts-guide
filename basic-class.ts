class Greeter{
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "hello, " + this.greeting;
	}
}

let greeter = new Greeter("world");
console.log(greeter.greet());

class Animal1 {
	move(distanceInMeters: number = 0) {
		console.log(`Animal moved ${distanceInMeters}m.`);
	}
}

class Dog1 extends Animal1 {
	brak() {
		console.log(`woof woof!`);
	}
}

const dog = new Dog1();
dog.brak();
dog.move(10);
dog.brak();

class Animal2 {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}

class Snake extends Animal2 {
	constructor(name: string) { super(name);}
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends Animal2 {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the palomino");

sam.move();
tom.move(34);

// 修饰符
// 默认 public
class Animal3 {
	public name: string
	public constructor(theName: string) { this.name = theName; }
	public mvoe(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

// private
class Animal4 {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}
//new Animal4("catA.").name; // Property 'name' is private and only accessible within class 'Animal4'.

class Rhino extends Animal4 {
	constructor() { super("Rhino"); }
}

class Employee {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}

let animal4 = new Animal4("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal4 = rhino;
// Types have separate declarations of a private property 'name'.
// animal4 = employee; // [tsserver 2322] [E] Type 'Employee' is not assignable to type 'Animal4'.

// protected
class Person {
	protected name: string;
	constructor(name: string) { this.name = name; }
}

class Employee2 extends Person {
	private department: string;
	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}
	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}

let howard = new Employee2("howard", "Sales");
console.log(howard.getElevatorPitch());
// [2445] [Error] Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//console.log(howard.name);

class Person2 {
	protected name: string;
	protected constructor(theName: string) { this.name = theName; };
}

class Employee3 extends Person2 {
	private department: string;
	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}
	public getElevatorPitch() {
		return `Hi, I'm ${this.name} and I work in ${this.department}.`;
	}
}

let howard2 = new Employee3("Howard3", "Sales");
// [2674] [Error] Constructor of class 'Person2' is protected and only accessible within the class declaration.
// let john = new Person2("Jhon")

// readonly 修饰符
class Octopus {
	readonly name: string;
	readonly numberOfLegs: number = 8;
	constructor(theName: string) {
		this.name = theName;
	}
}

let dad = new Octopus("Man with the 8 strong legs");
//d.dname = "xxx"; // [7005] [Error] Variable 'd' implicitly has an 'any' type.

// 参数属性
class Octopus2 {
	readonly numberOfLegs: number = 8;
	constructor(readonly name: string) {
	}
}

// 存取器
class Employee4 {
	fullName: string;
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
	console.log(employee4.fullName)
}

let passcode = "secret passcode";

class Employee5 {
	private _fullName: string;
	get fullName(): string{
		return this._fullName;
	}
	set fullName(newName: string) {
		if (passcode && passcode == "secret passcode") {
			this._fullName = newName;
		}
		else {
			console.log("Error: Unauthorized update of employee!");
		}
	}
}

let employee5 = new Employee5();
employee5.fullName = "Bob Smith";
if (employee5.fullName) {
	//alert(employee5.fullName);
	console.log("alert => Bob Simth");
}

// 静态属性
class Grid {
	static origin = {x: 0, y: 0};
	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
	constructor(public scale: number) {  }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类
abstract class Animal5 {
	abstract makeSound(): void;
	move(): void {
		console.log(`roaming the earch..`);
	}
}

abstract class Department {
	constructor(public name: string) {
	}
	printName(): void {
		console.log(`Department name: ` + this.name);
	}
	abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
	constructor() {
		super(`Accounting and Auditing`);
	}
	printMeeting(): void {
		console.log(`The Accounting Department meets each Monday at 10am.`);
	}
	generateReports(): void {
		console.log(`Generating accounting reports...`);
	}
}

let department: Department; // 允许创建一个对抽象类型的引用
//department = new Department(); // [2511] [Error] Cannot create an instance of an abstract class.
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports(); // [2339] [Error] Property 'generateReports' does not exist on type 'Department'.

// 高级技巧
// 构造函数
class Greeter2 {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

let greeter2: Greeter2;
greeter = new Greeter("wrold");
console.log(greeter.greet());

class Greeter3 {
	static standardGreeting = "hello, there";
	greeting: string;
	greet() {
		if (this.greeting) {
			return "Hello, "+ this.greeting;
		}
		else {
			return Greeter3.standardGreeting;
		}
	}
}

let greeter3: Greeter3;
greeter3 = new Greeter3();
console.log("====>"+greeter3.greet());

let greeterMaker: typeof Greeter3 = Greeter3;
greeterMaker.standardGreeting = "Hey there!";

let greeter4: Greeter = new greeterMaker();
console.log(greeter4.greet());

// 把类当接口使用
class Point {
	x: number;
	y: number;
}

interface Point3d extends Point {
	z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

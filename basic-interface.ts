function printLable(labelledObj: { label: string }) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLable(myObj);

interface LabelledValue {
	label: string;
}

function printLab(lablelledObj: LabelledValue){
	console.log(lablelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object" };
printLab(myObj1);

interface SquareConfig {
	color?: string;
	width?: number;
}

// 可选属性
function CreateSquare(config: SquareConfig): {color: string, area: number} {
	let newsquare = {color:"white", area: 100 };
	if (config.color) {
		newsquare.color = config.color;

		// [E] Property 'colr' does not exist on type 'SquareConfig'. Did you mean 'color'?
		//newsquare.color = config.colr;
	}
	if (config.width) {
		newsquare.area = config.width;
	}
	return newsquare;
}
let mysquare = CreateSquare({ color: "black" });

// 只读属性
interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // Error Cannot assign to 'x' becasure it is a read-only property.

let a1: number[]  = [1, 2, 3, 4];
let ro1: ReadonlyArray<number> = a1;
//ro1[0] = 12; // [2542] [Error] Index signature in type 'readonly number[]' only permits rading.
//ro1.push(5); // [2339] [Error] Property 'push' does not exist on type 'readonly number[]'.
//ro1.length = 100; // [2540] [Error] Cannot assign to 'length' because it si readonly porperty.
//a1 = ro1; // [4104] [Error] The type 'readonly number[]' is 'readonly' and cannot bo assign to the mutble type 'number[]'

a1 = ro1 as number[];

// 额外的属性检查
// [tsserver 2345] [E] Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
//let mySquare = CreateSquare({ colour: "red", width: 100 });

let mySquare = CreateSquare({ width: 100, opactiy: 0.5 } as SquareConfig)

interface SquareConfig2 {
	color?: string;
	width?: number;
	[propName: string]: any;
}

let squareOptions = { color: "red", width: 100 };
let mySquare2 = CreateSquare(squareOptions)

// 函数类型
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
	let result = source.search(subString);
  return result > 1;
}

let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > 1;
}

let mySearch3: SearchFunc;
mySearch3 = function(src: string, sub: string) {
	let result = src.search(sub);
	return result > -1;
}

// 索引类型
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
	name: string;
}
class Dog extends Animal {
	breed: string;
}

interface NotOkay {
	// [tsserver 2413] [E] Numeric index type 'Animal' is not assignable to string index type 'Dog'.
	//[x: number]: Animal;
	//[x: string]: Dog;
	
	// ok
	[x: string]: Animal;
	[x: number]: Dog;
}

interface NumberDictionary {
	[index: string]: number;
	length: number;
	// [tsserver 2411] [E] Property 'name' of type 'string' is not assignable to string index type 'number'.
	//name: string
}

interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
//myArray2[2] = "Mallory"; // [tsserver 2542] [E] Index signature in type 'ReadonlyStringArray' only permits reading.

// 类类型
interface ClockInterface {
	currentTime: Date;
}

class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {  }
}

interface ClockConstructor {
	new (hour: number, minute: number);
}

//class Clock2 implements ClockConstructor {
//	currentTime: Date;
//	constructor(h: number, m: number);
//}

interface ClockConstructor2 {
	new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
	tick();
}

function createClock(ctor: ClockConstructor2, hour: number, minute: number): ClockInterface2 {
	return new ctor(hour, minute);
}

class DigitaClock implements ClockInterface2 {
	constructor(h: number, m: number) {  }
	tick() {
		console.log("beep beep");
	}
}
class AnalogClock implements ClockInterface2 {
	constructor(h: number, m: number) {  };
	tick() {
		console.log("tick tock");
	}
}

let digital = createClock(DigitaClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square = <Square>{};
square.color = "blud";
square.sideLength = 10;

interface PenStroke {
	penWidth: number;
}

interface Square2 extends Shape, PenStroke {
	sideLength: number;
}
let square2 = <Square2>{};
square2.color = "red";
square2.penWidth = 10;
square2.sideLength = 5.0;

// 混合类型
interface Counter {
	( start: number ): string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number) {  };
	counter.interval = 123;
	counter.reset = function () {  };
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
class Control {
	private state: any;
}

interface SelectableControl extends Control {
	select(): void;
}

class Button extends Control implements SelectableControl {
	select() {  }
}

class TextBox extends Control {
	select () {  }
}

// [2420] [Error] Class 'Image1' incorrectly implements interface 'SelectableControl'.
// Property 'state' is missing in type 'Image1' but required in type 'SelectableControl'.
//class Image1 implements SelectableControl {
class Image1 extends Control implements SelectableControl {
	select() {  };
}
class Location1 {  }

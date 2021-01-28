// 数字枚举
enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up,
	Down,
	Left,
	Right,
}

enum MyResponse {
	No = 0,
	Yes = 1,
}

function respond(recipient: string, message: MyResponse): void {
	// --snips
}

respond("princess Caroline", MyResponse.Yes);


function getSomeValue(): number {
	return 1;
}
//enum E {
//	A = getSomeValue(),
//	B
//}

enum E2 {
	B,
	A = getSomeValue()
}

// 字符串枚举
enum StringDirection {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
	No = 0,
	Yes = "Yes",
}

// 计算和成员变量

// E3.X is constant
enum E3 {
	X,
}

// All enum numbers in 'E4' and 'E5' are constant
enum E4 { X, Y, Z }
enum E5 {
	A = 1, B, C,
}

enum FileAccess {
	// constant members
	None,
	Read = 1 << 1,
	Write = 1 << 2,
	ReadWrite = Read | Write,
	// computed member
	G = "123".length,
}

// 联合枚举与枚举成员的类型
enum ShapKind {
	Circle,
	Square,
}

interface Circle {
	kind: ShapKind.Circle;
	radius: number;
}

interface Square {
	kind: ShapKind.Square;
	sideLength: number;
}

let myCircle: Circle = {
	//kind: ShapKind.Square, // [tsserver 2322] [E] Type 'ShapKind.Square' is not assignable to type 'ShapKind.Circle'.
	kind: ShapKind.Circle, // [tsserver 2322] [E] Type 'ShapKind.Square' is not assignable to type 'ShapKind.Circle'.
	radius: 100,
}

enum E6 {
	Foo,
	Bar,
}

function E6Func(x: E6) {
//	if (x !== E6.Foo || x !== E6.Bar) {
		// 
		// --snips
//	}
}

// 运行时枚举
enum E7 {
	X, Y, Z,
}

function E7Func(obj: {X: number}) {
	return obj.X;
}

E7Func(E7);

// 反向映射
enum EnumNumber {
	A
}

let aEnumNum = EnumNumber.A;
let nameOfA = EnumNumber[aEnumNum];
console.log("name: "+nameOfA+" value: "+aEnumNum);

// const 枚举
const enum ConstEnum {
	A = 1,
	B = A * 2,
}

const enum ConstDirection {
	Up,
	Down,
	Left,
	Right,
}

let directions = [ConstDirection.Up, ConstDirection.Down, ConstDirection.Left, ConstDirection.Right]

declare enum E8 {
	A = 1,
	B,
	C = 2,
}

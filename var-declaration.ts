// var 声明
var a = 10;

function f() {
	var message = "hello, world!";

	return message;
}

function f2() {
	var a = 10;
	return function g1() {
		var b = a + 1;
		return b;
	};
}

var g = f2();
//g1(); // return 11;

function f3() {
	var a = 1;

	a = 2;
	var b = g();
	a = 3;
	return b;
	function g() {
		return a;
	}
}

f3(); // returns 2

function f4(shouldInitialize: boolean) {
	if ( shouldInitialize ) {
		var x = 10;
	}

	return x;
}

f4(true); // returns '10'
f4(false); // returs 'undefined'

function sumMatrix(matrix: number[][]) {
	var sum = 0;
	for ( var i = 0; i < matrix.length; i++ ) {
		var currentRow = matrix[i];
		for ( var i = 0; i < currentRow.length; i++ ) {
			sum += currentRow[i];
		}
	}

	return sum;
}

// 捕获便令怪异支出
for (var i = 0; i < 10; i++) {
	//setTimeout(function() { console.log(i);  }, 10 * i);
}

for ( var i = 0; i < 10; i++ ) {
	// capture the current state of 'of'
	// by invoking a function with its current value
	(function(i) {
		//setTimeout(function() { console.log(i); }, 100 * i );
	})(i);
}

// let 声明
let hello = "hello!";

// 块作用域
function f5(input: boolean) {
	let a = 100;

	if (input) {
		// Still okay to reference 'a'
		let b = a + 1;
		return b;
	}

	// Error: 2304 Error: Cannot find name 'b'.
	//return b;
}
console.log(f5(false));

try {
	throw "oh no!";
}
catch (e) {
	console.log("oh well.");
}
// Error: Cannot find name 'e'.
//console.log(e);

// [2448] [Error] Block-scoped variable 'c' used before its declaration.
// [2532] [Error] Object is possibly 'undefined'.
//c++;
//let c;

function foo() {
	return d;
}

// 不能在 'd' 被声明之前调用 'foo'
// 运行时应该跑出错误
console.log(foo());
let d;

// 重新定义及屏蔽
/*
	 function f6(x){
	 var x;
	 var x;
	 if (true) {
	 var x;
	 }
	 }
 */

//let x = 10;
//let x = 20; // [2451] [Error] Cannot redeclare block-scoped variable 'x'.

/*
	 function f7(x) {
	 let x = 100; // [2300] [Error] Duplicate identifier 'x'.
	 }

	 function g7() {
	 let x = 100;
	 var x = 100; // [2451] [Error] Cannot redeclare block-scoped variable 'x'.
	 }
 */

function f8(condition, x) {
	if ( condition ) {
		let x = 100;
		return x;
	}

	return x;
}

console.log(f8(false, 0)) // 0
console.log(f8(true, 0)) // 100

function sumMatrix2(matrix: number[][]) {
	let sum = 0;
	for ( let i = 0; i < matrix.length; i++ ) {
		var currentRow = matrix[i];
		for (let i = 0; i < currentRow.length; i++) {
			sum += currentRow[i];
		}
	}

	return sum;
}

function theCityThatAlwaysSleeps() {
	let getCity;

	if (true) {
		let city = "Seattle";
		getCity = function() {
			return city;
		}
	}

	return getCity();
}

//for (let i = 0; i < 10; i++) {
//	setTimeout(function() {console.log('\n'+i); }, 100 * i );
//}

// const 声明
const numLivesForCat = 9;
const kitty = {
	name: "Aurora",
	nameLives: numLivesForCat,
}

// [2588] [Error] Cannot assign to 'kitty' because it is a constant.

//kitty = {
//	name: "Danielle",
//	numLices: numLivesForCat
//};


// all ok
kitty.name = "aaa"
kitty.name = "bbb"
kitty.name = "ccc"
kitty.nameLives--;

// 解构
// 结构数组
let input = [1, 2];
let [first, second] = input;
console.log(first); // output 1
console.log(second); // output 2

first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first]

function f9([first, second]: [number, number]) {
	console.log('first: '+first);
	console.log('second: '+second);
}
//f9(input);

let [first1, ...rest] = [1, 2, 3, 4];
console.log('first1: ' + first1); // output 1
console.log(rest) // output [ 2, 3, 4 ]

let [first2] = [1, ,2 ,3 ,4];
console.log('first2: ' + first2);

let [, second3, , fourth3] = [1, 2, 3, 4];

// 解构对象
let o = {
	a2: "foo",
	b2: 12,
	c2: "bar"
};
let { a2, b2 }  = o;
console.log(o);

({ a2, b2 } = { a2: "baz", b2: 101 } )
console.log(o.b2);


let { a2, ...passthrough } = o;
let total = passthrough.b2 + passthrough.c2.length;
console.log(total);

// 属性重命名
let { a2: newName1, b2: newName2 } = o;

let newName1 = o.a2;
let newName2 = o.a2;

let { a2, b2 }: { a2: string, b2: number } = o;

// 默认值
function keepWholeObject(whleObject: {a3: string, b3?: number}) {
	let { a3, b3 = 1001 } = whleObject;
}

// 结构用于函数声明
type C = { a: string, b?: number }
function f10({ a, b }: C): void {
	//...
}

function f11( { a="", b=0 } = {} ): void {
	//...
}
f11();

function f12({ a, b = 0 } = { a: "" }): void {
	// ...
}
f12({ a: "yes" }); // ok, default b= 0
f12(); // ok, default to {a: ""}, whichi then defaults b = 0
// [tsserver 2345] [E] Argument of type '{}' is not assignable to parameter of type '{ a: string; b?: number | undefined; }'.
//  Property 'a' is missing in type '{}' but required in type '{ a: string; b?: number | undefined; }'.
f12({});

let first4 = [1, 2];
let second4 = [3, 4];
let bothPlus = [0, ...first4, ...second4, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
let search1 = {food: "rich", ...defaults};

class C1 {
	p = 12;
	m() {
	}
}
let c1 = new C1();
let clone = { ...c1 };
clone.p; // ok
//clone.m(); // [2339] [E] Property 'm' does not exist on type '{ p: number; }'.

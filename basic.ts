export {}

// boolean 布尔值
// 最基本的数据类型 true/false ，在JS 和 TS 中叫做 boolean
let isDone: boolean = false;

// number 数字
// 和 JS 中一样，TS 里所有的数字都是浮点数。
// 除了支持十进制和十六进制字面量，TS 还支持 CMAScript 2015 中引入的二进制个和八进制字面量。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octallLiteral: number = 0o744;

// string 字符串
// JS 程序的其中一个基本操作就是处理网页或服务器端的文本数据。TS 中使用 string 表示文本数据类型
// 和 JS 中一样，可以使用双引号（""）或者单引号（''）表示字符串
let name: string = "Lee";
name = "captain";

// 模板字符串
// 你还可以使用模板字符串，它可以定义多行文本和内嵌表达式。这种字符串是被反引号（``）包围，
// 并以 ${ expr } 这种形式嵌入表达
let name2: string = `Lee`;
let age: number = 37;
let sentence: string = `hello, my name is ${ name2 }. I'll be ${ age + 1 }.
	I'm a gopher.`

// 这与下面定义 sentence 的方式效果相同
let sentence2: string = "hello. my name is" + name + ". I'll be" + ( age +1 ) +
	".\n" + "I'm a gopher"

// 数组
// 有两种定义方式
// 1. 在元素类型后面接上 []，表示此类型元素组成一个数组
let list: number[] = [1, 2, 3];
// 2. 使用数组泛型
let list2: Array<number> = [1, 2, 3];

// Tuple 元组
// 元组类型允许表示一个已知元素数量和类型的数组，个元素的类型不必相同。
// 例如：定义一对值分别为 string 和 number 类型的元组
// 定义一个元组类型变量
let x: [string, number];
// 初始化它
// 注意，类型的顺序不能错 x = [1, 'hello'] 是错误的
x = ['hello', 1];

// 访问一个已知索引的元素，会得到具体的类型
console.log(x[0].substr(1)); // ok
//console.log(x[1].substr(1)); //  Property 'substr' does not exist on type 'number'.

// 当访问一个越界的元素会使用联合类型代替
//x[3] = 'world'; // 字符串可以赋值给 (string | number) 类型
//console.log(x[5].toString()); // ok, string 和 number 都有 toString
//x[6] = true; // Error, 布尔不是 (string | number) 类型

// enum 枚举
// enum 类型是对 JS 标注数据类型的一个补充。使用枚举可以为一组数值赋予友好的名字。
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// 默认情况下，从 0 开始为元素编号。你也可以手动的指定成员的数值，例如
enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。例如，我们知道数值2，但是不确定它映射到 Color
// 里的哪个名字，我们可以查找相应的名字
enum Color3 {Red = 1, Green, Blue}
let colorname: string = Color[2];
console.log(colorname); // 显示 'Green' 因为上面代码里它的值是2

// any
// 有时候，我们会想要为哪些在编程阶段还不清楚类型的变量指定一个类型。这些值可能来自于动态内容，比如
// 来自用户输入或者第三方库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让他们通过编译阶段
// 的检查。这时候就可以使用 any 类型来标记这些变量
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // ok, definitely a boolean

// 对现有代码进行改进的时候，any 类型是十分有作用的，它允许你在编译时可选择的包含或移除类型检查。
// 你可能认为 Object 有相似的作用，就像它在其他语言中那样。但是 Object 类型的变量只是允许你给它
// 赋任意值，但却不能够在它上面调用任意的方法，即便它猪呢的有些方法
let notSure2: any = 4;
notSure2.ifItExists(); // ifItExists 可能运行时存在，这个方法将在运行的时候检查，编译阶段不检查
notSure2.toFixed(); // toFixed 这个方法存在，但是编译器不检查
let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' does not exist on type 'Object'

// 当你只知道一部分数据的类型时，any 类型也是有用的
// 例如：一个数组，它包含了不同类型的数据
let list3: any[] = [1, true, "free"];
list3[1] = 100;

// void
// 某种程度上说，void 类型表达的意思与 any 类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到返回值类型是 void
function warnUser() :void {
	console.log('This is my warning messaage');
}
// 声明一个 void 类型变量没什么用。因为你只能为他赋予 undefined 和 null
let unusable: void = undefined

// Null 和 Undefined
// TS 里， undefined 和 unll 两者各自有自己的类型，分别叫做 undefined 和 null 。
// 和 void 相似，他们的本身的类型用处不是很大。
let u: undefined = undefined;
let n: null = null;
// 默认情况下 null 和 undefined 是所有类型的子类型。可以把它们赋值给其他类型的变量。
// 但是，当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和他们各自。
// 这能避免很多常见的问题，例如：在某处你想传入一个 string 或者 unll 或 undefined ，你可以使用联合
// 类型 string | unll | undefined 。

// Never
// never 类型表示的是那些永远不存在的值的类型。例如，never 类型是那些总是会抛出异常或者根本不会有返
// 回值的函数表达式或者箭头函数表达式的返回值类型；变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。
// never 类型是任何类型的子类型，也可以赋值给任何类型，但是没有类型是 never 的子类型或可以赋值给 never
// 类型（除了 never 本身之外）。即使 any 也不可以赋值给 never 。

// 返回 never 的函数必须存在无法到达的重点
function error(message: string): never {
	throw new Error(message);
}
// 推断的返回值类型为 never
function fail() {
	return error("Something failed")
}
// 返回 never 的函数必须存在无法到达的终点
function infiniteLoop(): never {
	while (true) {
	}
}

// Object
// object 表示非原始类型，也就是除number、string、boolean、symbol、null 或者 undefined 之外的类型。
// 使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：
declare function create(o: object | null): void;
create({ prop:0 }); // ok
create(null); // ok
// Error
// create(42);
// create("string");
// create(false);
// create(undefined);

// 类型断言
// 有时候你会遇到这种情况，你比 TS 更了解某个值的详细信息。通常这回发生在你清楚地知道某个实体具有
// 比它现有类型更确切的类型。
// 通过类型断言这总方式可以告诉编译器。类型断言就好比其他语言的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。TS 会假设程序员已经进行了必须的检查。
// 类型断言有两种形式。
// 1. 尖括号语法
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length;
// 2. as 语法
let someValue2: any = "this is a string"
let strLength2: number = (someValue2 as string).length;
// 两种语法是等价的，但是，当你在 TS 中使用 JSX 时，只有 as 语法断言是被允许的。

// 关于 let
// 你可能已经注意到，我们使用 let 关键字来代替大家所熟悉的 JS 关键字 var 。let 关键字是 JS 的一个新概念
// TS 实现了它。后面会详细介绍它，很多常见的问题都可以通过使用 let 来解决，所以，尽可能的使用 let 来代替 var 吧。

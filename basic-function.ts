// 函数
// Named function
function add(x, y) {
	return x + y;
}

// Anoymous function
let myAdd = function(x, y) { return x + y; };

let z = 100;

function addToz(x, y) {
	return x + y + z;
}

console.log(addToz(1, 2));

// 函数类型

// 为函数定义类型
function add2(x: number, y: number): number {
	return x + y;
}
let myAdd2 = function(x: number, y: number) :number { return x + y; };

// 书写完整函数类型
let myAdd3: (x: number, y: number) => number =
	function(x: number, y: number): number { return x + y; };

let myAdd4: (baseValue: number, increment: number) => number =
	function(x: number, y: number): number { return x + y; };

// 推断类型
// myAdd5 has the full function type
let myAdd5 = function(x: number, y: number): number { return x + y; };
// The parameters `x` and `y` have the type number
let myAdd6: (baseValue: number, increment: number) => number =
	function(x,y) { return x + y; };

// 可选参数和默认参数
//function buildName(firstName: string, lastName: string) {
function buildName(firstName: string, lastName?: string) {
	return firstName + " " + lastName;
}

//let result = buildName("Bob"); // [2554] [Error] Expected 2 arguments, but got 1.
//let result2 = buildName("Bob", "Adams", "Sr."); // [2554] [Error] Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams");

let result4 = buildName("Bob");
//let result = buildName("bob", "adams", "Sr."); // [tsserver 2554] [E] Expected 1-2 arguments, but got 3.

function buildName2(firstName: string, lastName = "Smith") {
	return firstName + " " + lastName;
}

let name1 = buildName2("Bob"); // Bob Smith
let name2 = buildName2("Bob", undefined); // Bob Smith
let name3 = buildName2("Bob", "Adams"); // Bob Adams
//let name4 = buildName2("Bob", "Adams", "Sr."); // [tsserver 2554] [E] Expected 1-2 arguments, but got 3.

function buildName3(firstName = "will", lastName: string) {
	return firstName + " " + lastName;
}

//let name4 = buildName3("Bob"); // [tsserver 2554] [E] Expected 2 arguments, but got 1.
//let name5 = buildName3("Bob", "Adams", "Sr."); // [tsserver 2554] [E] Expected 2 arguments, but got 3.
let name6 = buildName3("Bod", "Adams"); // Bob Adams
let name7 = buildName3(undefined, "Adams"); // will Adams

// 剩余参数
function buildName4(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName4("Joseph", "Samuel", "Luces", "Mackinzie");
console.log(employeeName);

let buildName4Fun: (firstName: string, ...restOfName: string[]) => string = buildName4;

// this

// this 和箭头函数
/*
let deck = {
	sutis: ["hearts", "spades","clubs", "diamonds"],
	card: Array(52),
	createCardPicker: function() {
		return function() {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			// [tsserver 2683] [E] 'this' implicitly has type 'any' because it does not have a type annotation.
			return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
//alert("card: " + pickedCard.card + "of " + pickedCard.suit)
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
*/

let deck2 = {
	sutis: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function() {

		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return { suit: this.sutis[pickedSuit], card: pickedCard % 13 };
		}
	}
}

let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker2();
//alert("card: " + pickedCard2.card + "of " + pickedCard2.suit)
console.log("card: " + pickedCard2.card + "of " + pickedCard2.suit);

// this 参数
function f13(this: void) {
	// make sure `this` is unusable in this standalone function
}

// this 参数
interface Card {
	suit: string;
	card: number;
}
interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deck3: Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedCSuit = Math.floor(pickedCard / 13);

			return {suit: this.suits[pickedCSuit], card: pickedCard % 13};
		}
	}
}

let cardPicker3 = deck3.createCardPicker();
let pickedCard3 = cardPicker3();

//alert("card: " + pickedCard3.card + "of " + pickedCard3.suit)
console.log("card: " + pickedCard3.card + "of " + pickedCard3.suit)

// this 参数在回调函数里
interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void;
}

/*
class Handler {
	info: string;
	onClickBad(this: Handler, e: Event) {
		this.info = e.message;
	}
}

let h = new Handler();
uiElement.addClickListener(h.onClickBad);
*/

class Handler {
	info: string;
	//onClickGood(this: void, e: Event) {
	//	// can't use this here because it's oftype void
	//	console.log('clicked!')
	//}
	onClickGood = (e: Event) => { this.info = e.message }
}
let h = new Handler();
let uiElement = {
	addClickListener(onclick: (this: void, e: Event) => void): void{}
};
uiElement.addClickListener(h.onClickGood);

// 重载
/*
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x): any{
	if (typeof x == "object") {
		let pickCard = Math.floor(Math.random() * x.length);
		return pickCard;
	}
	else if ( typeof x == "number" ) {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, {suit: "headts", card: 4}];
let pickedCard4 = myDeck[pickCard(myDeck)];
//alert("card: " + pickedCard4.card + "of " + pickedCard4.suit);
console.log("重载==>\ncard: " + pickedCard4.card + "of " + pickedCard4.suit);

let pickedCard5 = pickCard(15);
//alert("card: " + pickedCard5.card + "of " + pickedCard5.suit);
console.log("card: " + pickedCard5.card + "of " + pickedCard5.suit);
*/

let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x): any {
	if (typeof x == "object") {
		let pickCard = Math.floor(Math.random() * x.length);
		return pickCard;
	}
	else if ( typeof x == "number" ) {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, {suit: "headts", card: 4}];
let pickedCard4 = myDeck[pickCard(myDeck)];
//alert("card: " + pickedCard4.card + "of " + pickedCard4.suit);
console.log("重载==>\ncard: " + pickedCard4.card + "of " + pickedCard4.suit);

let pickedCard5 = pickCard(15);
//alert("card: " + pickedCard5.card + "of " + pickedCard5.suit);
console.log("card: " + pickedCard5.card + "of " + pickedCard5.suit);


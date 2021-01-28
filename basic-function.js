// 函数
// Named function
function add(x, y) {
    return x + y;
}
// Anoymous function
var myAdd = function (x, y) { return x + y; };
var z = 100;
function addToz(x, y) {
    return x + y + z;
}
console.log(addToz(1, 2));
// 函数类型
// 为函数定义类型
function add2(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) { return x + y; };
// 书写完整函数类型
var myAdd3 = function (x, y) { return x + y; };
var myAdd4 = function (x, y) { return x + y; };
// 推断类型
// myAdd5 has the full function type
var myAdd5 = function (x, y) { return x + y; };
// The parameters `x` and `y` have the type number
var myAdd6 = function (x, y) { return x + y; };
// 可选参数和默认参数
//function buildName(firstName: string, lastName: string) {
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result = buildName("Bob"); // [2554] [Error] Expected 2 arguments, but got 1.
//let result2 = buildName("Bob", "Adams", "Sr."); // [2554] [Error] Expected 2 arguments, but got 3.
var result3 = buildName("Bob", "Adams");
var result4 = buildName("Bob");
//let result = buildName("bob", "adams", "Sr."); // [tsserver 2554] [E] Expected 1-2 arguments, but got 3.
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var name1 = buildName2("Bob"); // Bob Smith
var name2 = buildName2("Bob", undefined); // Bob Smith
var name3 = buildName2("Bob", "Adams"); // Bob Adams
//let name4 = buildName2("Bob", "Adams", "Sr."); // [tsserver 2554] [E] Expected 1-2 arguments, but got 3.
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "will"; }
    return firstName + " " + lastName;
}
//let name4 = buildName3("Bob"); // [tsserver 2554] [E] Expected 2 arguments, but got 1.
//let name5 = buildName3("Bob", "Adams", "Sr."); // [tsserver 2554] [E] Expected 2 arguments, but got 3.
var name6 = buildName3("Bod", "Adams"); // Bob Adams
var name7 = buildName3(undefined, "Adams"); // will Adams
// 剩余参数
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName4("Joseph", "Samuel", "Luces", "Mackinzie");
console.log(employeeName);
var buildName4Fun = buildName4;
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
var deck2 = {
    sutis: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.sutis[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
//alert("card: " + pickedCard2.card + "of " + pickedCard2.suit)
console.log("card: " + pickedCard2.card + "of " + pickedCard2.suit);
// this 参数
function f13() {
    // make sure `this` is unusable in this standalone function
}
var deck3 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedCSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedCSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker3 = deck3.createCardPicker();
var pickedCard3 = cardPicker3();
//alert("card: " + pickedCard3.card + "of " + pickedCard3.suit)
console.log("card: " + pickedCard3.card + "of " + pickedCard3.suit);
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
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        //onClickGood(this: void, e: Event) {
        //	// can't use this here because it's oftype void
        //	console.log('clicked!')
        //}
        this.onClickGood = function (e) { _this.info = e.message; };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function (onclick) { }
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
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickCard_1 = Math.floor(Math.random() * x.length);
        return pickCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "headts", card: 4 }];
var pickedCard4 = myDeck[pickCard(myDeck)];
//alert("card: " + pickedCard4.card + "of " + pickedCard4.suit);
console.log("重载==>\ncard: " + pickedCard4.card + "of " + pickedCard4.suit);
var pickedCard5 = pickCard(15);
//alert("card: " + pickedCard5.card + "of " + pickedCard5.suit);
console.log("card: " + pickedCard5.card + "of " + pickedCard5.suit);

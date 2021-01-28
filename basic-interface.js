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
function printLable(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLable(myObj);
function printLab(lablelledObj) {
    console.log(lablelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object" };
printLab(myObj1);
// 可选属性
function CreateSquare(config) {
    var newsquare = { color: "white", area: 100 };
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
var mysquare = CreateSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
//p1.x = 5; // Error Cannot assign to 'x' becasure it is a read-only property.
var a1 = [1, 2, 3, 4];
var ro1 = a1;
//ro1[0] = 12; // [2542] [Error] Index signature in type 'readonly number[]' only permits rading.
//ro1.push(5); // [2339] [Error] Property 'push' does not exist on type 'readonly number[]'.
//ro1.length = 100; // [2540] [Error] Cannot assign to 'length' because it si readonly porperty.
//a1 = ro1; // [4104] [Error] The type 'readonly number[]' is 'readonly' and cannot bo assign to the mutble type 'number[]'
a1 = ro1;
// 额外的属性检查
// [tsserver 2345] [E] Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
//let mySquare = CreateSquare({ colour: "red", width: 100 });
var mySquare = CreateSquare({ width: 100, opactiy: 0.5 });
var squareOptions = { color: "red", width: 100 };
var mySquare2 = CreateSquare(squareOptions);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > 1;
};
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > 1;
};
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray2 = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitaClock = /** @class */ (function () {
    function DigitaClock(h, m) {
    }
    DigitaClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitaClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    ;
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitaClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blud";
square.sideLength = 10;
var square2 = {};
square2.color = "red";
square2.penWidth = 10;
square2.sideLength = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 接口继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// [2420] [Error] Class 'Image1' incorrectly implements interface 'SelectableControl'.
// Property 'state' is missing in type 'Image1' but required in type 'SelectableControl'.
//class Image1 implements SelectableControl {
var Image1 = /** @class */ (function (_super) {
    __extends(Image1, _super);
    function Image1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image1.prototype.select = function () { };
    ;
    return Image1;
}(Control));
var Location1 = /** @class */ (function () {
    function Location1() {
    }
    return Location1;
}());

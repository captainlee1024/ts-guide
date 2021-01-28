var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b;
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
function f4(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f4(true); // returns '10'
f4(false); // returs 'undefined'
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
// 捕获便令怪异支出
for (var i = 0; i < 10; i++) {
    //setTimeout(function() { console.log(i);  }, 10 * i);
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'of'
    // by invoking a function with its current value
    (function (i) {
        //setTimeout(function() { console.log(i); }, 100 * i );
    })(i);
}
// let 声明
var hello = "hello!";
// 块作用域
function f5(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
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
var d;
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
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f8(false, 0)); // 0
console.log(f8(true, 0)); // 100
function sumMatrix2(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
//for (let i = 0; i < 10; i++) {
//	setTimeout(function() {console.log('\n'+i); }, 100 * i );
//}
// const 声明
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    nameLives: numLivesForCat
};
// [2588] [Error] Cannot assign to 'kitty' because it is a constant.
//kitty = {
//	name: "Danielle",
//	numLices: numLivesForCat
//};
// all ok
kitty.name = "aaa";
kitty.name = "bbb";
kitty.name = "ccc";
kitty.nameLives--;
// 解构
// 结构数组
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // output 1
console.log(second); // output 2
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
function f9(_a) {
    var first = _a[0], second = _a[1];
    console.log('first: ' + first);
    console.log('second: ' + second);
}
//f9(input);
var _c = [1, 2, 3, 4], first1 = _c[0], rest = _c.slice(1);
console.log('first1: ' + first1); // output 1
console.log(rest); // output [ 2, 3, 4 ]
var first2 = [1, , 2, 3, 4][0];
console.log('first2: ' + first2);
var _d = [1, 2, 3, 4], second3 = _d[1], fourth3 = _d[3];
// 解构对象
var o = {
    a2: "foo",
    b2: 12,
    c2: "bar"
};
var a2 = o.a2, b2 = o.b2;
console.log(o);
(_b = { a2: "baz", b2: 101 }, a2 = _b.a2, b2 = _b.b2);
console.log(o.b2);
var a2 = o.a2, passthrough = __rest(o, ["a2"]);
var total = passthrough.b2 + passthrough.c2.length;
console.log(total);
// 属性重命名
var newName1 = o.a2, newName2 = o.b2;
var newName1 = o.a2;
var newName2 = o.a2;
var a2 = o.a2, b2 = o.b2;
// 默认值
function keepWholeObject(whleObject) {
    var a3 = whleObject.a3, _a = whleObject.b3, b3 = _a === void 0 ? 1001 : _a;
}
function f10(_a) {
    var a = _a.a, b = _a.b;
    //...
}
function f11(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
    //...
}
f11();
function f12(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f12({ a: "yes" }); // ok, default b= 0
f12(); // ok, default to {a: ""}, whichi then defaults b = 0
// [tsserver 2345] [E] Argument of type '{}' is not assignable to parameter of type '{ a: string; b?: number | undefined; }'.
//  Property 'a' is missing in type '{}' but required in type '{ a: string; b?: number | undefined; }'.
f12({});
var first4 = [1, 2];
var second4 = [3, 4];
var bothPlus = __spreadArrays([0], first4, second4, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
var search1 = __assign({ food: "rich" }, defaults);
var C1 = /** @class */ (function () {
    function C1() {
        this.p = 12;
    }
    C1.prototype.m = function () {
    };
    return C1;
}());
var c1 = new C1();
var clone = __assign({}, c1);
clone.p; // ok
//clone.m(); // [2339] [E] Property 'm' does not exist on type '{ p: number; }'.

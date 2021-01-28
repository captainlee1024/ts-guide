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
function identityNumber(arg) {
    return arg;
}
console.log(identityNumber(1));
function identityAny(arg) {
    return arg;
}
console.log(identityAny("sth-string"));
function identityGeneric(arg) {
    return arg;
}
console.log(identityGeneric("sthGeneric-string"), identityGeneric(2));
console.log(identityGeneric("sthGeneric-string"), identityGeneric(2));
function loggingIdentityGeneric(arg) {
    //console.log(arg.length); // Error: lentgh does not exist on type 'T'
    return arg;
}
function loggingIdentityGenericList(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentityGenericList([1, 2, 3, 4, 5]);
function loggingIdentityGenericArray(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentityGenericArray(['a', 'b', 'c']);
// 泛型类型
var myIdentity1 = identityGeneric;
var myIdentity2 = identityGeneric;
var myIdentity3 = identityGeneric;
function identityGeneric2(arg) {
    return arg;
}
var myIdentity4 = identityGeneric2;
console.log(myIdentity4('sth-interface'));
var myIdentity5 = identityGeneric2;
console.log(myIdentity5(123));
// 泛型类
var GenericNumber = /** @class */ (function () {
    //zeroValue: T;
    //add: (x: T, y: T) => T;
    function GenericNumber(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
        this.zeroValue = zeroValue;
        this.add = add;
    }
    return GenericNumber;
}());
//let myGenericNumber = new GenericNumber<number>();
var myGenericNumber = new GenericNumber(0, function (a, b) { return a + b; });
myGenericNumber.zeroValue = 0;
//myGenericNumber.add = function add(x, y) { return x + y; };
console.log(myGenericNumber.zeroValue, myGenericNumber.add(1, 2));
//let myGenericString = new GenericNumber<string>();
var myGenericString = new GenericNumber('', function (a, b) { return a + b; });
myGenericString.zeroValue = "sth-string";
//myGenericString.add = function add(x, y) {return x + y; };
console.log(myGenericString.add(myGenericString.zeroValue, "test"));
function loggingIdentityGenericPlus(arg) {
    console.log(arg + ' length:' + arg.length);
    return arg;
}
loggingIdentityGenericPlus([1, 2, 3]);
//loggingIdentityGenericPlus(1);
loggingIdentityGenericPlus({ length: 10, value: 3 });
// 泛型约束
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
//getProperty(x, 'm');
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = 'default-nametag';
    }
    return ZooKeeper;
}());
var MyAnimal = /** @class */ (function () {
    function MyAnimal() {
        this.numLegs = 0;
    }
    return MyAnimal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super.call(this) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(MyAnimal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super.call(this) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(MyAnimal));
function createInstances(c) {
    return new c();
}
console.log(createInstances(Lion).keeper.nametag);
console.log(createInstances(Bee).keeper.hasMask);

// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
var MyResponse;
(function (MyResponse) {
    MyResponse[MyResponse["No"] = 0] = "No";
    MyResponse[MyResponse["Yes"] = 1] = "Yes";
})(MyResponse || (MyResponse = {}));
function respond(recipient, message) {
    // --snips
}
respond("princess Caroline", MyResponse.Yes);
function getSomeValue() {
    return 1;
}
//enum E {
//	A = getSomeValue(),
//	B
//}
var E2;
(function (E2) {
    E2[E2["B"] = 0] = "B";
    E2[E2["A"] = getSomeValue()] = "A";
})(E2 || (E2 = {}));
// 字符串枚举
var StringDirection;
(function (StringDirection) {
    StringDirection["Up"] = "Up";
    StringDirection["Down"] = "Down";
    StringDirection["Left"] = "Left";
    StringDirection["Right"] = "Right";
})(StringDirection || (StringDirection = {}));
// 异构枚举
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "Yes";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// 计算和成员变量
// E3.X is constant
var E3;
(function (E3) {
    E3[E3["X"] = 0] = "X";
})(E3 || (E3 = {}));
// All enum numbers in 'E4' and 'E5' are constant
var E4;
(function (E4) {
    E4[E4["X"] = 0] = "X";
    E4[E4["Y"] = 1] = "Y";
    E4[E4["Z"] = 2] = "Z";
})(E4 || (E4 = {}));
var E5;
(function (E5) {
    E5[E5["A"] = 1] = "A";
    E5[E5["B"] = 2] = "B";
    E5[E5["C"] = 3] = "C";
})(E5 || (E5 = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
// 联合枚举与枚举成员的类型
var ShapKind;
(function (ShapKind) {
    ShapKind[ShapKind["Circle"] = 0] = "Circle";
    ShapKind[ShapKind["Square"] = 1] = "Square";
})(ShapKind || (ShapKind = {}));
var myCircle = {
    //kind: ShapKind.Square, // [tsserver 2322] [E] Type 'ShapKind.Square' is not assignable to type 'ShapKind.Circle'.
    kind: ShapKind.Circle,
    radius: 100
};
var E6;
(function (E6) {
    E6[E6["Foo"] = 0] = "Foo";
    E6[E6["Bar"] = 1] = "Bar";
})(E6 || (E6 = {}));
function E6Func(x) {
    //	if (x !== E6.Foo || x !== E6.Bar) {
    // 
    // --snips
    //	}
}
// 运行时枚举
var E7;
(function (E7) {
    E7[E7["X"] = 0] = "X";
    E7[E7["Y"] = 1] = "Y";
    E7[E7["Z"] = 2] = "Z";
})(E7 || (E7 = {}));
function E7Func(obj) {
    return obj.X;
}
E7Func(E7);
// 反向映射
var EnumNumber;
(function (EnumNumber) {
    EnumNumber[EnumNumber["A"] = 0] = "A";
})(EnumNumber || (EnumNumber = {}));
var aEnumNum = EnumNumber.A;
var nameOfA = EnumNumber[aEnumNum];
console.log("name: " + nameOfA + " value: " + aEnumNum);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

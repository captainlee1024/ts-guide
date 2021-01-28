function identityNumber(arg: number): number{
	return arg;
}
console.log(identityNumber(1));

function identityAny(arg: any): any{
	return arg;
}
console.log(identityAny("sth-string"));

function identityGeneric<T>(arg: T): T{
	return arg;
}
console.log(identityGeneric<string>("sthGeneric-string"),identityGeneric<number>(2));
console.log(identityGeneric("sthGeneric-string"), identityGeneric(2));

function loggingIdentityGeneric<T>(arg: T): T {
	//console.log(arg.length); // Error: lentgh does not exist on type 'T'
	return arg;
}

function loggingIdentityGenericList<T>(arg: T[]): T[] {
	console.log(arg.length);
	return arg;
}
loggingIdentityGenericList([1,2,3,4,5])

function loggingIdentityGenericArray<T>(arg: Array<T>): Array<T> {
	console.log(arg.length);
	return arg;
}
loggingIdentityGenericArray(['a', 'b', 'c']);

// 泛型类型
let myIdentity1: <T>(arg: T) => T = identityGeneric;

let myIdentity2: <U>(arg: U) => U = identityGeneric;

let myIdentity3: {<T>(arg: T): T} = identityGeneric;

interface GenericIdentityFn {
	<T>(arg: T): T;
}

function identityGeneric2<T>(arg: T): T {
	return arg;
}
let myIdentity4: GenericIdentityFn = identityGeneric2;
console.log(myIdentity4('sth-interface'));

interface GenericIdentityFn2<T> {
	(arg: T): T;
}
let myIdentity5: GenericIdentityFn2<number> = identityGeneric2;
console.log(myIdentity5(123));

// 泛型类
class GenericNumber<T> {
    //zeroValue: T;
    //add: (x: T, y: T) => T;
		constructor(public zeroValue: T, public add: (x: T, y: T) => T){
			this.zeroValue = zeroValue;
      this.add = add;
    }
}

//let myGenericNumber = new GenericNumber<number>();
let myGenericNumber = new GenericNumber<number>(0, (a, b) => a+b);
myGenericNumber.zeroValue = 0;
//myGenericNumber.add = function add(x, y) { return x + y; };
console.log(myGenericNumber.zeroValue, myGenericNumber.add(1, 2));

//let myGenericString = new GenericNumber<string>();
let myGenericString = new GenericNumber<string>('', (a, b) => a+b);
myGenericString.zeroValue = "sth-string";
//myGenericString.add = function add(x, y) {return x + y; };
console.log(myGenericString.add(myGenericString.zeroValue, "test"));

interface LengthWise {
	length: number;
}

function loggingIdentityGenericPlus<T extends LengthWise>(arg: T): T {
	console.log(arg+' length:'+arg.length);
	return arg;
}
loggingIdentityGenericPlus([1, 2, 3]);
//loggingIdentityGenericPlus(1);
loggingIdentityGenericPlus({length: 10, value: 3});

// 泛型约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
	return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
//getProperty(x, 'm');

function create<T>(c: {new(): T;}): T {
	return new c();
}

class BeeKeeper {
	hasMask: boolean;
	constructor() {
		this.hasMask = true;
	}
}

class ZooKeeper {
	nametag: string;
	constructor() {
		this.nametag = 'default-nametag';
	}
}

class MyAnimal {
	numLegs: number;
	constructor() {
		this.numLegs = 0;
	}
}

class Bee extends MyAnimal {
	keeper: BeeKeeper;
	constructor() {
		super();
		this.keeper = new BeeKeeper();
	}
}

class Lion extends MyAnimal {
	keeper: ZooKeeper;
	constructor() {
		super();
		this.keeper = new ZooKeeper();
	}
}

function createInstances<A extends MyAnimal>(c: new () => A): A {
	return new c();
}
console.log(createInstances(Lion).keeper.nametag);
console.log(createInstances(Bee).keeper.hasMask);

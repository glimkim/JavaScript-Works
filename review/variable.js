'use stric';
//added in ES5
//use this for Vanilla JS

//1. Variable
//let (added in ES6) read and write
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
}
console.log(globalName);

//var (don't ever use this!!)
//var hoisting (호이스팅은 어디 선언했나에 상관없이 스크립트 가장 위에서 선언이 되는 것을 말합니다.)
//has no block scope 
{
    console.log();
    age = 4;
    var age;
}
console.log(age);

//constants read only
// use const whenever possible
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

//Note!
/* 
Immutable data types: premitive types, frozen objects (i.e. object.freeze())
Mutable data types: all objects by default are mutable in JS
favor immutalbe data type always for a few reasons:
- security
- thread
- reduce human mistakes
*/

//2. Variable types
//primitive, single item : number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

//number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2

//bigInt (fairly new, don't use it yet)
const bigInt = 12345667901234454566890n; // over (2-**53) ~ (2*53)
console.log(`value:${bigInt}, type:${typeof bigInt}`);

//string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brenden}`

//Bolean
//false: 0, null, undefined, Nan, ''
//true: any other value
const canRead = true;
const test = 3<1;
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

//null
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined
let x = undefined;
let y; //also undefined

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id'); //주어진 식별자 id와 상관없이 고유한 식별자를 만들 때 사용
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const lim = {name:'lim', age:'27'}
lim.age = 28;

//3. dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = ''+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

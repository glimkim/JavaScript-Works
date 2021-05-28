'use strict';

//1. String concatenation
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals:

...
1+2 = ${1+2}`);

console.log(`lim's \n\tbook`);

//2. numeric operaoter
console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/1);
console.log(1%1);
console.log(2**3); //exponentiation 2의3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(counter);
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement:${preIncrement} counter:${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
// counter = counter +1;
console.log(`preIncrement:${postIncrement} counter:${counter}`);
const preDecrement = --counter;
const postDecrement = counter--;

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10<=6); //less than or equal
console.log(10>6); //greater than
console.log(10>=6); //greater than or equal

//6. Logical operators ||, &&, !
const value1 = true;
const value2 = 4<2;
// || or, finds the first truthy value
console.log(`or: ${value1||value2||check()}`); 
// || or, finds the first truthy value
console.log(`and: ${value1&&value2&&check()}`); 
//가장 무거운 함수를 제일 뒤에 두고 호출하는 것이 효율적
//often used to compress long if-statement
//nullableObject&&nullableObject.something

function check(){
    for(let i =0;i<10;i++){
        console.log('😝');
    }
    return true;
}
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

//==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

//===stric equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const lim1 = {name:'lim'};
const lim2 = {name:'lim'};
const lim3 = lim1;
console.log(lim1 == lim2); //different ref values differ
console.log(lim1 === lim2); //different ref values differ
console.log(lim1 === lim3); //ref values matches

//8. Conditional operators: if
//if, else if, else
const name = 'coder';
if(name === 'lim'){

}else if(name === 'coder'){
    console.log('You are amazing coder!');
}else{
    console.log('unknown');
}

//9. Ternary operator: ?
//condition?value1:value2;
console.log(name==='lim'?'yes':'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const broswer = 'IE';
switch (broswer){
    case 'IE':
        console.log('go away!');
        break;
    case 'Firefox':
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed
let i = 3;
while(i>0){
    console.log(`while:${i}`);
    i--
}

//do while loop, body code is excuted first, then check the condition
do{
    console.log(`do while: ${i}`);
    i--;
} while (i>0);

//for loop, for(begin; condition; step)
for (i=3;i>0;i--){
    console.log(`for:${i}`);
}
for (let i=7;i>0;i=i-2){
    //inline variable delclaration
    console.log(`inline variable for:${i}`);
}

//nested loops 되도록이면 피할 것!
for(let i = 0; i<10;i++){
    for(let j = 0; j < 10; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

//break, continue
for(let i = 0;i<=10;i++){
    if(i%2===0){
        console.log(`even number:${i}`);
    }/* else{
        continue;
    } */
}
for(let i = 0;i<=10;i++){
    console.log(`number:${i}`);
    if(i>8){
        break;
    }
}
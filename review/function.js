'use strict';

//Function 
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Function declare
/* 
function name(param1, param2) {body ... return;}
one function === one thing
naming : doSomething, command, verb
e.g createCardAndPoint -> createCard, createPoint
function is an object in JS **
*/
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');

//2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const lim = {name: 'lim'}
changeName(lim);
console.log(lim);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage();

//4. Rest parameters (added in ES6) **
function printAll(...args){
    for(let i = 0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach(arg => console.log(arg))
}
printAll('dream', 'coding', 'limi');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage); 
    function printAnother() {
        console.log(message);
        console.log(globalMessage); 
        let childMessage = 'hello';
    }
    /* console.log(childMessage); */ //error
}
printMessage();

//6. Return a value 
function sum(a,b) {
    return a + b;
}
const result = sum(1,2);

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if(user.point > 10){
        //long upgrade logic...
    }
}
//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic ...
}

//First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

//1. Function expression
// a function delcaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it
const print = function () {
    //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'I love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions //함수 안에서 함수 스스로를 부르면 무한대로 호출되는 현상
const printNo = function /* print */() {
    console.log('no!');
    print();
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('I love you', printYes, printNo);

//Arrow function
// always anonymous
const simplePrint2 = function () {
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    //do something more
    return a*b;
}

//IIFE : Immediately Invoked Function Expression 즉시 실행 함수
(function hello() {
    console.log('IIFE');
})();

function calculator(command, a, b){
    switch(command){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a & b;
        default:
            throw Error('wrong command!');
    }
}
calculator('+', 1, 2);
calculator('-', 1, 2);
calculator('*', 1, 2);
calculator('/', 1, 2);
calculator('%', 1, 2);
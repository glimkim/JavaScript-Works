'use strict';

//Promies is a Javascript object for asynchronous operation.
//State : pending -> fulfilled or rejected
//Producer vs Consumer 

//1.Producer 
//When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...'); 
    setTimeout(() => {
        resolve('limi');
        reject(new Error('no network'));
    }, 2000);
});
//프로미스를 만드는 순간 내부 콜백함수가 실행됨 -> 네트워크 바로 연결됨

//2. Consumers : then, catch, finally
promise
    .then(value => {//프로미스가 정상적으로 수행이 되면         
        //resolve로 전달된 값이 value로 들어옴
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally promise is executed.');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3 )
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

//4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    })
const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`, 1000));
    });


getHen()
.then(getEgg) // = .then(hen => getEgg(hen))
.catch(error => {
    return '🍞';
})
.then(cook)
.then(console.log)
.catch(console.log)
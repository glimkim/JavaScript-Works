'use strict';

//Javascript is synchronous
//Execute the code block in order after hoisting
//hoisting : var, function declaration comes first!!
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//Asynchrounous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if((id === 'limi' && password === 'dream')||(id === 'coder' && password === 'best')){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'limi'){
                onSuccess({name: 'limi', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, (user) => {
    userStorage.getRoles(user, userWithRole => {
    alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role.`);
    }, error => {});
}, (error) => {
    console.log(error);
});
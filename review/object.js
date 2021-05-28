'use strict';
//Object
//one of the JS' data type
//a collection of related data and/or functionality
//Nearly all objects in JS are instances of Object
//Object = {key:value};
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const lim = {name:'lim', age:27}
print(lim);

lim.hasJob = true;
console.log(lim.hasJob);
delete lim.hasJob;
console.log(lim.hasJob);

//2. Computed properties
//key should be always string
console.log(lim.name);
console.log(lim['name']);
lim['hasJob'] = true;
console.log(lim.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(lim, 'name');
printValue(lim, 'age');

//3. Property value shorthand
const person1 = {name: 'bob', age:2}
const person2 = {name: 'steve', age:2}
const person3 = {name: 'dave', age:2}
const person4 = new Person('lim', 27);
console.log(person4);
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//5. in operator: property exsitence check (key in obj)
console.log('name' in lim);
console.log('age' in lim);
console.log('random' in lim);
console.log(lim.random);

//6. for ..in vs for ..of
console.clear();
for(let key in lim){
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 3, 4];
for(let i of array){
    console.log(i);
}

//7. cloning
//Object.assign(dest, [obj1, obj2, obj3, ...]);
const user = {name : 'lim', age: 27};
const user2 = user;
user2.name = 'coder';
console.log(user.name); //

//old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2); //overwarp the values
console.log(mixed.color);
console.log(mixed.size);

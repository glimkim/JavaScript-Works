'use strict';

//Array 

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array
//print all fruits
for(let i of fruits){
    console.log(i);
}
fruits.forEach((fruit, index, array) => console.log(`${fruit} of ${array} number ${index + 1}`));
 
//4. Addition, deletion, copy
//add an item to the end
//push: add an item to the end
fruits.push('🍓', '🍊');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍒', '🍋');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift and unshift is much much slower
//rmove an item by index positon
fruits.push('🍑');
console.log(fruits);
//splice
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍈');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍅', '🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍈'));
console.log(fruits.indexOf('🍅'));
console.log(fruits.indexOf('🥝')); //return -1 if there's none
//includes
console.log(fruits.includes('🍈'));
console.log(fruits.includes('🥝'));
//lastIndexof
fruits.push('🍑');
console.log(fruits);
console.log(fruits.indexOf('🍑')); //return first find
console.log(fruits.lastIndexOf('🍑')); //return last find

//6. more methods
//toString
console.log(fruits.toString());
//join
const num = [1, 2, 3, 4];
console.log(num.join()); // 1, 2, 3, 4
console.log(num.join('')); // 1234
console.log(num.join('-')); // 1-2-3-4
//slice
console.log(num.slice(1, -1)); //negative index can be used to indicate an offset from the end of the array.
//every
console.log(num.every(val => val > 0)); //true
console.log(num.every(val => val > 2)); //false
//some
console.log(num.some(val => val > 0)); //true
console.log(num.some(val => val > 2)); //true
//reduce
const reducer = (ac, val) => ac + val;
const reducer1 = (ac, val) => ac * val;
console.log(fruits.reduce(reducer));
console.log(num.reduce(reducer1));
//reduceRight
const doubleArr = [[0,1], [2, 3], [4, 5]];
const reducer2 = (ac, val) => ac.concat(val);
console.log(doubleArr.reduceRight(reducer2));
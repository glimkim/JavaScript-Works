'use strict';
//JSON
//simplest data interchange format
//lightweight text-based structure
//easy to read
//key-value pairs
//used for serialization and transmission of data between the network the network connection
//independent programming language and platform

//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);

    }
}
json = JSON.stringify(rabbit);
console.log(json); //function is not included

json = JSON.stringify(rabbit, ["name"]); //원하는 property만 골라서 배열에 넣으면 그 property반 전환
console.log(json); 

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name'?'lim':value;
});
console.log(json); 

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key==='birthDate'?new Date(value):value; /* 문자 날짜 데이터를 다시 date 객체로 변형 */
}); 
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate)

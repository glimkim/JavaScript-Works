'use stric';
//Object-oriented programming
// class
// - template
// declare once
// no data in

//object 
// instance of a class
// created many times
// data in

//JS classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class delarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //method
    speak(){
        console.log(`I am ${this.name}, Hello!`);
    }
}

const lim = new Person('lim', 27);
console.log(lim);
lim.speak();

//2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        /* if(value < 0){
            throw Error('age can not be negative');
        } */
        this._age = value<0?0:value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fields (public, private)
// Too soon! to use on broswers
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and method
// Too soon to use as well
class Article {
    static publisher = 'Lim the coder';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher); //memory use reduced - able to call only from original Class
Article.printPublisher();

//5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw(); // get parent's draw method
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height) /2;
    }
    toString(){
        return `a ${this.color} triangle`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'green');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());
console.log(triangle.toString());

//6. Class checking: intance Of
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


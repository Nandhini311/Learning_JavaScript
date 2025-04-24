//Object literal
let empty = {};
let dog = { name: 'Woofy' };
let welcomeMessage = {
    sayHi: function(text){
        console.log(text)
    } //method if it’s inside an object.
}

//object with methods and properties.
let person_object = {
    firstname: 'Clyde',
    age: 35,
    message: function(){
    console.log(`${this.firstname} is ${this.age} years old`)
}}

//Creating objects using constructor.
//(creating the object via method)
//1. Define the object
//2. Call it with the new keyword

function Motorbike(name, color){
    this.name = name;
    this.color = color; }
//calling the object.
let myBike = new Motorbike('Yamaha', 'Black');
console.log(typeof(myBike))

//another way – using inbuilt javascript object constructor.
let person = new Object();
console.log(typeof(person));
person.name = 'Wally';
person.age = 35;
person;  //this object will now have properties name, age

/*Main difference between these two are
object constructor you can create multiple instances of that object using the new keyword. However, in case of Literal notation -> it delivers only as a single object.
in case of object literals – if you want to pass input as arguments. you can use init.*/

let website = {
    init: function(url) {
        this.url = url;
    },
    showUrl: function (){
        console.log(this.url);
    }
};

website.init("www.google.come");
website.showUrl();


//constructor function - function with which you will be initializing values for properties.
function Person(fname, lname){
    this.fname = fname;
    this.lname = lname;
    this.getName = function (){
        console.log(`{this.fname} ${this.lname}`);
    }

    let user1 = new Person('Nandhini', 'Jeyanthi');
    user1.getName();
    //everytime you use new keywords, memory gets used up.
    //even if user1 wasn't using getName, getName function would have still been created in this.

    Person.prototype.age = 35; //is stored only once in memory.? how? whai?
    console.log(user1.age);
}

//class syntax.
//class is kind of a function in javascript.
class Person{
    constructor(name) {
        this.name = name;
    }
    //any method you declare is automatically put in the prototype.
    greeting(){
        console.log(this.name);
    }
}

let user2 = new Person('Nandhini');
user2.greeting();

console.log(typeof(Person));
//function -> needs to be a constructor function.

console.log(Person === Person.prototype.constructor)
console.log(Object.getPropertyNames(Person.prototype));
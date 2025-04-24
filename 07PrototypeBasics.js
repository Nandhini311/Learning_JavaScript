function Animal() {
    this.makeSound = function(sound) {
        console.log("Animal makes " + sound + " sounds");
    };
}
//Animal is the function / construction for object creation.

let dog = new Animal();
dog.makeSound("bark");

//now dog is an instance of Animal, Animal.prototype is it's prototype.
//prototype is nothing but a template which can be used by other objects while creating any instances.
/*The prototype (Animal.prototype) is an object that serves as a blueprint for shared properties and methods that
instances created by the Animal constructor can inherit*/

dog.wagTail = function(value){
    if(value === true){
        console.log("Doggie wags the tail")
    }
    else{
        console.log("Doggie is sad, so not wagging the tail")
    }
}

let cat = new Animal();
cat.makeSound("Meowww");
//will cat be able to access the wagTail method? No, cuz it's not a method of Animal but only Animal.
//cat.wagTail(false);

//All prototype bydefault inherits from Object.prototype.



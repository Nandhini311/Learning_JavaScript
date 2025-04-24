dogProto = {
    woof: function(){
        console.log(this.sound);
    }
};

//dogProto an object which has woof function,
//which prints the sound in the console.

let dog = Object.create(dogProto);
//to create an object using Object.create(Prototype)
//prototype must be sent as parameter.

dog.sound = 'woof';
dog.woof();

let dog2 = Object.create(dogProto, {
    'sound': {
        value: 'bow wow'
    }
});

//here also we are creating an object by sending dogProto as the prototype
//however, the sound is being created as an additional property of dog2.

/*here also we are creating an object by sending dogProto as the prototype
however, the sound is being created as an additional property of dog2. */


//example 2
const personPrototype = {
    greet: function () {
    console.log(`Hi, I'm ${this.name}`);
 }
}
//Object.create(proto, propertiesObject)
const person1 = Object.create(personPrototype, {
    name: {value: 'Charlie'},
    age: {value: 35}
});

const person2 = Object.create(personPrototype);
person2.name = 'Nandhini';
person2.greet();



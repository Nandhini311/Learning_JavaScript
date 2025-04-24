let a = []; //empty array
let animals = ['dog', 'cat', 'mouse'];
let heterogenousArray = [1, 2, 3, 'Apples', 'Banana', {'father of the jungle': 'lion', 'fastest': 'cheetah'}, [8,9,10]]
//[8,9,10] is a nested array.

//array constructors
let house = new Array('3 bedroom', 'red', '3 bathrooms');
let numbers = new Array (5, 10);

//using constructors can sometimes give wierd answers.
let figures = new Array(7);
//this will give out an empty array with 7 empty spaces.

let ShoppingList = ['Milk', 'Bread', 'Beer'];
console.log(shoppingList[0]);

ShoppingList[2] = 'Fruit Juice';
console.log(shoppingList.length); //gives the length of the array.

shoppingList.push('Toilet Paper');
shoppingList.pop(); //to remove the last element from the array.

//iterator method
let animals = ["dog", "cat"];
const animalIterator = animals.map(function (animalType){
    console.log(`We are dealing with a ${animalType}`)
});
//callback function is something that gets executred after another function has finished executing.
//so map function takes a callback function and executes it for each element in the given array.
//another example

let numbers = [1, 2, 3, 4, 5, 6];
let doublerNumbers = numbers.map(function (number){
    return number*number;
})

//doesn't mutate the array, but creates a new array "doubleNumbers" and gives the values.

//Looping through the arrays.
let hi = function(name){
    return `Welcome, ${name}`;
};

let memberList = ["Tom", "Jerry"];
memberList.push("John");
memberList.push("Wally");

//greeting all members
//traditionl old-school for loop
for(let i = 0; i< memberList.length; i++){
    let greeting = hi(memberList[i]);
    console.log(greeting);
}

//for-in loop
for(const name in memberList) {
    // the for-in loop is designed to go over the enumerable properties of an object including both own properties and the
    //ones inherited from the prototype, therefore the 'if' condition is to ensure that the loop is going only through the own properties.
    if (memberList.hasOwnProperty(name)) {
    //memberList.hasOwnProperty checks if name its own property of this array.
    let greeting = hi(name);
    console.log(greeting);
   }
}

//for of Loop
for(const name of memberList){
    let greeting = hi(name);
    console.log(greeting);
}

//Looping through Objects.
let fruit = {
    banana: 12,
    carrots: 2,
    mangos: 7
};

//method 1: object.keys
let fruitKeys = Object.keys(fruit);

//method2: object.values.
let fruitValues = Object.values(fruit)

//method3: object.entries
let fruitPair = Object.entries(fruit);

//now looping through
for(const fruit of fruitPair){
    console.log(fruit);
    //loops through each key-value pair.
}

for(const [fruitKey, fruitValue] of fruitPair){
    console.log(`you need to buy ${fruitValue} ${fruitKey}`);
}
//function expression
let cat = function(){
    let sound = "Meeeeow";
    console.log(sound);
}

cat();

//both are essentially the same.
//Declaration - global scope, the function will be available throughout the code.
//so if we try to use this dog function before it's declared, it would still work, as once it's declared
//it's available throughout the code - after or before.
dog(); //will work just fine.

//function declaration
function dog(){
    let sound = "woof";
    console.log(sound);
}

//whereas function expressions are only available and usable after it's defined.

//***arrow function - concise way to write the functions***
let horse = (name) => {
    let sound = "neighhh";
    console.log(`${name} makes ${sound}`);
}

//if you have no parameters, you can
let greeting = () => { console.log("Say Hi")};

//if you have only one parameter
let greeting = name => {console.log(`Say Hi to ${name}`)};

//you don't even have to mention the parameter, when you are just returning a value.
let getSum = (num1, num2) => { return num1+num2; };

//SetInterval
setInterval(myTimer, 1000);
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

clearInterval();//setInterval runs until there is clearInterval()

//Arrow functions do not have 'this' bound.
//this object is usually associated to the object that is calling the function or constructor.
//however, in case of arrow function - This is inherited from the place where the function is created and not where it is called.

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; //this here refers to the Person object
        console.log(this.age);}, 10000);
}

new Person();
//will have the 'this' object associated,
// usually it would otherwise be the window object


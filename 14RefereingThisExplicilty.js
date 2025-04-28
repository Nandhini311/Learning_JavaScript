function add(a, b){
    console.log(a+b+ this.c + this.d );
    //will result in NaN
    //this.c and this.d will be undefined + adding a number with it will result in NaN.
}

add(1,2);

let obj = {
    c: 10, //c = 10  is assignment, used in normal JS,c:10 is property definition, used inside object literals {}
    d: 20
};

add.call(obj, 1, 2);
//call method here is used to make 'this' refer to the c and d value in the obj object.

add.apply(obj, [1, 2]);
//same effect as call method but gets arguments as an array.

//USING BIND METHOD
let user = {
    balance : 0,
    show: function (fname, lname, age){
        console.log(`${fname} ${lname} is ${age} old and has a balance ${this.balance}`);
    }
};

let topUpBalance = {
    balance: 100
};

user.show("John", "Doe", 37);
//now what if we want the balance to be the topUp Balance
//we can use the call method
user.show.call(topUpBalance, "John", "Doe", 35);
//we can use bind when we don't know the arguments beforehand.

let bindUser = user.show.bind(topUpBalance);
// after some pieces of code, you then get to know the user values
bindUser("John", "Doe", 35);
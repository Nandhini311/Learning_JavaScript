//food object
let food = {
     init: function (type)
     {
         this.type = type
     },
     recipe: function (){
         console.log(`This is a receipe for ${this.type}`)
     }
}

//now creating
let donut = Object.create(food);
//donut.prototype will inherit from food.prototype.


donut.init('Donut');
donut.recipe();

let orange = Object.create(food);
orange.init('Orange');
orange.recipe();

/* personal question, how is this better or different from constructor function?
may be because prototype allows copy the template and add your customised properties if needed.
also incaseof constructor function memory gets allocated for the properties and method everytime even if it
is not being used. The recipe method is not allocated new memory every time new object is created,
instead the recipe function from the food gets inherited by the new object. Thus, saving memory */

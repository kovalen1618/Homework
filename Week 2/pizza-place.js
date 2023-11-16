// Declare and initialize pizza place and number of offered toppings
let pizzaPlace = "Luna Deep Dish";
let numberOfToppings = 10;

// Print above values and their types
console.log(pizzaPlace);
console.log(typeof pizzaPlace);

console.log(numberOfToppings);
console.log(typeof numberOfToppings);

// Template literal about Luna Deep Dish
console.log(
  `${pizzaPlace} offers an out-of-this-world ${numberOfToppings} different types of toppings!`
);

// Conditional for toppings
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// BONUS: Loop to print all even numbers from 1 to number of toppings
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

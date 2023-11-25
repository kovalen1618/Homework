// List all the toppings in a grammatically correct format
function listToppings(listedToppings, toppings) {
  // Runs through ...toppings array and creates grammatically correct message
  for (let i = 0; i < toppings.length; i++) {
    // Add commas and whitespace after each topping as long as it's not
    // the last topping and as long as there are more than 2 toppings
    if (i < toppings.length - 1 && toppings.length > 2) {
      listedToppings = listedToppings + toppings[i] + ", ";
    } else if (toppings.length === 2 && listedToppings != "") {
      // Adds an " and " between the only 2 toppings
      listedToppings = listedToppings + " and " + toppings[i];
    } else if (i === toppings.length - 1 && toppings.length > 2) {
      // Adds an "and " before the last topping
      listedToppings = listedToppings + "and " + toppings[i];
    } else {
      // Adds a singular topping when there is only 1 topping
      listedToppings = listedToppings + toppings[i];
    }
  }

  return listedToppings;
}

// Default global pizzaToppings variable of pizza place
const pizzaToppings = ["Sausage", "Pineapple", "Mushrooms", "Pepperoni"];

// Greeting function
function greetCustomer() {
  let listedToppings = "";
  // Invoke listToppings to list out and grammatically orient toppings
  listedToppings = listToppings(listedToppings, pizzaToppings);

  let greetingMessage = `Welcome to Luna Deep Dish, our toppings are: ${listedToppings}`;

  return greetingMessage;
}

console.log(greetCustomer());

// Order function that takes in a rest parameter of toppings
function getPizzaOrder(size, crust, ...toppings) {
  // Check to see if order contains a topping that doesn't exit. If it does, cancel the order
  for (let topping of toppings) {
    if (!pizzaToppings.includes(topping)) {
      console.log(
        `Sorry, we don't have ${topping}. Please order again from the available toppings.`
      );

      return;
    }
  }

  let listedToppings = "";
  listedToppings = listToppings(listedToppings, toppings);

  let orderMessage = "";

  // If no toppings, default to cheese
  if (toppings.length === 0) {
    orderMessage = `"One ${size} ${crust} crust cheese pizza coming up!"`;
  } else {
    orderMessage = `One ${size} ${crust} crust pizza with ${listedToppings} ...coming up!`;
  }

  // Print orderMessage
  console.log(orderMessage);

  // Return pizzaOrderArray
  return [size, crust, toppings];
}

// Invoke getPizzaOrder with 4 values as an argument
let pizzaOrder = getPizzaOrder(
  "large",
  "thin",
  "Sausage",
  "Pineapple",
  "Mushrooms",
  "Pepperoni"
);

function preparePizza(pizzaOrderArray) {
  console.log("...Cooking Pizza...");

  // Create object literal populated with size, crust, and toppings
  const pizzaOrderObject = {
    size: pizzaOrderArray[0],
    crust: pizzaOrderArray[1],
    toppings: pizzaOrderArray[2]
  };

  return pizzaOrderObject;
}

console.log(preparePizza(pizzaOrder));
const pizzaObject = preparePizza(pizzaOrder);

// Loop through object
function servePizza(pizzaOrderObject) {
  let toppings = pizzaOrderObject.toppings;
  let listedToppings = "";
  listedToppings = listToppings(listedToppings, toppings);

  let servingMessage = "";

  // If no toppings, default to cheese
  if (pizzaOrderObject.toppings.length === 0) {
    servingMessage = `Order up! Here's your ${pizzaOrderObject.size} ${pizzaOrderObject.crust} pizza with cheese... Enjoy!`;
  } else {
    servingMessage = `Order up! Here's your ${pizzaOrderObject.size} ${pizzaOrderObject.crust} pizza with ${listedToppings}... Enjoy!`;
  }

  console.log(servingMessage);

  return pizzaOrderObject;
}

servePizza(pizzaObject);

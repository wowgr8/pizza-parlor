// Specs

Describe: Pizza()

Test: "It should return an Pizza object with three properties; topping, size, and price."
Code: let smallPepperoniPizza = new Pizza("Pepperoni", "Small", 10);
Expected Output: Pizza {topping: 'Pepperoni', size: 'Small', price: 10} 


Describe: Pizza.prototype.totalPrice()

Test: "It should return price of 10 if it's a small pizza"
Code: smallPepperoniPizza.price()
Expected Output: 10

Test: "It should add 1 to the price if Black Olives and Red Onions are added"
Code: smallPepperoniPizza = ["BlackOlives", "Red Onions"];
smallPepperoniPizza.totalPrice();
ExpectedOutput: 12
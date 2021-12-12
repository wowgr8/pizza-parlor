// Specs

Describe: Pizza()

Test: "It should return an Pizza object with three properties; topping, size, and price."
Code: let smallPepperoniPizza = new Pizza("Pepperoni", "Small", 10);
Expected Output: Pizza {topping: 'Pepperoni', size: 'Small', price: 10} 


Describe: Pizza.prototype.totalPrice()

Test: "It should return price of 10 if it's a small pizza"
Code: smallPepperoniPizza.price()
Expected Output: 10


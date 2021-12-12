# Pizza Parlor #
_By Cesar Lopez_

## Description ##
This website will return the total price of a pizze depending on the size and topping you select.

## Technologies Used ##

* JavaScript
* JavaScript Dev Tools
* HTML
* CSS
* Github
* Bootstrap

## Setup Instructions ##

1. In your terminal, navigate to the directory you desire to download these files into.

2. Copy and enter this command:

```
  git clone https://github.com/wowgr8/pizza-parlor
```

3. Enter the following command:

```
  open index.html
```
## Known Bugs ##

* None

## License ##

[MIT](https://opensource.org/license/MIT)

## Specs ##

<details>
<summary>Click here to see specs</summary>

**Describe: Pizza()**

```
Test: "It should return an Pizza object with three properties; topping, size, and price."
Code: let smallPepperoniPizza = new Pizza("Pepperoni", "Small", 10);
Expected Output: Pizza {topping: 'Pepperoni', size: 'Small', price: 10} 
```

**Describe: Pizza.prototype.totalPrice()**

```
Test: "It should return price of 10 if it's a small pizza"
Code: smallPepperoniPizza.price()
Expected Output: 10
```

```
Test: "It should add 1 to the price if Black Olives and Red Onions are added"
Code: smallPepperoniPizza = ["BlackOlives", "Red Onions"];
smallPepperoniPizza.totalPrice();
ExpectedOutput: 12
```
</details>

## Contact Info ##
* Cesar Lopez <Lopez.cesar.aug@gmail.com>
* Github: https://github.com/wowgr8
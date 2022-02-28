// Business Logic

// Object constructor for a pizza order
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
} 

Pizza.prototype.totalPrice = function() {
  if (this.size === "Large"){
    this.price += 15;
  }
  else if (this.size === "Medium"){
    this.price += 12;
  }
  else if (this.size === "Small"){
    this.price += 10;
  }

  let toppingPrice = 0
  this.toppings.forEach(function(toppings){
    if (toppings === "Pepperoni") {
      toppingPrice += 2;
    }
    if (toppings === "Black Olives") {
      toppingPrice += 1;
    }
    if (toppings === "Red Onion") {
      toppingPrice += 1;
    }
  })
  this.price += toppingPrice

  return this.price
}

// UI Logic

$(document).ready(function() {
  $("#master-form").submit(function(event) {
    event.preventDefault();
    // Get pizza size
    const selectedSize = $(".sizeOption:checked").val();
    
    // Get list of pizza toppings
    const selectedIngredients = function() {
      let ingredientArray = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        ingredientArray.push(this.value);
      }) 
      return ingredientArray
    }
    const selectedIngredientArray = selectedIngredients();
    selectedIngredientArray
    
    // Create a pizza order object
    const pizzaOrder = new Pizza(selectedSize, selectedIngredientArray);
    
    // Calculate the pizza price
    pizzaOrder.totalPrice();

    // Display the pizza price
    $("#total").text(pizzaOrder.price)
    $("#hiddenPrice").show();  
  })
})
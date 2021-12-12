//Business Logic

function Pizza(size, topping ) {
  this.topping = topping;
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

  this.topping.forEach(addToppingPrice); 
  function addToppingPrice(topping) {
    if (topping === "Pepperoni") {
      this.price += 2;
    }
    if (topping === "Black Olives") {
      this.price += 1;
    }
    if (topping === "Red Onion") {
      this.price += 1;
    }

  }
  return this.price
}

let i = 0


$(document).ready(function() {
  $("#master-form").submit(function(event) {
    event.preventDefault();
    const selectedSize = $(".sizeOption:checked").val();
    const selectedIngredients = function() {
      let ingredientArray = [];
      $(".toppingClass:checked").each(function(){
        ingredientArray[i++] = $(this).val();
      }) 
      return ingredientArray
    }
    const selectedIngredientArray = selectedIngredients();
    // console.log(selectedIngredientArray)
    // console.log($(".toppingClass:checked"))
    let pizzaOrder = new Pizza(selectedSize, selectedIngredientArray);
    // console.log(pizzaOrder);
    pizzaOrder.totalPrice();
    $("#total").text(pizzaOrder.price)
    $("#hiddenPrice").show();  
  })
})
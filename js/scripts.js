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

}

let i = 0


$(document).ready(function() {
  $("#master-form").submit(function(event) {
    event.preventDefault();
    const selectedSize = $(".sizeOption:checked").val();

    let pizzaOrder = new Pizza(selectedSize);
    // console.log(pizzaOrder);
    pizzaOrder.totalPrice();
    $("#total").text(pizzaOrder.price)
    $("#hiddenPrice").show();  
  })
})
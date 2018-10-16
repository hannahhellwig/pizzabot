const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)
let orderName = prompt("Enter the name of the pizza you want to order today.", `${vegetarian}`)
 const checkOrderName = (pizzaName) => {
    if (pizzaName === vegetarian || pizzaName === hawaiian || pizzaName === pepperoni) {
      return true
    } else {
      return false
    }
}
   while(checkOrderName(orderName) === false){
    orderName = prompt("Sorry we don't recognise that pizza name.", `${vegetarian}`)
  }
   const orderQuantity = prompt(`How many of ${orderName} do you want?`)
   const totalCost = () => {
    return orderQuantity * pizzaPrice
  }
   const orderTotal = totalCost()
   const getCookingTime = (theOrderQuantity) => {
    let cookingTime = ""
    if (theOrderQuantity > 6) {
      cookingTime = "it will take 20 minutes."
    } else if (theOrderQuantity > 3) {
      cookingTime = "it will take 15 minutes."
    } else {
      cookingTime = "it will take 10 minutes."
    }
    return cookingTime
  }
   const cookingTime = getCookingTime(orderQuantity)
   alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and ${cookingTime}`)

//items this is the list 
let items = [
    {id: "gluten-free", price: 5.25},
    {id: "whole-wheat", price: 4.50},
    {id: "buttermilk", price: 4.50},
    {id: "blueberries", price: 0.50},
    {id: "chocolate-chip", price: 0.50},
    {id: "banana", price: 0.50},
    {id: "maple-syrup", price: 0.50},
    {id: "butter", price: 0.50},
    {id: "whipped-cream", price: 0.75},
    {id: "eggs", price: 2.00},
    {id: "bacon", price: 2.50},
    {id: "sausage", price: 2.00},
]

//total price 
function calculateTotalPrice(items) {
    let totalPrice = 0
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let checkbox = document.getElementById(item.id)
        if (checkbox && checkbox.checked) {
            totalPrice += item.price;
        }
    }
return totalPrice; 
}
    


//calculate button 
document.getElementById("btnCalc").addEventListener("click", function(){
let totalPrice = calculateTotalPrice(items);
document.getElementById("final-cost").textContent = totalPrice.toFixed(2);
}); 
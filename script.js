//list of all the menu items and their prices 
const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
document.body.style.backgroundColor = savedColor;
}

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

//selected items
function getSelectedItems(items) {
    let selectedItems = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let checkbox = document.getElementById(item.id)
        if (checkbox && checkbox.checked) {
            selectedItems.push(item);
        }
    }
return selectedItems; 
}
    
//calculate total price
function calculateTotalPrice(items) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }
  return totalPrice;
}

//calculate button, causes selected items to be displayed and total price to be calculated and displayed
document.getElementById("btnCalc").addEventListener("click", function(){
  let selected = getSelectedItems(items);
  let total = calculateTotalPrice(selected);
  document.getElementById("final-cost").textContent = total.toFixed(2);
  document.getElementById("selected-items").textContent = selected.map(item => item.id).join(", ");
});
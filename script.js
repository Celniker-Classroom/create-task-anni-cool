// Use the selected theme from intro page to swap the full stylesheet.
const selectedTheme = localStorage.getItem("selectedTheme");
const themeStylesheet = document.getElementById("theme-stylesheet");

if (themeStylesheet) {
  const themeFileMap = {
    blue: "styles-blue.css",
    pink: "styles-pink.css",
    green: "styles-green.css"
  };

  const chosenThemeFile = themeFileMap[selectedTheme] || "styles-blue.css";
  themeStylesheet.setAttribute("href", chosenThemeFile);
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
const calculateButton = document.getElementById("btnCalc");
if (calculateButton) {
  calculateButton.addEventListener("click", function(){
    let selected = getSelectedItems(items);
    let total = calculateTotalPrice(selected);
    localStorage.setItem("orderTotal", total.toFixed(2));
    localStorage.setItem("orderItems", selected.map(item => item.id).join(", "));
    window.location.href = "exit.html";
  });
}

const orderNameTarget = document.getElementById("order-name");
if (orderNameTarget) {
  const storedName = localStorage.getItem("customerName") || "Guest";
  orderNameTarget.textContent = storedName;
}

const exitCost = document.getElementById("final-cost");
if (exitCost && !document.getElementById("btnCalc")) {
  exitCost.textContent = localStorage.getItem("orderTotal") || "0.00";
}

const exitItems = document.getElementById("selected-items");
if (exitItems && !document.getElementById("btnCalc")) {
  exitItems.textContent = localStorage.getItem("orderItems") || "";
}

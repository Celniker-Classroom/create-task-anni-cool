// Use the selected theme from intro page to swap the full stylesheet.
// I created the theme selection code with assistance from Copilot 
const selectedTheme = localStorage.getItem("selectedTheme");
const themeStylesheet = document.getElementById("theme-stylesheet");

// connects theme to the various style sheets. This was also created with the help of copilot. It helped me understand how to map theme names to their stylesheet.
const themeFileMap = {
  blue: "styles-blue.css",
  pink: "styles-pink.css",
  green: "styles-green.css"
};
const chosenThemeFile = themeFileMap[selectedTheme] || "styles-blue.css";
themeStylesheet.setAttribute("href", chosenThemeFile);

// list of the items
let items = [
  { id: "gluten-free", price: 5.25 },
  { id: "whole-wheat", price: 4.50 },
  { id: "buttermilk", price: 4.50 },
  { id: "blueberries", price: 0.50 },
  { id: "chocolate-chip", price: 0.50 },
  { id: "banana", price: 0.50 },
  { id: "maple-syrup", price: 0.50 },
  { id: "butter", price: 0.50 },
  { id: "whipped-cream", price: 0.75 },
  { id: "eggs", price: 2.00 },
  { id: "bacon", price: 2.50 },
  { id: "sausage", price: 2.00 }
];

// selected items
function getSelectedItems(items) {
  let selectedItems = [];
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let checkbox = document.getElementById(item.id);
    // copilot helped me understand why to use (checkbox && checkbox.checked) instead of just (checkbox.checked)
    if (checkbox && checkbox.checked) {
      selectedItems.push(item);
    }
  }
  return selectedItems;
}

// calculate total price
function calculateTotalPrice(items) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }
  return totalPrice;
}

// calculate button, causes selected items to be displayed and total price to be calculated and displayed
// Copilot was used to help me understand how to stoew the data
const calculateButton = document.getElementById("btnCalc");
const orderError = document.getElementById("order-error");
if (calculateButton) {
  calculateButton.addEventListener("click", function () {
    let selected = getSelectedItems(items);
    if (selected.length === 0) {
      if (orderError) {
        orderError.hidden = false;
      }
      return;
    }
    if (orderError) {
      orderError.hidden = true;
    }
    let total = calculateTotalPrice(selected);

    // I used copilot to help me understand an error with waitMessage and to use localStorage
    const waitMessage = "Your order will be ready in approximately " + Math.ceil(total * 2 / 3) + " minutes.";
    localStorage.setItem("orderTotal", total.toFixed(2));
    localStorage.setItem("orderItems", selected.map(item => item.id).join(", "));
    localStorage.setItem("waitMessage", waitMessage);
    window.location.href = "exit.html";
  });
}
// order name (stores)
const orderNameTarget = document.getElementById("order-name");
if (orderNameTarget) {
  const storedName = localStorage.getItem("customerName") || "Guest";
  orderNameTarget.textContent = storedName;
}
// wait message
const waitMessageTarget = document.getElementById("wait-message");
if (waitMessageTarget && !document.getElementById("btnCalc")) {
  waitMessageTarget.textContent = localStorage.getItem("waitMessage") || "";
}
// cost display
const exitCost = document.getElementById("final-cost");
if (exitCost && !document.getElementById("btnCalc")) {
  exitCost.textContent = localStorage.getItem("orderTotal") || "0.00";
}
const exitItems = document.getElementById("selected-items");
if (exitItems && !document.getElementById("btnCalc")) {
  exitItems.textContent = localStorage.getItem("orderItems") || "";
}
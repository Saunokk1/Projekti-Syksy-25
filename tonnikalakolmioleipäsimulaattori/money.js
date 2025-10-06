console.log('money.js loaded!')

let cash = 10
let price = 100
let coins = 0
let leipa = 0

document.getElementById('hmcash').innerHTML = cash
document.getElementById('hmleipa').innerHTML = leipa

function updateUI() {
      document.getElementById('price').innerHTML = price
      document.getElementById('cash').innerHTML = cash
      document.getElementById('coins').innerHTML = coins
    }

function buy() {
      if (cash >= price) {
        cash -= price;
        coins += 1;
        log("Bought 1 coin for $" + price.toFixed(2));
        updateUI();
      }
    }

function sell() {
      if (coins >= 1) {
        coins -= 1;
        cash += price;
        log("Sold 1 coin for $" + price.toFixed(2));
        updateUI();
      }
    }

function updatePrice() {
      let change = (Math.random() - 0.5) * 10;
      price = Math.max(1, price + change);
      updateUI();
    }
    setInterval(updatePrice, 1000);
    updateUI();
var dealerSum = 0;
var yourSum = 0;
var dealerAceCount = 0;
var yourAceCount = 0;
var hidden;
var deck;
var canHit = true;

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
    
    document.getElementById("uuspeli").onclick = function() {
        location.reload();
    };
};

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function startGame() {
   
    dealerSum = 0;
    yourSum = 0;
    dealerAceCount = 0;
    yourAceCount = 0;
    canHit = true;
    
    document.getElementById("dealer-cards").innerHTML = "";
    document.getElementById("your-cards").innerHTML = "";
    document.getElementById("results").innerText = "";
    document.getElementById("dealer-sum").innerText = "";
    document.getElementById("your-sum").innerText = "";

    
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);

    let hiddenImg = document.createElement("img");
    hiddenImg.src = "cards/BACK.png";
    hiddenImg.id = "hidden";
    document.getElementById("dealer-cards").append(hiddenImg);

    
    let dealerCard = deck.pop();
    let dealerCardImg = document.createElement("img");
    dealerCardImg.src = "cards/" + dealerCard + ".png";
    dealerSum += getValue(dealerCard);
    dealerAceCount += checkAce(dealerCard);
    document.getElementById("dealer-cards").append(dealerCardImg);

   
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }

  
    document.getElementById("your-sum").innerText = reduceAce(yourSum, yourAceCount);

   
    let playerTotal = reduceAce(yourSum, yourAceCount);
    if (playerTotal === 21) {
        stay(); 
    }

    
    let hitBtn = document.getElementById("hit");
    let stayBtn = document.getElementById("stay");
    
    hitBtn.replaceWith(hitBtn.cloneNode(true));
    stayBtn.replaceWith(stayBtn.cloneNode(true));
    
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    let playerTotal = reduceAce(yourSum, yourAceCount);
    document.getElementById("your-sum").innerText = playerTotal;

    if (playerTotal > 21) {
        canHit = false;
        stay(); 
    }
}

function stay() {
    canHit = false;
    
    
    document.getElementById("hidden").src = "cards/" + hidden + ".png";

   
    while (reduceAce(dealerSum, dealerAceCount) < 17) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }

    
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    
    let message = "";
    if (yourSum > 21) {
        message = "Sinä hävisit!";
    } else if (dealerSum > 21) {
        message = "Sinä voitit!";
    } else if (yourSum === dealerSum) {
        message = "Tasapeli!";
    } else if (yourSum > dealerSum) {
        message = "Sinä voitit!";
    } else {
        message = "Sinä hävisit!";
    }

    
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
}

function getValue(card) {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value === "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    return card[0] === "A" ? 1 : 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}



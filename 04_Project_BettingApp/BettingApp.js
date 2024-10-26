let bets = document.querySelector(".bets");
let bet1 = document.querySelector(".bet1");
let bet2 = document.querySelector(".bet2");
let bet3 = document.querySelector(".bet3");
let totalMoney = document.querySelector("#totalMoney");
let Wallet = document.querySelector("#Wallet");
let totalMoneyContainer = document.querySelector(".totalMoneyContainer");
let totalEarning = document.querySelector(".totalEarning");
let totalLoss = document.querySelector(".totalLoss");
let cancelButton = document.querySelector("#cancelButton");
let deposit = 100;

Wallet.innerHTML += `${deposit}$`
totalLoss.innerHTML = `${deposit - deposit}$`;
totalEarning.innerHTML = `${deposit - deposit}$`;
totalMoney.innerHTML = `${deposit}$`;
//              WALLET  / HOMEPAGE
function hide() {
    bets.style.display = "none";
    totalMoneyContainer.style.display = "block";
}
function show() {
    bets.style.display = "block";
    totalMoneyContainer.style.display = "none";
}

function yes(button) {
    const betDiv = button.parentElement;
    const betText = betDiv.querySelector("#betText");
    betText.innerHTML += `<h2>Your Opinion is yes <br> 10$ bet Placed</h2>`;
    deposit -= 10;
    Wallet.innerHTML = `Wallet:${deposit}$`;
    betDiv.querySelectorAll("button").forEach(btn => btn.style.display = "none");
}


function no(button) {
    const betDiv = button.parentElement;
    const betText = betDiv.querySelector("#betText");
    betText.innerHTML += `<h2>Your Opinion is No <br> 10$ bet Placed</h2>`;
    deposit -= 10;
    Wallet.innerHTML = `Wallet:${deposit}$`;
    betDiv.querySelectorAll("button").forEach(btn => btn.style.display = "none");
}

// function cancel(button){
//     const betDiv = button.parentElement;
//     const betText = betDiv.querySelector("#betText");
//     betText.innerHTML = `<button onclick="yes()">Yes 10$</button>
//                          <button onclick="no()">No 10$</button>
//     `;
//     deposit += 10;
//     totalMoney.innerHTML = `${deposit}$`;
// }

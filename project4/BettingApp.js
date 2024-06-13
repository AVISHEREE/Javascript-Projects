let bets = document.querySelector(".bets");
let bet1 = document.querySelector(".bet1");
let bet2 = document.querySelector(".bet2");
let bet3 = document.querySelector(".bet3");
let totalMoney = document.querySelector("#totalMoney");
let totalMoneyContainer = document.querySelector(".totalMoneyContainer");
let cancelButton = document.querySelector("#cancelButton");
let deposit = 100;

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

function yes(spot) {
    spot.innerHTML = `   <h4> Punjab to win match against delhi? </h4>
                         <h2>Your Opinion is yes <br> 10$ bett Placed</h2>
                         <button onclick="cancel()" id="cancelButton">cancel The Deal</button>`;
    deposit -= 10;
    totalMoney.innerHTML = `${deposit}$`;
}


function no(spot) {
    spot.innerHTML = `<h4> Punjab to win match against delhi?</h4>
                    <h2>Your Opinion is No <br> 10$ bett Placed</h2>
                    <button onclick="cancel()" id="cancelButton">cancel The Deal</button>`;
    deposit -= 10;
    totalMoney.innerHTML = `${deposit}$`;

}

cancel => cancel(soptYes,spotNo) ;{
    bet1.innerHTML = `
    <h4> Punjab to win match against delhi? </h4>
    <button onclick="yes()">Yes 10$</button>
    <button onclick="no()">No 10$</button>
    `;
    deposit += 10;
    totalMoney.innerHTML = `${deposit}$`;
}


//        BET1
function bet1Yes(){
    yes(bet1);
}
function bet1No(){
    no(bet1);
}

//        BET2

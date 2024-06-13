let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let refresh = document.getElementById("refresh");
let options = ["rock", "paper", "scissors"];

let randomgenerate = Math.floor(Math.random() * 3);

let rock = () => {
    if (options[randomgenerate] == "rock") {
        result.innerText = "match tie";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = " you win";
    }
    else {
        result.innerText = " you lose";
    }
    computerChoice.innerText = options[randomgenerate];
    refresh.innerHTML = `<a href="index.html">replay</a>`;
};

let paper = () => {
    if (options[randomgenerate] == "rock") {
        result.innerText = "you lose";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = " match tie";
    }
    else {
        result.innerText = " you win";
    }
    computerChoice.innerText = options[randomgenerate];
    refresh.innerHTML = `<a href="index.html">replay</a>`;
};


let scissors = () => {
    if (options[randomgenerate] == "rock") {
        result.innerText = "you lose";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = " you win";
    }
    else {
        result.innerText = "match tie";
    }
    computerChoice.innerText = options[randomgenerate];
    refresh.innerHTML = `<a href="index.html">replay</a>`;
};


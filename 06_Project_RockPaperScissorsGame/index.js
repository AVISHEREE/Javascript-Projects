let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let refresh = document.getElementById("refresh");
let options = ["rock", "paper", "scissors"];

let randomgenerate = Math.floor(Math.random() * 3);

let rock = (e) => {
    e.parentElement.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    result.style.display = "block";
    refresh.style.display = "block";
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
};

let paper = (e) => {
    e.parentElement.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    result.style.display = "block";
    refresh.style.display = "block";
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
};


let scissors = (e) => {
    e.parentElement.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    result.style.display = "block";
    refresh.style.display = "block";
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
};

function refreshGame() {
    location.reload(); // Reloads the page
}


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
        result.innerText = "🙃match tie";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = "🙌 You Win";
    }
    else {
        result.innerText = "🤞Better luck next time";
    }
    computerChoice.innerText = options[randomgenerate];
};

let paper = (e) => {
    e.parentElement.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    result.style.display = "block";
    refresh.style.display = "block";
    if (options[randomgenerate] == "rock") {
        result.innerText = "🙃match tie";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = "🙌 You Win";
    }
    else {
        result.innerText = "🤞Better luck next time";
    }
    computerChoice.innerText = options[randomgenerate];
};


let scissors = (e) => {
    e.parentElement.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    result.style.display = "block";
    refresh.style.display = "block";
    if (options[randomgenerate] == "rock") {
        result.innerText = "🙃match tie";
    }
    else if (options[randomgenerate] == "paper") {
        result.innerText = "🙌 You Win";
    }
    else {
        result.innerText = "🤞Better luck next time";
    }
    computerChoice.innerText = options[randomgenerate];
};

function refreshGame() {
    location.reload(); // Reloads the page
}


let answerQuiz1 = document.querySelector(".answerQuiz1");
let answerQuiz2 = document.querySelector(".answerQuiz2");
let answerQuiz3 = document.querySelector(".answerQuiz3");
let answerQuiz4 = document.querySelector(".answerQuiz4");
let quizOneCorrectOption = document.querySelector("#quizOneCorrectOption");
let quiztwoCorrectOption = document.querySelector("#quiztwoCorrectOption");
let quizThreeCorrectOption = document.querySelector("#quizThreeCorrectOption");
let quizFourCorrectOption = document.querySelector("#quizFourCorrectOption");

let btnQuiz1 = () => {
    if (quizOneCorrectOption.checked === true) {
        answerQuiz1.innerHTML = "right";
    }
    else {
        answerQuiz1.innerHTML = "wrong";
    }
}

let btnQuiz2 = () => {
    if (quiztwoCorrectOption.checked === true) {
        answerQuiz2.innerHTML = "right";
    }
    else {
        answerQuiz2.innerHTML = "wrong";
    }
}

let btnQuiz3 = () => {
    if (quizThreeCorrectOption.checked === true) {
        answerQuiz3.innerHTML = "right";
    }
    else {
        answerQuiz3.innerHTML = "wrong";
    }
}
let btnQuiz4 = () => {
    if (quizFourCorrectOption.checked === true) {
        answerQuiz4.innerHTML = "right";
    }
    else {
        answerQuiz4.innerHTML = "wrong";
    }
}
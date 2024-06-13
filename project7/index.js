let incomeInput = document.querySelector(".incomeInput");
let expensesInputClass = document.querySelector(".expensesInputClass");
let incomInputClass = document.querySelector(".incomInputClass");
let expensesAmount = document.querySelector(".expensesAmount");
let expensesType = document.querySelector(".expensesType");
let expensesDisplay = document.querySelector(".expensesDisplay");
let errorInput = document.querySelector(".errorInput");

let a = 1;
// let income = incomeInput.value;
// let temp = income;

let calculation = () =>{
    // let income = incomeInput.value
    // errorInput.textContent = `your total income is ${income}`;
    expensesInputClass.style.display = "block";
    incomInputClass.style.display = "none";
};

let expensesAdd = () => {
    
    // g temp = income;
    if(incomeInput.value === ''){
        errorInput.textContent = "please enter your monthly income";
    }
    else if (expensesAmount.value === '') {
        errorInput.textContent = "please enter amount";
    }
    else if (expensesType.value === '') {
        errorInput.textContent = "please enter purpose of expenses";
    }
    else if(isNaN(expensesAmount.value)){
        errorInput.textContent = "please enter numbers";
    }
    else {
        let temp = incomeInput.value;
        let savings = temp;
        let amount = expensesAmount.value;
        let type = expensesType.value;
        expensesDisplay.innerHTML += `<h3>${a}] ${amount} : ${type} </h3>`;
        a += 1;
        expensesAmount.value = '';
        expensesType.value = '';
        savings -= amount;
        errorInput.textContent = `in your wallet ${savings}`;
         incomeInput.value = savings;                 
    } 

};


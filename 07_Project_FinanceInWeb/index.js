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
        let wallet = parseFloat(incomeInput.value); // Current wallet balance
        let amount = parseFloat(expensesAmount.value); // Expense amount
        
        if (wallet <= 0) {
            errorInput.textContent = "You have no money left in your wallet.";
        } else if (amount > wallet) {
            errorInput.textContent = "You cannot spend more than you have in your wallet.";
        } else {
            let type = expensesType.value;
            expensesDisplay.innerHTML += `<h3>${a}] ${amount} : ${type}</h3>`;
            a += 1;
            incomeInput.value = wallet - amount; // Update wallet balance
            errorInput.textContent = `In your wallet: ${incomeInput.value}`;
            expensesAmount.value = '';
            expensesType.value = '';
        }
    }


};


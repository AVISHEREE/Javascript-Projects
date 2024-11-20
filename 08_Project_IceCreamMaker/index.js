let orderProceder = document.querySelector("#orderProceder");
let servingIceCream = document.querySelector("#servingIceCream");
let text = document.querySelector("#text");
let buttons = document.querySelector("#button");
let selection = document.querySelector(".selection");
let options = document.querySelector("#options");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let select3 = document.querySelector("#select3");
let select4 = document.querySelector("#select4");

let container;
let  orderingIceCream = async () =>{
    choice("chocolate","vanila",'strawberies','mango',"which flavor of ice cream will you like to have");
     let a = await wait1();
    choice("small cone","medium cone","big cone","cup","which type of holder will you like to have");
    let b = await wait2();
    selection.checked = false;
    choice("stick","candy","melted chocolate","kuch bhi","what toppings you want");
    let c = await wait3();
    iceCreamMaking();
};

let choice = (selectType1,selectType2,selectType3,selectType4,sentence) =>{
    text.textContent = sentence;
    option1.innerHTML = selectType1;
    option2.innerHTML = selectType2;
    option3.innerHTML = selectType3;
    option4.innerHTML = selectType4;
};




let wait = (selectType1,selectType2,selectType3,selectType4) =>{
    selection.checked = false;
    return new Promise((resolve, reject) => {
        buttons.addEventListener('click', function () {
            if(select1.checked === true){
                text.textContent = "You have selected "+selectType1;
            // container += [selectType1,];
                
            }
            else if(select2.checked === true){
                text.textContent = "You have selected "+selectType2;
                // container += [selectType2,]; 
            }
            else if(select3.checked === true){
                text.textContent = "You have selected "+selectType3; 
                // container += [selectType3,]; 
            }
            else if(select4.checked === true) {
                text.textContent = "You have selected "+selectType4; 
                // container += [selectType4,];
            }
            else {
                text.textContent = "Please select an option"; // Handle case where no option is selected
            }
           
            setTimeout(() => {
                resolve(); // Resolve the promise when the button is clicked
            }, 2000)
        })
    });
};

let wait1 =() => (wait("chocolate","vanila",'strawberies','mango'))
let wait2 =() => (wait("small cone","medium cone","big cone","cup"))
let wait3 =() => (wait("stick","candy","melted chocolate","kuch bhi"))

let iceCreamMaking = () =>{
    orderProceder.textContent = "thankyou for your order we'll deliver it soon";
};

orderingIceCream();












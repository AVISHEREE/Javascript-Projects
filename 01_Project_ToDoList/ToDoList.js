let addListTitle = document.querySelector("#addListTitle");
let list = document.querySelector("#list");
let msg = document.querySelector("#msg");
let myForm = document.querySelector("#myForm");



myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formvalidation();
});

let deleteList = (e) => {
    e.parentElement.remove();
};
let editList = (a) => {
    if(addListTitle.value.trim() === ''){
        msg.style.display = "block";
        msg.innerHTML = 'please enter the data in input then click on the edit icon';
        let text = a.parentElement.children[1];
        addListTitle.value = text.innerText;
    }else{
        if (a.parentElement.id === 'listHolder') {
            a.parentElement.id = '';
        }
        a.parentElement.innerHTML = `<div id="listHolder">
        <input type="checkbox" name="" id="">
         <li type="none">   ${addListTitle.value} </li>
         <button name="" onClick="deleteList(this)" id="btn" type="button" >&times</button>
         <button name="" onClick="editList(this)" id="btn" type="button" >&#x270E;</button>
         `;
        msg.innerHTML = '';
        msg.style.display = "none"
        addListTitle.value = '';
        
    }
};

let addlst = () => {
    Title = addListTitle.value;
    list.innerHTML += ` 
   <div id="listHolder">
   <input type="checkbox" name="" id="">
    <li type="none">   ${Title} </li>
    <button name="" onClick="deleteList(this)" id="btn" type="button" >&times</button>
    <button name="" onClick="editList(this)" id="btn" type="button" >&#x270E;</button>
    
    `;
}

let formvalidation = () =>{
if(addListTitle.value === ''){
    msg.innerHTML = 'please enter data';
}
else {
    addlst();
    msg.innerHTML = '';
    addListTitle.value = '';
}
}


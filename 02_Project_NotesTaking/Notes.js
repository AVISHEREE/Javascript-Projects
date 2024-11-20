let inputNoteTittle = document.querySelector("#inputNoteTittle");
let myForm = document.querySelector("#myForm");
let msg = document.querySelector("#msg");                                   
let noteContainer = document.querySelector(".notesContainer");
// let text = document.querySelector(".text");

myForm.addEventListener ("submit" , (a) =>{
    a.preventDefault();
    if(inputNoteTittle.value === ''){
        msg.innerHTML = "please enter a tittle here";
    }else{
   addNote();
    }
})
let addNote = () =>{
    tittle = inputNoteTittle.value;
    noteContainer.innerHTML += `
    <div>
    <h4 id="">${tittle}</h4>
    <textarea name=""  cols="10" rows="2" class="text"></textarea>
    <button name="" onClick="deleteList(this)" id="btn" type="button" >&times</button>
    <button name="" onClick="editList(this)" id="btn" type="button" >Edit the tittle </button>
    </div>
    `
    inputNoteTittle.value = '';
}
let deleteList = (d) => {
    d.parentElement.remove();
}
let editList = (e) => {
    if(inputNoteTittle.value === ''){
        inputNoteTittle.value = e.parentElement.children[0].innerText;
        msg.style.display = "block";
        msg.innerHTML = "please enter the tittle here and then click on edit the tittle btn"
    }else{
        text = e.parentElement.querySelector('.text').value.trim();
        tittle = inputNoteTittle.value;
    e.parentElement.innerHTML = `
    <div>
    <h4>${tittle}</h4>
    <textarea name=""   class="text" cols="20" rows="7">${text}</textarea>
    <button name="" onClick="deleteList(this)" id="btn" type="button" >&times</button>
    <button name="" onClick="editList(this)" id="btn" type="button" >Edit the tittle </button>
    </div>
    `
    inputNoteTittle.value = ''; 
    msg.innerHTML = ''; 
    msg.style.display = "none";
    }
}

let openBtn = document.getElementById("openBtn");
let modalContainer = document.querySelector(".modalContainer");
let closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click",function(){
    modalContainer.style.display = "flex";

})

closeBtn.addEventListener("click",function(){
    modalContainer.style.display = "none";
})

window.addEventListener("click",function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = "none";
    }
})
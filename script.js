let randomProject = document.querySelector("#randomProject");
let randomProjectLinks = document.querySelectorAll("button a");

console.log(randomProjectLinks);
console.log(randomProject.href);

randomProject.addEventListener("click",function(){
    const randomNum = Math.floor(Math.random() * 12);
    randomProject.href = randomProjectLinks[randomNum].href;
})
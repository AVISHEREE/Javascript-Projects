const stars = document.querySelectorAll(".rating span");
const emoji = document.querySelector(".emoji");

console.log(stars);

stars.forEach((star,index1)=>{
    star.addEventListener('mouseover',()=>{
        stars.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.add("hover") : star.classList.remove("hover")
        })
    })
    star.addEventListener('mouseout',()=>{
        stars.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.remove("hover") : star.classList.remove("hover")
        })
    })
})

stars.forEach((star,index1) =>{
    star.addEventListener("click",()=>{
        // console.log(index1)
        if(index1 == '0'){
            emoji.innerHTML = '😞'
        }
        else if(index1 == '1'){
            emoji.innerHTML = '😕'
        }
        else if(index1 == '2'){
            emoji.innerHTML = '😐'
        }
        else if(index1 == '3'){
            emoji.innerHTML = '🙂'
        }
        else{
            emoji.innerHTML = '😃'
        }
        stars.forEach((star, index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        });
    })
})


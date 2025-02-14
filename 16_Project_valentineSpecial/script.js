document.addEventListener("click", function(event) {
    let heart1 = document.createElement("div");
    heart1.classList.add("heart1");
    document.body.appendChild(heart1);
    
    heart1.style.left = `${event.clientX}px`; // Adjust to center on click
    heart1.style.top = `${event.clientY - 70}px`;

    setTimeout(() => {
        heart1.remove();
    }, 2000);
    let heart2 = document.createElement("div");
    heart2.classList.add("heart2");
    document.body.appendChild(heart2);
    
    heart2.style.left = `${event.clientX - 70}px`; // Adjust to center on click
    heart2.style.top = `${event.clientY - 50}px`;

    setTimeout(() => {
        heart2.remove();
    }, 2000);

    let heart3 = document.createElement("div");
    heart3.classList.add("heart3");
    document.body.appendChild(heart3);
    
    heart3.style.left = `${event.clientX - 30}px`; // Adjust to center on click
    heart3.style.top = `${event.clientY - 25}px`;

    setTimeout(() => {
        heart3.remove();
    }, 2000);

    let heart4 = document.createElement("div");
    heart4.classList.add("heart4");
    document.body.appendChild(heart4);
    
    heart4.style.left = `${event.clientX - 30}px`; // Adjust to center on click
    heart4.style.top = `${event.clientY - 20}px`;

    setTimeout(() => {
        heart4.remove();
    }, 2000);
});

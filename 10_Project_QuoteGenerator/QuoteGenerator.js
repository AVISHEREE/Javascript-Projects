let btn = document.querySelector("#newQuoteBtn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".personName");

const quotesCollection = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "If you can dream it, you can do it.",
      author: "Walt Disney"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    }
];

btn.addEventListener("click",function(){
    let randomNum = Math.floor(Math.random() * quotesCollection.length );
    
    quote.innerText = quotesCollection[randomNum].quote;
    person.innerText = quotesCollection[randomNum].author;
})

  
// const quote = [1 , 2 , 3 , 4 , 5];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("button");
const url = "https://api.quotable.io/random";


let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
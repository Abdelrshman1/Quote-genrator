const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" }
];

let lastIndex = -1; 

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex; 
    document.getElementById("quote").textContent = `"${quotes[randomIndex].text}"`;
    document.getElementById("author").textContent = `- ${quotes[randomIndex].author}`;
}

document.getElementById("generateBtn").addEventListener("click", generateQuote);

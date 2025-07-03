const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it’s done..",
    author: "Nelson Mandela",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const quoteCard = document.getElementById("quoteCard");

function showRandomQuote() {
  // fade out
  quoteCard.classList.add("fade");
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
    // fade in
    quoteCard.classList.remove("fade");
  }, 500);
}

newQuoteBtn.addEventListener("click", showRandomQuote);

// show one on load
showRandomQuote();

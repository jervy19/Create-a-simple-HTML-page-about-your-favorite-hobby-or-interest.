const btn = document.getElementById('changeTextBtn');
const hobbyText = document.getElementById('hobbyText');
const quoteBox = document.getElementById('quoteBox');

const quotes = [
  "Hard work beats talent when talent doesn’t work hard.",
  "You miss 100% of the shots you don’t take.",
  "Winners never quit, and quitters never win.",
  "Push yourself, because no one else will do it for you."
];

btn.addEventListener('click', () => {
  hobbyText.textContent = "Basketball teaches me discipline, focus, and sportsmanship!";
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = `💬 ${randomQuote}`;
});

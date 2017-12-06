// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
const quoteBox = document.getElementById("quote-box");

const quotes = [{quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
                source: "John Keats",
                citation: "brainyquote.com",
                },
                {quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
                source: "Ernest Hemingway",
                citation: "The Old Man and the Sea"},
                {quote: "When you reach the end of your rope, tie a knot in it and hang on.",
                source: "Franklin D. Roosevelt",
                citation: "brainyquote.com",},
                {quote: "There is nothing permanent except change.",
                source: "Heraclitus",
                year: "535BC - 475BC"},
                {quote: "You cannot shake hands with a clenched fist.",
                source: "Indira Gandhi",
                citation: "brainyquote.com"},
                {quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
                source: "A. P. J. Abdul Kalam",
                citation: "brainyquote.com",
                year: "2003"}];

function getRandomQuote(){
  const ran = Math.floor(Math.random()*quotes.length);
  return quotes[ran];
}

function printQuote() {
  while(quoteBox.firstChild){
    quoteBox.removeChild(quoteBox.firstChild);
  }
  const randomquote = getRandomQuote();
  const quote = randomquote.quote;
  const source = randomquote.source;
  const citation = randomquote.citation;
  const year = randomquote.year;
  const quoted = document.createElement("p");
  const sourced = document.createElement("p");
  sourced.innerHTML = source;
  quoted.className = "quote";
  sourced.className = "source";
  quoted.innerHTML = quote;
  if((randomquote.year || randomquote.citation)){
    if(randomquote.citation){
      const citationed = document.createElement("span");
      citationed.className = "citation";
      citationed.innerHTML = citation;
      sourced.appendChild(citationed);
      if(randomquote.year){
        const yeared = document.createElement("span");
        yeared.className = "year";
        sourced.appendChild(yeared);
        yeared.innerHTML = year;
      }
    }
    else if(randomquote.year){
      const yeared = document.createElement("span");
      yeared.className = "year";
      sourced.appendChild(yeared);
      yeared.innerHTML = year;
      }
    }
  quoteBox.appendChild(quoted);
  quoteBox.appendChild(sourced);
};


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

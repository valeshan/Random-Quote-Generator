//assigned variable to quote-box element
const quoteBox = document.getElementById("quote-box");


//list of quotes
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

//random quote generator
function getRandomQuote(){
  const ran = Math.floor(Math.random()*quotes.length);
  return quotes[ran];
}


//print quote
function printQuote() {
  while(quoteBox.firstChild){                   //removes previous child elements (clean slate)
    quoteBox.removeChild(quoteBox.firstChild);
  }

  //assigning object and object attributes to variables
  const randomquote = getRandomQuote();
  const quote = randomquote.quote;
  const source = randomquote.source;
  const citation = randomquote.citation;
  const year = randomquote.year;


  //creating elements
  const quoted = document.createElement("p");
  const sourced = document.createElement("p");

  //assigning class names to elements
  quoted.className = "quote";
  sourced.className = "source";

  //placing HTML content inside elements
  sourced.innerHTML = source;
  quoted.innerHTML = quote;

  //checking if quote objects contain either a year and/or citation
  //if any are true, then creating respective elements and appending to sourced
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

  //appending child elements to the quote-box parent element
  quoteBox.appendChild(quoted);
  quoteBox.appendChild(sourced);
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects.
***/
let quotes = [
  {
    quote: "Happiness can exist only in acceptance.",
    source: "George Orwell",
  },
  {
    quote: "Love has no age, no limit; and no death.",
    source: "John Galsworthy"
  },
  {
    quote: "You can't blame gravity for falling in love.",
    source: "Albert Einstein"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain",
    citation: "Letter to Henry H. Rogers",
    year: 1897
  },
  {
    quote: "We love life, not because we are used to living but because we are used to loving.",
    source: "Friedrich Nietzsche"
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    source: "Napoleon Hill",
    citation: "New York Post",
    year: 1850
  },
  {
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    source: "Sun Tzu"
  },
  {
    quote: "You can't blame gravity for falling in love.",
    source: "Albert Einstein"
  },
  {
    quote: "Honesty is the first chapter in the book of wisdom.",
    source: "Thomas Jefferson"
  },
  {
    quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    source: "Marcus Aurelius"
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    source: "George Bernard Shaw"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    source: "Socrates"
  },
  {
    quote: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
    source: "Ingrid Bergman"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  },
  {
    quote: "Blessed are the hearts that can bend; they shall never be broken.",
    source: "Albert Camus"
  },
  {
    quote: "Where there is love there is life.",
    source: "Mahatma Gandhi",
    year: 1930
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson"
  }
];



/***
  Create the `getRandomQuote` function.
  Get a random number between 0 and quotes array length.
  Return random object from array
***/
function getRandomQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quotes.length);
  return quotes[randomQuoteIndex];
}



/***
  Create the `printQuote` and create the innerHTML
***/
function printQuote() {
  let quoteObj = getRandomQuote();
  let stringHTML = "";
  let myOutputParagraph = document.getElementById('quote-box');
  stringHTML = "<p class=\"quote\">" + quoteObj.quote + "</p>";
  stringHTML +="<p class=\"source\">"+ quoteObj.source;
  if (quoteObj.citation) {
     stringHTML += "<span class=\"citation\">"+quoteObj.citation+"</span>";
  }
  if (quoteObj.year){
    stringHTML += "<span class=\"year\">"+quoteObj.year+"</span>";
  }
  stringHTML += "</p>";
  myOutputParagraph.innerHTML = stringHTML;
  randomColor();
}
/*
  function which generate a random color
*/
function randomColor(){
  let color = "rgb(";
  for (let i = 0; i < 3; ++i){
  c = Math.floor(Math.random()*256);  
  color += c + ",";
  }
  document.body.style.backgroundColor = color.slice(0,color.length-1)+")";
}

// getQuote function runs every 20 seconds and generate a new background color 
var intervalID = setInterval(printQuote, 20000);
// clear(intervalID); //will cleat the interval
/***
 Button pressed event - load random quote;
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
    source: "Mark Twain"
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
    source: "Mahatma Gandhi"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson"
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quotes.length); 
  return quotes[randomQuoteIndex];
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let quoteObj = getRandomQuote();
  let stringHTML = "";  
  let myOutputParagraph = document.getElementById('quote-box');
  stringHTML = "<p class=\"quote\">" + quoteObj.quote + "</p><br>";
  stringHTML +="<p class=\"source\">"+ quoteObj.source;
  if (quoteObj.citation) {
     stringHTML += "<span class=\"citation\">"+quoteObj.citation+"</span>";
  }
  if (quoteObj.year){
    stringHTML += "<span class=\"year\">"+quoteObj.year+"</span>";
  }
  stringHTML += "</p>";
  myOutputParagraph.innerHTML = stringHTML;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
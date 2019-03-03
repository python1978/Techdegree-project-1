function randomQuote(){
  let text='';
  let quote = Math.floor(Math.random()*quotes.length); 
  console.log(quote);
  text = "<h1><blockquote>\"" + quotes[quote].quote + "\"</blockquote></h1>";
  text += "<cite> - " + quotes[quote].author + "</cite>";
  return text;
}

function print(message) {
  let div = document.getElementById('output');
  div.innerHTML = message;
}
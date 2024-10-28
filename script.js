const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById(loader);


//let apiQuotes = [];

//Show Loading
function loading(){
    loading.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show Quotes
function newQuote() {
    loading();
    //Pick a random quote from apiquotes array
    const quote = localQuotes[Math.floor(math.random () * localQuotes.length)];
    console.log(quote);
    authorText.textContent = quote.author;

    //Check if author field is blank replace it with unknown

    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    //Check Quote length determine styling

    if(quote.text.length >80){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');

    }
    //Set quote,hide loader
    quoteText.textContent = quote.text;
    complete();
}

//Get Quotes From Api
/*async function getQuotes() {
    loading();
    const apiUrl = "https://ideone.com/UuqIaC";
    try{
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();
    }
    catch(error){
        //Catch Error Here
    }
}*/


//Twitter Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.quoteContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); 
}

//Event Listeners

newQuoteBtn.addEventListener('Click', newQuote);
twitterBtn.addEventListener('Click', tweetQuote);
// On Load
//getQuotes();
newQuote();   

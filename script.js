// inside script.js
// all of our quotes 

const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
]

// store the list of words and the index of the word the player is currently typing 
let words = [];
let wordIndex = 0;


//the starting time
let startTime = Date.now(); 

// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


// at the end of script.js 
document.getElementById('start').addEventListener('click', () => {
    //get a quote 


    // Put the quote in an array of words 

    // reset the word index for tracking 

    // UI updates 
    // Create an array of span elements so we can set a class 

    // Convert into string and set as innerHTML on quote display 

    // Hihlight the first word

    // Clear and prior messages

    // Setup the textbox
    // Clear the textbox 

    //set focus

    //set the event handler 

    // Start the  timer 
});

// at the end of the script.js 
typedValueElement.addEventListener('input', () =>{
    // Get the current word 
    

    //get the current value 

})

//
// create array for words
var words = ["pizza", "hotdogs", "corndog", "fries", "donuts"];

// create a random picker from words
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// create an empty array for the user to guess into
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var b = document.getElementById("display-size");
b.innerHTML = answerArray.join(" ");
console.log(answerArray);


// setting var remaining letters = to the length of the word chosen to make a countdown counter below
var guessesRemaining = word.length 
console.log("Guesses left: " + guessesRemaining);
    // adding the counter for guesses remaining
var k = document.getElementById("guesses-remaining");
k.innerHTML = guessesRemaining;

//create an array for missed letters to go in, this also keeps track of guesses remaining.
var lettersGuessedArray = [];
var c = document.getElementById("guessed-wrong");
c.innerHTML = lettersGuessedArray.join(" ");
console.log(lettersGuessedArray);  

// set var wins and display in html
var wins = 0;
var m = document.getElementById("wins");
m.innerHTML = wins;
console.log("wins is equal to: " + wins);  

// set var losses and display in html
var losses = 0;
var n = document.getElementById("losses");
n.innerHTML = losses;
console.log("losses are equal to : " + losses);  

// The brains for the game start here 

// user picks a letter from keyboard, this is stored in var guess
document.onkeyup = function(event) {
    var guess = event.key;
    console.log(guess);
   
    if (guessesRemaining = 0) {
        alert("game over");
        }
        
    //this will check all the letters from the (word, computers choice)
    //and compare it to the guess by running the word loop
    for (var j = 0; j < word.length; j++) {
    
        // if anywhere in the word matches the users guess
    if (word[j] === guess) {
            // if this is true, i insert guess into the answerArray at position[j]
            answerArray[j] = guess;
            // this will put the users guess letter into the array and display on the screen
            var e = document.getElementById("display-size");
            e.innerHTML = answerArray.join(" ");
            console.log(answerArray.join(" "));
               
            //return how to get it back to guess another letter?
        }
            else {
                //put the wrong guess into the array

                // i cant figure out how to stop this from putting the incorrect letter into
                // the array the number of times as is the length of the word. i know it is
                // trapped inside the for loop above with var j. but i can not figure out how
                // to get this part of the statement out of it ( i have spend probably 6 hours today on this part....)

                lettersGuessedArray.push(guess);
                console.log(lettersGuessedArray);
                // this will show the wrong letter into the array on the screen
                var g = document.getElementById("guessed-wrong"); 
                g.innerHTML = lettersGuessedArray.join(" ");
                // minus 1 from remainingLetters countdown
                guessesRemaining--;
                if (guessesRemaining <= 0) {
                  
                }
            
                    //where do i need the retrn?
            }
            
    }
};
    //this returns the process to the onclick function?
      
   

    //   console.log(answerArray.join(" "));
    // WIN/LOSE CONDITION LOGIC
    // if (win condition) ...

    // else (lose comdition) ... 
//     alert("good job the answer was " + word + ".");

//     var f = document.getElementById("demo");
//     f.innerHTML = words;

//     if (remainingLetters <= 0) //lose condition

// create array for words
var words = ["pizza", "hotdogs", "corndog", "fries", "donuts"];

//var a = document.getElementById("words-in-array");
//a.innerHTML = words;


// create a random picker for words
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
// document.getElementById("answer-array").innerHTML = answerArray; not sure if this will work

// setting var remaining letters = to the length of the word chosen to make a countdown counter below
var remainingLetters = word.length 

//create an array for missed letters to go in, this also keeps track of guesses remaining.
var lettersGuessedArray = [];
for (var g = 0; g < word.length; g++) {
    lettersGuessedArray[g] = "_";
}
var c = document.getElementById("guessed-wrong");
c.innerHTML = lettersGuessedArray.join(" ");
console.log(lettersGuessedArray);  
// document.getElementById("answer-array").innerHTML = answerArray; not sure if this will work


// loop for the game



// user picks a letter
document.onkeyup = function(event) {
    var guess = event.key;
    console.log(guess);
   
    for (var j = 0; j < word.length; j++) {
        //this will check all the letters from the (word, computers choice)
        //and compare it to the guess by running the word loop
        if (word[j] === guess) {
            //this will put the guess into the answerArray

//            function Rep() {
//            var answerArray = guess;
//            answerArray = setCharAt(answerArray,[j],guess);
//            doucment.getElementById("display-size").innerHTML = answerArray;
 //           }


            
//  0730        var e = document.getElementById("display-size");
//              var answerArray = e.replace([j], guess);
//              doucment.getElementById("display-size").innerHTML = answerArray;



              answerArray[j] = guess;
             var e = document.getElementById("display-size");
            e.innerHTML = guess;
            
          
            //this will minus one from remainingLetters each time
            remainingLetters--;
        }
        else {
            //put the wrong guess into the array
            var g = document.getElementById("guessed-wrong");
            g.innerHTML = guess;
        }
    }
}
    //this closes the game loop
      
    //e.innerHTML = answerArray.join(" ");



    //   console.log(answerArray.join(" "));
    // WIN/LOSE CONDITION LOGIC
    // if (win condition) ...

    // else (lose comdition) ... 
//     alert("good job the answer was " + word + ".");

//     var f = document.getElementById("demo");
//     f.innerHTML = words;

//     if (remainingLetters <= 0) //lose condition

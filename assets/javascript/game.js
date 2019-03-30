{/* <section id="main-content">
    <p>Press Any Key to Begin, If You Dare!</p>
    <p id="current-word"></p>
    <p id="word-as-dashes"></p>
    <p id="guesses-remaining"></p>
    <p id="wrong-guess"></p>
</section>

<section id="sidebar">
    <p id="outcome"></p>
    <p id="outcome-image"></p>
    <p id="wins-text"></p>
    <p id="losses-text"></p>
</section> */}


// Right "Main Content" div will contain all the game stuff, pulled from the div/ div ids above
// "Press Any Key to Get Started"

// Array of options

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var answer;
var letters = [];
var wrongGuess = [];
var guessesRemaining = 13;
var wins = 0;
var losses = 0;


var wordList = [
    "krueger",
    "halloween",
    "leatherface",
    "samhain",
    "scream",
    "jason",
]

var word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);


function makeIntoDashes(word) {
	var dashes = "";
	for (i = 0; i < word.length - 1; i++) {
        dashes += "_ ";
	}
	dashes += "_";
    return dashes;
    
}

var wordAsDashes = makeIntoDashes(word);
document.getElementById("answer").innerHTML = wordAsDashes;
console.log(wordAsDashes)



function checkLetter() {
    document.onkeyup = function(event) {
        guess = event.key.toLowerCase();
        var found = false;
        for (i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                letters[i] = guess;
                document.getElementById("answer").innerHTML = letters.join(" ");
                found = true;
            } 
        }

        if (found) return;
        if (wrongGuess.indexOf(guess) < 0) {
            wrongGuess.push(guess);
            document.getElementById("wrong-guess").innerHTML = wrongGuess.join(" ");
            guessesRemaining--;
					console.log(guessesRemaining);
					document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
					if (guessesRemaining === 0) {
						document.getElementById("losses").innerHTML = losses + 1;
						console.log(losses);
						confirm("YOU LOSE... play again?"); {
							losses++;
							guessesRemaining = 13;
							letters = [];
							wrongGuess = [];
							start();
						}
					}
				}
			}
        }
        

// var guessesRemaining = document.getElementById("guesses-remaining");
// var lettersGuessed = document.getElementById("letters-guessed");
// var outcomeText = document.getElementById("outcome");
// var outcomeImage = document.getElementById("outcome-image");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");





// "Current Word" + Blank Spaces


// Should be an on-click event (this is its own div?) that registers the players keystrokes. Correct Keys should be logged in correct place.


// "Number of Guesses Remaining = 12" as keys are clicked, number goes down, when 0 is reached, lower div or object will display "You Died!"

// Incorrect guesses should also be logged in separate div that indicates "Letters Already Guessed" (repeat letters should not be doubled)

// Reset on success or loss

// In left "Sidebar" div - OUTCOME:
// Wins should accompany a "You Survived!" prompt + picture of Horror Survivor + # of total wins
// Losses should accompany a "You Died!" prompt + picture of Horror Killer
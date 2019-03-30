function start() {
    guessesRemaining = 13;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    for (i = 0; i < word.length; i++) {
        letters[i] = "__";
    }
}

document.getElementById("answer").innerHTML = letters.join(" ");

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
							counter = 7;
							letters = [];
							wrongGuess = [];
							start();
						}
					}
				}
			}
		}
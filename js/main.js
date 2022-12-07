(function () {
    "use strict";
    let availLtrs, words, guessInput, guess, guessButton, ltrGuess, ltrMatched, output, man, letters, lives, currentWord, numLtrsMatched, messages;

    function setup() {
       //game setup
        availLtrs = "abcdefghijklmnopqrstuvwxyz";
        lives = 6;
        words = ["pilot", "cat", "whale", "javascript", ];
        messages = {
            win: 'Ayeee You Won!',
            lose: 'Yikes! You got Hangman',
            guessed: 'choose again',
            validLetter: 'Only letters A-Z accepted'
        };
        

        ltrGuess = ltrMatched = '';
        numLtrsMatched = 0;

        //random word
        currentWord = words[Math.floor(Math.random() * words.length)];

        //blank lives and output
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById("letter").value = '';

        guessButton = document.getElementById("guess");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';

        /* set up display of letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="current-word">Current word:</li>';

        let letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }


    window.onload = setup();

    document.getElementById("restart").onclick = setup;

    guessInput.onclick = function () {
        this.value = '';
    };

    //click logic
    document.getElementById('hangman').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;

        if (guess) {
            if (availLtrs.indexOf(guess) > -1) {
                if ((ltrMatched && ltrMatched.indexOf(guess) > -1) || (ltrGuess && ltrGuess.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    output.classList.add("warning");
                }
                else if (currentWord.indexOf(guess) > -1) {
                    let lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (let i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }
                    for (let j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numLtrsMatched += 1;
                        }
                    }
                    ltrMatched += guess;
                    if (numLtrsMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                else {
                    ltrGuess += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if (lives === 0) gameOver();
                }
            }
            //valid throw error
            else {
                output.classList.add('error');
                output.innerHTML = messages.validLetter;
            }
        }
        //nothing entered throw error
        else {
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
        return false;
    };
}());
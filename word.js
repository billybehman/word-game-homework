var theLetter = require("./letter")

function word(theWord, guess) {
    this.guesses = [],
    this.guess = guess,
    this.addGuesses = function() {
        this.guesses.push(this.guess)
    }
        this.theWord = theWord,
        this.wordArray = [],
        this.wordLetters = function () {
            this.wordArray = theWord.split("")
            // return theWord.split("")
        }
    this.creatLetters = function () {
        var showingBlanks = "";
        for (i = 0; i < this.wordArray.length; i++) {
            var blanks = new theLetter(this.wordArray[i], false, this.guesses)
            blanks.rightOrWrong();
            showingBlanks += blanks.underscore();
        };
        console.log(showingBlanks)
    };
    this.newGuess = function(newGuess) {
        this.guess = newGuess;
    }

};

// var cheese = new word(what)

// cheese.wordLetters();

// console.log(cheese.wordArray)

// console.log(cheese.creatLetters())

module.exports = word;


// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define


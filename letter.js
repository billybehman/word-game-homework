// var guess = process.argv[2];

function theLetter(letter, wasGuessed, guesses) {
    this.letter = letter,
        this.wasGuessed = wasGuessed,
        this.underscore = function () {
            if (this.wasGuessed) {
                return this.letter
            } else {
                return "_"
            }
        };
    this.rightOrWrong = function () {
        if (guesses.includes(letter)) {
            this.wasGuessed = true
            // console.log("Correct Guess")
        } else {
            this.wasGuessed = false
            // console.log("Incorrect guess")
        };
    };
   
};


// var q = new theLetter("q", false)

// q.rightOrWrong();
// console.log("letterQQQ - " + q.underscore())

module.exports = theLetter;


//the letter.js file is an object of an individual letter that is in the current word
//the word.js file will create as many new letter objects as there is in the current word
//everytime a letter is guessed, it will go through every letter object and see if it matches
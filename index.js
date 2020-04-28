var word = require("./word");

var inquirer = require("inquirer")

var listOfWordsOrPhrases = ["elephant", "tool", "youre a wizard harry", "la la la la"];

// var theGuess = process.argv[2];

var arraySlot = Math.floor(Math.random() * 4);  

currentWord = listOfWordsOrPhrases[arraySlot]

console.log(currentWord)

// var wordAttempt = new word(currentWord, theGuess);

// wordAttempt.wordLetters();

// console.log(wordAttempt.creatLetters())


function theGame() {

    inquirer
    .prompt([
        {
        type: "input",
        message: "Enter a letter.",
        name: "letterInput"
        },
    ])
    .then(function (response) {
        var letterInput = response.letterInput
        var wordAttempt = new word(currentWord, letterInput);
        wordAttempt.addGuesses();
        wordAttempt.wordLetters();

        console.log(wordAttempt.creatLetters());

        nextGuess(wordAttempt);


    })

  

};

theGame();

function nextGuess(wordAttempt) {
    inquirer
    .prompt([
        {
        type: "input",
        message: "Enter a letter.",
        name: "letterInput"
        },
    ])
    .then(function (response) {
        var letterInput = response.letterInput
        wordAttempt.newGuess(letterInput);
        wordAttempt.addGuesses();
        wordAttempt.wordLetters();
        console.log(wordAttempt.creatLetters())
        nextGuess(wordAttempt)
    });
};



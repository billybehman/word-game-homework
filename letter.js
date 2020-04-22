function letter(letter) {
    this.letter = letter,
        this.wasGuessed = wasGuessed,
        this.underscore = function () {
            if (this.wasGuessed) {
                return this.wasGuessed
            } else {
                return "_"
            }
        };
    this.rightOrWrong = function (character) {
        if (character = this.letter)
            
    };
};


const reverseString = function(phrase) {
    let splitPhrase = phrase.split("");
    let invertedPhrase = "";
    for (let i = -1; i >= -splitPhrase.length; i--)
    {
        invertedPhrase = invertedPhrase.concat(splitPhrase.at(i));
    }
    return invertedPhrase;
};

// Do not edit below this line
module.exports = reverseString;

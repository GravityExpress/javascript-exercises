const palindromes = function (word) {
    word = word.toLowerCase().replaceAll(/[!,. ]/g, '');
    return word === Array.from(word.split("")).reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

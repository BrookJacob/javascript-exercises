const palindromes = function(word) {
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").replace(/\s/g, '').toLowerCase();
    return (word.split('').reverse().join('') == word);


};

// Do not edit below this line
module.exports = palindromes;
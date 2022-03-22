const palindromes = function(word) {
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").replace(/\s/g, '').toLowerCase();
    console.log(word.split('').reverse().join(''));
    return (word.split('').reverse().join('') == word);


};

// Do not edit below this line
module.exports = palindromes;
const palindromes = function(word) {
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").replace(/\s/g, '').toLowerCase();
    let halfWordNum = Math.floor(word.length / 2);
    let lastHalf = word.slice(-halfWordNum);
    let reversedLastHalf = '';

    for (let i = lastHalf.length - 1; i >= 0; i--) {
        reversedLastHalf += lastHalf[i];
    }

    console.log(lastHalf);
    console.log(reversedLastHalf);
    console.log(word.slice(0, halfWordNum));

    if (reversedLastHalf == word.slice(0, halfWordNum)) {
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
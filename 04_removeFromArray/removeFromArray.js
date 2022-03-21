const removeFromArray = function(array, remove) {
    let removalArray = Array.from(arguments);
    removalArray.shift();
    console.log(removalArray);

    let filteredArray = [];

    for (i = 0; i < array.length; i++) {
        if (!removalArray.includes(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
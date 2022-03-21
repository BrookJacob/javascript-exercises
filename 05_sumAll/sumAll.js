const sumAll = function(num1, num2) {
    argumentArray = Array.from(arguments);
    argumentArray.sort();
    if (!Number.isInteger(argumentArray[0]) || !Number.isInteger(argumentArray[1])) {
        return 'ERROR';
    } else if (Math.sign(argumentArray[0]) < 0 || Math.sign(argumentArray[1]) < 0) {
        return 'ERROR';
    } else {

        let sumTotal = 0;
        for (i = argumentArray[0]; i <= argumentArray[1]; i++) {
            sumTotal += i;
        }
        return sumTotal;
    }

};

// Do not edit below this line
module.exports = sumAll;
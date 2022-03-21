const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(sumArray) {
    let sumTotal = 0;

    for (i = 0; i < sumArray.length; i++) {
        sumTotal += sumArray[i];
    }

    return sumTotal;
};

const multiply = function(multiplyArray) {
    let product = 1;

    for (i = 0; i < multiplyArray.length; i++) {
        product *= multiplyArray[i];
    }

    return product;
};

const power = function(num1, num2) {
    return num1 ** num2;
};

const factorial = function(num1) {
    let product = 1;

    for (i = num1; i > 0; i--) {
        product *= i;
    }

    return product;

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
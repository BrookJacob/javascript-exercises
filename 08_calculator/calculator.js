const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(sumArray) {
    return sumArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const multiply = function(multiplyArray) {
    return multiplyArray.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
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
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
    let num1Array = [...Array(num1 + 1).keys()];
    num1Array.shift()
    console.log(num1Array);
    return num1Array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
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
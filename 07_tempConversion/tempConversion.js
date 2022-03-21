const ftoc = function(tempCelsius) {
    return parseFloat(Math.round(((tempCelsius - 32) * (5 / 9)) * 10) / 10);
};

const ctof = function(tempFahrenheit) {
    return parseFloat(Math.round(((tempFahrenheit * (9 / 5)) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
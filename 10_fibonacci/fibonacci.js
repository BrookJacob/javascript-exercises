const fibonacci = function(fibonacciTarget) {
    fibonacciTarget = parseInt(fibonacciTarget);
    let fibonacciSequence = [];

    if (Math.sign(fibonacciTarget) != -1) {
        for (let i = 0; i < fibonacciTarget; i++) {
            if (i == 0 || i == 1) {
                fibonacciSequence.push(1)
            } else {
                fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2])
            }
        }
        return fibonacciSequence.pop();

    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
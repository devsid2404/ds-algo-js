/*
    - Given  a number lengthOfFibonacciSequence return an array number containing fibonacci sequence of the length n
*/

function fibonacci(lengthOfFibonacciSequence) {

    const fibonacciSequence = [0,1];

    for(let i = 2; i < lengthOfFibonacciSequence; i++) {
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2]
    }

    return fibonacciSequence;
}


console.log(fibonacci(10));
/*
- Given a positive integer n return n! (n factorial)
*/

function getFactorial(positiveInteger) {
    let result = 1;
    for(let i = positiveInteger; i > 1; i--){
        result *= i;
    }
    return result;
}

console.log(getFactorial(10));
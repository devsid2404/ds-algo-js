/*
 Given a number return the true if it is power of 2 else false
    eg: number 128
    true because 2^7 = 128
*/

// while loop multiplying to power of in each loop
function isInPowerOf2(number) {
    const t1= performance.now();
    let result = false;
    let powerOf2 = 1;
     while (powerOf2 <= number) {
        if(powerOf2 === number) {
            result = true;
            break;
        }
        powerOf2 = powerOf2 * 2;
     }

    const t2= performance.now();
    console.log('power of two optimized =====>', t2-t1);
    return result;
}


// Comparing binary value of positiveInteger and positiveInteger - 1 and compare the result to zero
const isPowerOfTwoOptimized = (positiveInteger) => {
    const t1 = performance.now();
    const returnBoolean = (positiveInteger & (positiveInteger - 1)) === 0;
    console.log('power of two optimized =====>', performance.now() - t1);
    return returnBoolean;
}




  console.log(isInPowerOf2(1024)); // O(n)
  console.log(isPowerOfTwoOptimized(1024)); // O(1)
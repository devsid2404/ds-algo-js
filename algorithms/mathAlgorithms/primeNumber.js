/*
 Check if given number is prime or not 
    eg: number 31
    true 
*/


// check if number is even if not not check divisible upto square of given number
  function isPrimeOptimized(number) {
    const t1= performance.now();
    let result = false;
    const endPoint = Math.trunc(Math.sqrt(number));

    if(number % 2 !== 0) {
      for(let i = 3; i < endPoint; i += 2) {
          if(number % i === 0) {
              break;
          }
          if (i = endPoint - 1) result = true;
      }
    } 
    const t2= performance.now();
    console.log(t2-t1);
    return result;
  }


  function isPrime(number) {
    const t1= performance.now();
    let result = false;
    const endPoint = Math.trunc(number/2);

    for(let i = 2; i < endPoint; i++) {
        if(number % i === 0) {
            break;
        }
        if (i = endPoint - 1) result = true;
    }
    const t2= performance.now();
    console.log(t2-t1);
    return result;
  }



  console.log(isPrime(111));
  console.log(isPrimeOptimized(111));
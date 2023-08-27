/*
    Climbing staircase 
    given a positive integer n which totalNumberOfSteps
    find the total number of ways you can reach the target when you can take either of the two steps [1,2]
    the result is fibonacci series 
    Leet Code => #70
*/

function climbingStaircase(totalNumberOfSteps, numberOfWays = [1,2] ) {

    
    for(let i =2; i <= totalNumberOfSteps; i++) {

        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2];
    }
    

    console.log(numberOfWays[totalNumberOfSteps - 1]);
    return numberOfWays[totalNumberOfSteps-1];

    
    

}



console.log('climbingStaircase for 10 steps ==>', climbingStaircase(10)); //fibonacci series 100th element
console.log('climbingStaircase for 3 steps ==>', climbingStaircase(3)); // //fibonacci series 3rd element
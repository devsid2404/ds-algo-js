/*
    https://www.codingninjas.com/studio/problems/increasing-number-triangle_6581893?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function increasingNumberTriangle(dimension) {

    let number = 1;
    for(let i = 1; i <= dimension; i ++) {

        for(let j = 1; j <= i; j ++) {
            process.stdout.write(number + ' ');
            number ++;
        }
        process.stdout.write('\n');
    }

}

increasingNumberTriangle(3);

increasingNumberTriangle(5);

increasingNumberTriangle(9);
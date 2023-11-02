/*
    https://www.codingninjas.com/studio/problems/reverse-number-triangle_6581889?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function reverseNumberTriangle(dimension) {


    for(let i = dimension; i > 0; i --) {

        for(let j = 1; j <= i; j ++) {
            process.stdout.write(j + ' ');
        }
        process.stdout.write('\n');
    }

}

reverseNumberTriangle(5);

reverseNumberTriangle(9);
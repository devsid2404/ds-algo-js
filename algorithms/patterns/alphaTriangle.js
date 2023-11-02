/*
    https://www.codingninjas.com/studio/problems/alpha-triangle_6581429?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function alphaTriangle(dimension) {


    for(let i = 1; i <= dimension; i ++) {

        let char = String.fromCharCode('A'.charCodeAt(0) + dimension - i);

        for(let j = 1; j <= i; j ++) {
            process.stdout.write(char + ' ');
            char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        process.stdout.write('\n');
    }

}

alphaTriangle(3);

alphaTriangle(5);

alphaTriangle(9);
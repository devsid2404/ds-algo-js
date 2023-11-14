/*
    https://www.codingninjas.com/studio/problems/increasing-letter-triangle_6581897?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function increasingLetterTriangle(dimension) {

    for(let i = 1; i <= dimension; i ++) {

        let char = 'A';
        for(let j = 1; j <= i; j ++) {
            process.stdout.write(char + ' ');
            char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        process.stdout.write('\n');
    }

}

increasingLetterTriangle(3);

increasingLetterTriangle(5);

increasingLetterTriangle(9);
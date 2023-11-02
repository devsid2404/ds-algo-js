/*
    https://www.codingninjas.com/studio/problems/reverse-letter-triangle_6581906?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function reverseLetterTriangle(dimension) {


    for(let i = dimension; i > 0; i --) {

        let char = 'A';
        for(let j = 1; j <= i; j ++) {
            process.stdout.write(char + ' ');
            char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        process.stdout.write('\n');
    }

}

reverseLetterTriangle(5);

reverseLetterTriangle(9);
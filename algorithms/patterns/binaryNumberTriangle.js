/*
    https://www.codingninjas.com/studio/problems/binary-number-triangle_6581890?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function binaryNumberTriangle(dimension) {

    for(let i = 1; i <= dimension; i ++) {

        const evenRow = i % 2 === 0;
        let print1 = evenRow ? true : false;
        for(let j = 1; j <= i; j ++) {
            process.stdout.write((print1 ? 1 : 0) + ' ');
            print1 = !print1;
        }
        process.stdout.write('\n');
    }
}


binaryNumberTriangle(3);

binaryNumberTriangle(5);

binaryNumberTriangle(9);


/*
    https://www.codingninjas.com/studio/problems/rotated-triangle_6573688?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function rotatedTriangle(dimension) {

    for(let i = 1; i <= dimension * 2 - 1; i ++) {

        let stars = i;
        if(i > dimension) stars = dimension * 2 - i;;
        for(let j = 1; j <= stars; j ++) {
            process.stdout.write('* ')
        }
        process.stdout.write('\n');
    }
}


rotatedTriangle(3);

rotatedTriangle(5);

rotatedTriangle(9);


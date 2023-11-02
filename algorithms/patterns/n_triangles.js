/*
    https://www.codingninjas.com/studio/problems/n-triangles_6573689?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function nTriangles(dimension) {

    for(let i = 0; i < dimension; i ++) {

        for(let j = 1; j < i + 2; j ++) {
            process.stdout.write(j + ' ');
        }
        process.stdout.write('\n');
    }
}



nTriangles(4);

nTriangles(8);
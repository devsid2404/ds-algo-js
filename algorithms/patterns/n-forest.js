/*
    https://www.codingninjas.com/studio/problems/n-forest_6570177?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function forestVisualizer(dimension) {

    for(let i = 0; i < dimension; i ++) {

        for(let j = 0; j < dimension; j ++) {
            process.stdout.write('* ');
        }
        process.stdout.write('\n');
    }
}


forestVisualizer(4); 
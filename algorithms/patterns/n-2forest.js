/*
    https://www.codingninjas.com/studio/problems/n-2-forest_6570178?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function forestVisualizerBy2(dimension) {

    for(let i = 0; i < dimension; i ++) {

        for(let j = 0; j < i + 1; j ++) {
            process.stdout.write('* ')
        }
        process.stdout.write('\n')
    }
}

forestVisualizerBy2(4); 
forestVisualizerBy2(7); 
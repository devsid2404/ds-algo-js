/*
    https://www.codingninjas.com/studio/problems/seeding_6581892?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function seedingPattern(dimension) {

    for(let i = dimension; i > 0; i --) {

        for(let j = 1; j <= i; j ++) {
            process.stdout.write('* ');
        }
        process.stdout.write('\n');
    }
     
}


seedingPattern(5);

seedingPattern(9);
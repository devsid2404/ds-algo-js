/*
    https://www.codingninjas.com/studio/problems/number-crown_6581894?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function numberCrown(dimension) {

    let space = 2 * (dimension - 1);
    for(let i = 1; i <= dimension; i ++) {



        //  number
        for(let j = 1; j <= i; j ++) {
            process.stdout.write(j + ' ');
        }

        //  space
        for(let k = 1; k <= space; k ++) {
            process.stdout.write('  ');
        }

        //  number
        for(let l = i; l >= 1; l --) {
            process.stdout.write(l + ' ');
        }

        process.stdout.write('\n');
        space = space - 2;


    }

}

numberCrown(3);

numberCrown(9);
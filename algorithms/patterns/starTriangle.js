/*
    https://www.codingninjas.com/studio/problems/star-triangle_6573671?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function startTriangle(dimension) {



    for(let i = 1; i <= dimension; i ++) {

        const numberOfSpaces = dimension - 1 - i + 1;

        const numberOfPattern = (2 * i) - 1;


        //  Space
        for(let j = 1; j <= numberOfSpaces; j ++) {
            process.stdout.write('  ');
        }

        //  *
        for(let k = 1; k <= numberOfPattern; k ++) {
            process.stdout.write('* ');
        }

        //  Space
        for(let l = 1; l <= numberOfSpaces; l ++) {
            process.stdout.write('  ');
        }


        process.stdout.write('\n');
    }

}


startTriangle(3);


startTriangle(6);

startTriangle(9);
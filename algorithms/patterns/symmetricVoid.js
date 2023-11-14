/*
    https://www.codingninjas.com/studio/problems/symmetric-void_6581919?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function symmetricVoid(dimension) {



    for(let i = 1; i <= dimension; i ++) {

        const numberOfStars = dimension - i + 1;

        const numberOfSpaces = 2 * ( i - 1);

        


        //  *
        for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
        }

        //  Space
        for(let k = 1; k <= numberOfSpaces; k ++) {
            process.stdout.write('  ');
        }

        // *
        for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
        }

        process.stdout.write('\n');
    }

    for(let i = 1; i <= dimension; i ++) {

        const numberOfStars = i;

        const numberOfSpaces = (dimension - i) * 2;

        // *
        for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
        }

        //  Space
        for(let k = 1; k <= numberOfSpaces; k ++) {
            process.stdout.write('  ');
        }


        //  *
        for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
        }

        process.stdout.write('\n');
    }

}


symmetricVoid(3);


symmetricVoid(6);

symmetricVoid(9);
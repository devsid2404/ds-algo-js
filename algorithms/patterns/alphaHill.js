/*
    https://www.codingninjas.com/studio/problems/alpha-hill_6581921?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function alphaHill(dimension) {



    for(let i = 1; i <= dimension; i ++) {

        const numberOfSpaces = dimension - 1 - i + 1;

        const numberOfPattern = (2 * i) - 1;


        //  Space
        for(let j = 1; j <= numberOfSpaces; j ++) {
            process.stdout.write('  ');
        }

        let char = 'A';
        //  alphabets
        for(let k = 1; k <= numberOfPattern; k ++) {
            process.stdout.write(char + ' ');
            char = k > i ? String.fromCharCode(char.charCodeAt(0) - 1): String.fromCharCode(char.charCodeAt(0) + 1);
        }

        //  Space
        for(let l = 1; l <= numberOfSpaces; l ++) {
            process.stdout.write('  ');
        }


        process.stdout.write('\n');
    }

}


alphaHill(3);


alphaHill(6);

alphaHill(9);
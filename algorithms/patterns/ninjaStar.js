/*
    https://www.codingninjas.com/studio/problems/ninja-and-the-star-pattern-i_6581920?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function ninjaStar(dimension) {


    for(let i = 1; i <= dimension; i ++) {

        const numberOfStars = ((i === 1) || (i === dimension)) ? dimension : 1;

        const numberOfSpaces = ((i === 1) || (i === dimension)) ? 0 : dimension - 2;

        


        //  *
        for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
        }

        //  Space
        for(let k = 1; k <= numberOfSpaces; k ++) {
            process.stdout.write('  ');
        }

        // *
        if(i !== 1 && i !== dimension) {
            for(let j = 1; j <= numberOfStars; j ++) {
            process.stdout.write('* ');
            }
        }

        process.stdout.write('\n');
        

    }

}


ninjaStar(3);


ninjaStar(6);

ninjaStar(9);
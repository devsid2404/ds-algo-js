/*
    https://www.codingninjas.com/studio/problems/ninja-and-the-number-pattern-i_6581959?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/




function ninjaStar(dimension) {


    for(let i = 0; i < dimension * 2 - 1; i ++) {

        for(let j = 0; j < dimension * 2 - 1; j ++) {

            const topDistance  = i;
            const leftDistance  = j;
            const rightDistance  = (2*dimension - 1) - j ;
            const bottomDistance  = (2*dimension - 1) - i ;

            process.stdout.write(dimension - Math.min(topDistance, leftDistance, rightDistance, bottomDistance) + ' ');
            


        }



        process.stdout.write('\n');
        

    }

}


ninjaStar(3);


ninjaStar(6);

ninjaStar(9);
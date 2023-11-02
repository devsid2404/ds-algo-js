/*
    https://www.codingninjas.com/studio/problems/alpha-ramp_6581888?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_patternproblems
*/



function alphaRamp(dimension) {

    let char = 'A';
    for(let i = 1; i <= dimension; i ++) {

        for(let j = 1; j <= i; j ++) {
            process.stdout.write(char + ' ');
        }

        char = String.fromCharCode(char.charCodeAt(0) + 1);
        process.stdout.write('\n');
    }

}

alphaRamp(5);

alphaRamp(9);
/*
    The Cartesian product of two sets (arrays) A and B, denoted A × B, is the set (array)
    of all ordered pairs (a, b) where a is in A and b is in B.
*/


// cartesian product odf 2 sets
function cartesianProduct(setA, setB) {
    if(!setA || !setB || !setA.length || !setB.length) {
        return null;
    }

    const product = [];


    for(let indexA = 0; indexA < setA.length; indexA++) {

        for(let indexB = 0; indexB < setB.length; indexB++) {

            product.push([setA[indexA], setB[indexB]]);

        }
    }


    return product;

}




console.log('cartesianProduct ===>', cartesianProduct([1, 2], [3, 5]));

/* intersection

Write a code to get intersection between each set of arrays 

each element can repeat itself in an array

Question=> https://quicksell.notion.site/JavaScript-Intersection-of-Multiple-Arrays-b5973dad5eb0443382fd82042efe010d
*/


function intersection(...arrays) {
    const newMap = new Map();

    arrays.forEach((array, index) => {

        for(let i = 0; i < array.length; i++ ) {

            if(newMap.has(array[i])) {

                if (newMap.get(array[i]).arrayIndex === index) continue;

                newMap.set(array[i], { arrayIndex: index, value: newMap.get(array[i]).value + 1});
            } else {
                newMap.set(array[i],  { arrayIndex: index, value: 1});
            }
           
           
        }

    });

    const commonElements = [];

    newMap.forEach((value, key) => {
        if(value.value === arrays.length) commonElements.push(key);
    });

    return commonElements;
    

}

console.log(intersection(
    [1, 9, 9, 9, 5, 9],
    [1, 3, 1, 5, 3, 3, 3, 3, 3, 3],
    [1, 5, 8],
    [100, 150, 300, 500, 1, 5]
));


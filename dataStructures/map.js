/*
Map data structure
 - key-value 
 - key - any data type
 - ordered
 - iterable
 - just store data ,no functions like object
*/


const newMap = new Map([['a', 1], ['b', 2]]);

newMap.set('c', 4);
newMap.delete('b', 4);

for ( const [key, value] of newMap) {
    console.log(`${key}: ${value}`);
}

console.log('map size ->', newMap.size);
console.log('map has ->', newMap.has('a'));

newMap.clear();

console.log('map after clearing ->', newMap);






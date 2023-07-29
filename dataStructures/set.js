/*
Set data structure
 - hold collection of value
 - values are unique 
 - can contain different data type (sting, bool, object)
 - dynamically sized
 - do not maintain an insertion order
 - iterable - can be used with a for loop
 - searching and deleting is faster as compared to an array
*/


const set = new Set([1,2,4,6,7]);

set.add(6);
set.add(3);

for(const item of set) {
    console.log('item in set -->', item);
}

console.log('size of set -->', set.size);

console.log('does set have 4? -->', set.has(4));

set.delete(4);
console.log('does set have 4? -->', set.has(4));

set.clear();

console.log('after clearing set ==>', set);
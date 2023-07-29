/*
Array data structure
 - hold collection of value
 - can contain different data type (sting, bool, object)
 - dynamically sized
 - Maintain an insertion order
 - 0 indexed
 - iterable - can be used with a for loop
*/


const newArray = [1, 3, 5, 'ww', true];
 
newArray.push(4); // add at end of array
newArray.unshift(0); // add at start of array

newArray.pop(); // remove last element
newArray.shift(); // remove first element


/* time complexity in array

- Insert & remove from end -> O(1)
- Insert & remove from beginning -> O(n)
- Access an element --> O(1)
- Search an element --> O(n)
- push and pop --> O(1)
 - shift / unshift / concat / slice / splice / forEach / map / filter / reduce --> O(n) 

*/
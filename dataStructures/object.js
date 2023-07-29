/*
Object data structure
 - key-value 
 - key -> key || symbol data type
 - can contain different data type (sting, bool, object)
*/


const newObject = {
    name: "john",
    age: 24,
    'new_date': 45,
    newFunction : () => {
        console.log(this.name);
    }
};

newObject.ss = "ss";


console.log(newObject.name);
console.log(newObject.age);
console.log(newObject['new_date']);


/* time complexity in array

- Insert & remove -> O(1)
- Access an key --> O(1)
- Search an key --> O(n)
- Object.keys() & Object.values() & Object.entries() --> O(n)
*/
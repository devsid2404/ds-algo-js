/*
Hash Table
 - key-value 
 - Similar to Objects and Map

 Usage 
 - Database Indexing
 - Caches
*/


class HashTable {

    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {

        let total = 0;
        for(let i = 0; i < key.length; i ++) {
            //  can use a  better hashing algorithm to avoid collision
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }


    set(key, value) {
        const index = this.hash(key);
        this.table[index] =  value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(let i = 0; i < this.size; i ++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }

}



const newHashTable = new HashTable(40);

newHashTable.set('name', 'sid');
newHashTable.set('lastName', 'shetty');

newHashTable.display();

console.log(newHashTable.get('lastName'));

newHashTable.remove('name');

newHashTable.display();
/*
Stack data structure
 - derived from other ds
 - FIFO principle
 - two main operation - enqueue & dequeue

 Usage 
 - cpu task scheduling
 - callback queue in js

*/

class Queue {

    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }


    //O() -> O(1)
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    //O() -> O(1)
    dequeue() {
        const frontElement = this.items[this.front];
        delete this.items[this.front];
        this.front++; 
        return frontElement;
    }

    isEmpty() {
        return this.rear - this.front;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear -  this.front;
    }

    print() {
        console.log(this.items);
    }

}



const newQueue = new Queue();

newQueue.enqueue(24);
newQueue.enqueue(54);

newQueue.print();

newQueue.dequeue();

newQueue.print();

newQueue.enqueue(75);
newQueue.print();

console.log(newQueue.size());
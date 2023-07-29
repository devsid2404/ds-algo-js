/*
Stack data structure
 - derived from other ds
 - FIFO principle
 - fixed length

 Usage 
 - Clock
 - Streaming data

*/

class CircularQueue {

    constructor(length) {
        this.items = new Array(length);
        this.capacity = length;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }


    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }


    //O() -> O(1)
    enqueue(element) {

        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1) {
                this.front = this.rear;
            }
        }

    }

    //O() -> O(1)
    dequeue() {
        
        if(!this.isEmpty()) {

            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength -= 1;

            if(this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }

            return item;

        }

        return null;


    }

    

    print() {
        console.log(this.items);
    }

}



const newQueue = new CircularQueue(5);

newQueue.enqueue(24);
newQueue.enqueue(54);

newQueue.print();

newQueue.dequeue();

newQueue.print();

newQueue.enqueue(75);
newQueue.print();

newQueue.enqueue(75);
newQueue.print();

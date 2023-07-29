
/*
Stack data structure
 - derived from other ds
 - LIFO principle
 - two main operation - push & pop

 Usage 
 - trace history
 - undo operation
 - call stack in JS runtime

*/


class Stack {
    constructor(firstElement) {
        this.items = firstElement ? [firstElement]: [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    //get last element
    peek() {
        return this.items[this.items.length - 1];
    }

    size = () => this.items.length;

    isEmpty() {
        return this.items.length === 0;
    }

    print = () => {
        console.log(this.items.toString());
    }
}

const newStack = new Stack(34);

newStack.push(34);
newStack.push(45);
newStack.push(10);


newStack.print();

newStack.pop();

newStack.print();

console.log('stack size -->', newStack.size());



module.exports = Stack;
/*
Linked List data structure
 - linear data structure
 - node consists of data structure and node to next node
 - element can be easily inserted or removed without reallocation
 - operations supported => insert, delete, search

 Usage 
 - Stack & queue
 - Image Viewer

 Implementation => collections of nodes
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty = () => this.size === 0;

    getSize = () => this.size;

    // Adds to start of list 
    // 0(n) => O(1)
    prePend = (value) => {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.size === 0) {
            this.tail = newNode;
        }

        this.size++;
    }

    // Adds to end of list
    append = (value) => {
        const newNode = new Node(value);
        newNode.next = null;

        if(this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.size++;
    }

    // insert at given index
    insert(value, index) {

        if (index < 0 || index > this.size) throw new Error(`Cannot add value in given index: ${index}`);
        if (index === 0) {
            this.prePend(value);
        } else {

            const newNode = new Node(value);


            let previousNode = this.head;

            // reach the previous node
            for(let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;
            }

            newNode.next = previousNode.next;
            previousNode.next = newNode;

            if(index === this.size -1) this.tail = newNode;

            this.size++;

        }
    }

    // remove at a given index
    remove(index) {
        if (index < 0 || index > this.size) throw new Error(`Cannot add value in given index: ${index}`);

        let nodeToRemove = this.head;
        if(index === 0) {
            this.head = nodeToRemove.next;
        } else {
            let previousNode = null;
            for(let i = 0; i < index; i++) {
                previousNode = nodeToRemove;
                nodeToRemove = nodeToRemove.next;
            }
            previousNode.next = nodeToRemove.next;
        }
        this.size--;
    }

    //reverse the sequence of the linked list
    reverse() {

        if(this.size <= 1) return;

        let previousNode = null;

        let currentNode = this.head;

        let nextNode = this.head.next;

        while(currentNode) {

            if(currentNode.next === null) this.head = currentNode;
            if(previousNode === null) this.tail = currentNode;
            
            //changing the sequence
            currentNode.next = previousNode;


            // resetting value
            previousNode = currentNode;
            currentNode = nextNode;
            nextNode = nextNode?.next;
        }

    }

    print = () => {

        let currentPointer = this.head;
        let listValues = '';

        while(currentPointer) {
            listValues += `${currentPointer.value}=>`
            currentPointer = currentPointer.next;
        }
        console.log(listValues);

    }




}



const newLinkedList = new LinkedList();

newLinkedList.append(100);
newLinkedList.prePend(34);
newLinkedList.prePend(24);
newLinkedList.prePend(79);
newLinkedList.prePend(79);
newLinkedList.append(75);

newLinkedList.insert(44, 3);

newLinkedList.remove(4);

newLinkedList.print();
newLinkedList.reverse();
newLinkedList.print();
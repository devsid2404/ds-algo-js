/*
Doubly Linked List data structure
 - linear data structure
 - node consists of data structure and node to next node and previous node
 - element can be easily inserted or removed without reallocation
 - operations supported => insert, delete, search

 Implementation => collections of nodes
*/





class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}



class DoublyLinkedList {


    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prePend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.size++;

    }


    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }


    print() {
        if (this.isEmpty()) {
          console.log("List is empty");
        } else {
          let curr = this.head;
          let list = "";
          while (curr) {
            list += `${curr.value}<->`;
            curr = curr.next;
          }
          console.log(list);
        }
      }

}



const newLinkedList = new DoublyLinkedList();

newLinkedList.append(100);
newLinkedList.prePend(34);
newLinkedList.prePend(24);
newLinkedList.prePend(79);
newLinkedList.prePend(79);
newLinkedList.append(75);


newLinkedList.print();
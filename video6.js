/**
 * 1. Single Linked List
 * 2. Doubly Linked List
 * 3. Circle Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

console.log(head);

let temp = head;

while (temp !== null) {
  console.log(temp.value, "-> ");
  temp = temp.next;
}

console.log(temp);

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
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // * If the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // * If the linked list isn't empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    // * If the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // * If the linked list isn't empty
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index outof bound");
      return undefined;
    }

    // * if the insert is in the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }

    // * if the insert is in the end of the list
    if (index === this.length) {
      return this.append(value);
    }

    // * if the insert is in the middle

    // * find the leading node
    const leadingNode = this._travereToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const removeItem = this.head.value;
      this.head = this.head.next;

      if (this.length === 0) {
        this.tail = null;
      }

      this.length--;
      return removeItem;
    }

    const leadingNode = this._travereToIndex(index - 1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    if (leadingNode === null) {
      this.tail = leadingNode;
    }
  }

  _travereToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(` -> `), "-> null");
  }
}

const linkedList = new LinkedList();

linkedList.append("A"); // * 0
linkedList.append("B"); // * 1
linkedList.append("D"); // * 2

linkedList.print();

linkedList.remove(2);
linkedList.remove(0);
linkedList.remove(0);
linkedList.print();

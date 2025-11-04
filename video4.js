// * Array implemantion

class Queue {
  constructor() {
    this.items = [];
  }

  // 0(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // 0(1)
  enqueue(value) {
    this.items.push(value);
  }

  // 0(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  // 0(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  // 0(n)
  print() {
    console.log("Start -> ", [...this.items].join(" -> "), " -> end");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print();

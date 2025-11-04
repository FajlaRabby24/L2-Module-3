// let count = 5;

// const counter = (amount) => {
//   count += amount;
//   return count;
// };

// console.log(counter(2));
// console.log(counter(2));
// console.log(counter(2));

// const createCounter = () => {
//   let count = 0;

//   return (amount) => {
//     count += amount;
//     return count;
//   };
// };

// const counter = createCounter();

// console.log(counter(4));
// console.log(counter(4));

class Counter {
  constructor(count = 0) {
    this.count = count;
  }

  add(amount) {
    this.count += amount;
  }

  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);
counter1.add(4);
counter1.add(2);
counter1.print();

const counter2 = new Counter();
counter2.add(40);
counter2.add(10);
counter2.print();

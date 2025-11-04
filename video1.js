// ---------- stateless vs statefull ----------

// state less
// const counter = (amount) => {
//   let count = 0;

//   count = count + amount;

//   return count;
// };

// console.log(counter(3));
// console.log(counter(2));

// statefull
const counter = {
  count: 0,
  add(amount) {
    this.count += amount;
  },
  print() {
    console.log(this.count);
  },
};

counter.add(3);
counter.add(2);

counter.print();

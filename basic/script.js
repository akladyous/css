const symbol1 = Symbol('paolo');
const obj1 = { [symbol1]: 'boula' };

console.log(obj1.symbol1);
console.log(obj1[symbol1]);

class Book1 {}
console.log(new Book1().toString());

class Book {
  get [Symbol.toStringTag]() {
    return 'Book Class';
  }
}
console.log(new Book().toString());

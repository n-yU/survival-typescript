const product = {
  name: 'ミネラルウォーター',
  price: 100,
  getTaxIncludedPrice: function () {
    return Math.floor(this.price * 1.1);
  },
  shomikigen: new Date('2022-01-20'),
};
console.log(product);
console.log(product.getTaxIncludedPrice());

const object_ = {
  printHello1: function () {
    console.log('Hello');
  },
  printHello2() {
    console.log('Hello');
  },
};
object_.printHello1();
object_.printHello2();

const calculator = {
  sum(a: number, b: number) {
    return a + b;
  },
};
console.log(calculator.sum(1, 1));
// calculator.sum = null;
// calculator.sum(1, 1);

const increment_0 = function increment(n: number) {
  return n + 1;
};
console.log(increment_0(0));
console.log(increment_0);

const increment_1 = function (n: number) {
  return n + 1;
};
console.log(increment_1(41));

const test = {
  f: function () {
    console.log('test');
  },
};
test.f();

const callFunc = function (f: () => void) {
  f();
};
callFunc(test.f);

type UseString = (value: string) => void;
let useString: UseString;
useString = function (value) {
  console.log(value + 'World!');
};
useString('Hello, ');

const getZero = function () {
  return 0;
};
const num = getZero();
console.log(num);

const factorial = function fact(n: number): number {
  if (n <= 1) {
    return 1;
  }
  //   return n * factorial(n - 1);
  return n * fact(n - 1);
};
console.log(factorial(5));

const factorial_1 = function (n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorial_1(n - 1);
};
console.log(factorial_1(6));

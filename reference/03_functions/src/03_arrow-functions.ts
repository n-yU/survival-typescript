const increment = (n: number) => {
  return n + 1;
};
console.log(increment, increment(0));

const getOne = () => {
  return 1;
};
console.log(getOne());

const increment_1 = (n: number) => n + 1;
console.log(increment_1(41));

const getObj_0 = (n: number) => {
  foo: n + 1;
};
const getObj_1 = (n: number) => ({ foo: n + 1 });
console.log(getObj_0(10));
console.log(getObj_1(20));

console.log([1, 2, 3].map((num) => num + 1));

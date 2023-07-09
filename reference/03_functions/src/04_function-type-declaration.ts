type Increment = (num: number) => number;
const increment_0: Increment = (num: number): number => num + 1;
const increment_1: Increment = function (num: number): number {
  return num + 1;
};
console.log(increment_0(10), increment_1(20));

const increment_2: Increment = (num) => num + 1;
console.log(increment_2(30));

type Increment_ = {
  (num: number): number;
};
const increment_3: Increment_ = (num) => num + 1;
console.log(increment_3(40));

type Increment__ = typeof increment_2;
const increment_4: Increment__ = (num) => num + 1;
console.log(increment_4(50));

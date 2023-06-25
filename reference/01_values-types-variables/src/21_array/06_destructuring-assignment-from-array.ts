const oneToFive = [1, 2, 3, 4, 5];
const [one, two, three] = oneToFive;
console.log(one);
console.log(two);
console.log(three);

const oneToTwo = [1, 2];
const [one_1, two_1, three_1] = oneToTwo;
console.log(one_1, two_1, three_1);

const num: number = one;
console.log(num, typeof num);

const twoByTwo = [
  [1, 2],
  [3, 4],
];
const [[one_2, two_2], [three_2]] = twoByTwo;
console.log(one_2);
console.log(two_2);
console.log(three_2);

const [, , , four, five] = oneToFive;
console.log(four);
console.log(five);

const [one_3, ...rest] = oneToFive;
console.log(one);
console.log(rest);

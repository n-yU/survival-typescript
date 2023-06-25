const x = 100n;
console.log(x, typeof x);

const x_ = BigInt(101);
const y = BigInt('9007199254740991');
console.log(x_, typeof x_, y, typeof y);

// console.log(2n + 3);
const i = 2n + BigInt(3);
console.log(i);

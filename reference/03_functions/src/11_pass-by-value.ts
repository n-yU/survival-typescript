function change(n: number) {
  n = 2;
}
let n = 1;
change(n);
console.log(n);

const x = { n: 1 };
let y = x;
y.n = 2;
console.log(x, y);

y = { n: 2 };
y.n = 3;
console.log(x, y);

function change_1(y: { n: number }) {
  y.n = 2;
}
const x_1 = { n: 1 };
change_1(x_1);
console.log(x_1);

function change_2(y: { n: number }) {
  y = { n: 2 };
  y.n = 3;
}
const x_2 = { n: 1 };
change_2(x_2);
console.log(x_2);

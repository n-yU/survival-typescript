function foo({ a, b }) {
  console.log(a, b);
}
foo({ a: 1, b: 2, c: 3 });

function foo1({ a: x, b: y }) {
  console.log(x, y);
}
foo1({ a: 1, b: 2 });

function bar([a, b]) {
  console.log(a, b);
}
bar([1, 2, 3]);

const foo2 = ({ a, b }) => {
  console.log(a, b);
};
const bar2 = ([a, b]) => {
  console.log(a, b);
};
foo2({ a: 3, b: 4 });
bar2([3, 4]);

function foo3({ a }) {
  console.log(a);
}
function bar3([a]) {
  console.log(a);
}
foo3({});
bar3([]);

function foo4({ a = 0 }) {
  console.log(a);
}
function bar4([a = 0]) {
  console.log(a);
}
foo4({});
bar4([]);

function foo5({ a, b } = { a: 0, b: 0 }) {
  console.log(a, b);
}
foo5();
foo5({ a: 1 });

function bar5([a, b] = [0, 0]) {
  console.log(a, b);
}
bar5();
bar5([1]);

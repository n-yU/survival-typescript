function foo(x = 1) {
  console.log(x);
}
foo();
foo(undefined);
foo(null);

function foo_1(x, y = 2, z) {
  console.log(x, y, z);
}
foo_1(1, undefined, 3);

function foo_2(x = 2 * 2) {return x}
function foo_3(x = parseInt('1.5')) {return x}
console.log(foo_2());
console.log(foo_3());

// async function foo_4(x = await Promise.resolve(1)) {}
// console.log(foo_4);

function foo_4(x = 1) {return x}
console.log(foo_4());

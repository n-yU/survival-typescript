function foo({ a, b }: { a: number; b: number }) {
  console.log(a, b);
}
function bar([num1]: number[]) {
  console.log(num1);
}
foo({ a: 1, b: 2 });
bar([1, 2]);

function foo1({ a }: { a: number }) {}
function bar1([a]: [number]) {}
// foo1({});
// bar1([]);

function foo2({ a = 0 }: { a?: number | string }) {
  console.log(a);
}
foo2({});
function foo3({ a = 0 }) {
  console.log(a);
}
foo3({});

function foo4({ a }: { a: number } = { a: 0 }) {
  console.log(a);
}
foo4();
foo4({ a: 1 });

type Obj = { a?: number; b?: number };
function foo5({ a = 0, b = 0 }: Obj = { a: 3, b: 4 }) {
  console.log(a + b);
}
foo5();
foo5({});
foo5({ a: 1 });
foo5({ a: 1, b: 2 });

function bmi({ heightCm, weightKg }: { heightCm: number; weightKg: number }) {
  const heightM = heightCm / 100;
  return weightKg / heightM ** 2;
}
const heightCm = 170;
const weightKg = 65;
console.log(bmi({ heightCm: heightCm, weightKg: weightKg }));
console.log(bmi({ heightCm, weightKg }));

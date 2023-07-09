function print(message: string): void {
  console.log(message);
}
print('aiueo');

function fn() {}
const result = fn();
console.log(result);

function fn_(): undefined {}
console.log(fn_());

function getIfExists(numbers: number[], search: number): number | undefined {
  if (numbers.includes(search)) {
    return search;
  }
  return undefined;
}
console.log(getIfExists([3, 4, 1, 8], 1));
console.log(getIfExists([3, 4, 1, 8], 2));

const v: void = undefined;
// const u: undefined = v;
console.log(v, typeof v);

function f1(): void {}
function f2(): undefined {
  return;
}

let mayBeNumber: number | undefined;
// mayBeNumber = f1();
mayBeNumber = f2();
console.log(mayBeNumber);

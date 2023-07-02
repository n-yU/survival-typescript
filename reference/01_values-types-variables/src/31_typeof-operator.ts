for (const obj of [
  true,
  0,
  'Hello World',
  undefined,
  null,
  Symbol(),
  1n,
  [1, 2, 3],
  { a: 1, b: 2 },
  () => {},
]) {
  console.log(typeof obj);
}

const n: unknown = 'aiueo';
if (typeof n === 'string') {
  console.log(n.toUpperCase());
}

function isObject(value: any) {
  return typeof value === 'object';
}
console.log(isObject(null));

function isObject_1(value: any) {
  return value !== null && typeof value === 'object';
}
console.log(isObject_1(null));

console.log(Array.isArray([1, 2, 3]));

function hello() {
  return 'hello';
}
console.log(hello());

function increment(num: number): number {
  return num + 1;
}
console.log(increment(41));

function increment_1(num: number) {
  return num + 1;
}
console.log(increment_1(22), typeof increment_1(22));

function getFirst(items: number[]) {
  if (typeof items[0] === 'number') {
    return items[0];
  }
  return null;
}
console.log(getFirst([1, 2, 3]));

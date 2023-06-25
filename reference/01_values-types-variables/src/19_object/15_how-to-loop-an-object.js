const foo = { a: 1, b: 2, c: 3 };
for (const prop in foo) {
  console.log(prop, foo[prop]);
};
console.log(Object.getPrototypeOf(foo) === Object.prototype);

const foo_1 = { a: 1 };
const date = new Date();
const arr = [1, 2, 3];
console.log(foo_1.hi, date.hi, arr.hi);
Object.prototype.hi = 'Hi!';
console.log(foo_1.hi, date.hi, arr.hi);

Object.prototype.hi = 'Hi!';
for (const prop in foo) {
  console.log(prop, foo[prop]);
};

Object.prototype.hi = "Hi!";
for (const prop in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, prop)) {
    console.log(prop, foo[prop]);
  }
};

for (const [key, value] of Object.entries(foo)) {
  console.log(key, value);
};

for (const key of Object.keys(foo)) {
  console.log(key);
};

for (const value of Object.values(foo)) {
  console.log(value);
};

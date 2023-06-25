let value: any;
console.log(value, typeof value);
[1, 'string', { name: 'オブジェクト' }].forEach((v) => {
  value = v;
  console.log(value, typeof value, typeof v);
});

const str: any = 123;
// console.log(str.toLowerCase());

// function hello(name) {
//   console.log(`Hello, ${name.toUpperCase()}`);
// }
// hello('World!');
// hello(1);

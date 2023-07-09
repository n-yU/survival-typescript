function hello() {
  return 'Hello World';
}
hello.prop = 123;

console.log(typeof hello);
console.log(hello());
console.log(hello.prop);

function hello(person?: string) {
  console.log('Hello', person);
}
hello();
hello('alice');

// function hello_1(person?: string) {
//   return 'Hello ' + person.toUpperCase();
// }

function hello_1(person?: string) {
  if (typeof person === 'undefined') {
    person = 'anonymous';
  }
  return 'Hello ' + person.toUpperCase();
}
console.log(hello_1());
console.log(hello_1('alice'));

function hello_2(person?: string) {
  person ??= 'anonymous';
  return 'Hello ' + person.toUpperCase();
}
console.log(hello_2());
console.log(hello_2('alice'));

function hello_3(person: string = 'anonymous') {
  return 'Hello ' + person.toUpperCase();
}
console.log(hello_3());
console.log(hello_3('alice'));

function hello_4(person?: string) {
  if (typeof person === 'undefined') {
    return 'Hello ANONYMOUS';
  }
  return 'Hello ' + person.toUpperCase();
}
console.log(hello_4());
console.log(hello_4('alice'));

function hello_5(person: string | undefined) {
  console.log('Hello', person);
}
// hello_5();
hello_5(undefined);
hello_5('alice');

// function func(foo?: string, bar: string) {}

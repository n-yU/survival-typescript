let a: object = {};
let b: Object = {};
let c: {} = {};
console.log(a, b, c);
console.log(typeof a, typeof b, typeof c);

a = { x: 1 };
console.log(a);
a = [1, 2, 3];
console.log(a);
a = /a-z/;
console.log(a);
// a_ = 1;
// a_ = true;
// a_ = 'string';

b = 1;
console.log(b);
b = true;
console.log(b);
b = 'string';
console.log(b, typeof b);
// b = null;
// b = undefined;

c = 1;
console.log(c);
c = true;
console.log(c);
c = 'string';
console.log(c, typeof b);
// c = null;
// c = undefined;

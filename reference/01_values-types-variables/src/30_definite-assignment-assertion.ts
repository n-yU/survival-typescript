let num: number;
// console.log(num * 2);

let num_1: number;
initNum();
// console.log(num_1 * 2);
function initNum() {
  num_1 = 2;
}

// class Foo {
//   num: number;
// }
// console.log(new Foo());

// class Foo_1 {
//   num1: number = 1;
//   num2: number;
//   num3: number;
//   constructor() {
//     this.num2 = 1;
//     this.initNum3();
//   }
//   initNum3() {
//     this.num3 = 1;
//   }
// }
// console.log(new Foo_1());

let num_2!: number;
console.log(num_2);
initNum_2();
console.log(num_2 * 2);
function initNum_2() {
  num_2 = 2;
}

class Foo_2 {
  num!: number;
}
console.log(new Foo_2());

let num_3: number;
console.log(num_3!);
initNum_3();
console.log(num_3! * 2);
function initNum_3() {
  num_3 = 2;
}

let num_4: number;
num_4 = initNum_4();
console.log(num_4! * 2);
function initNum_4() {
  return 2;
}

let num_5: number | undefined;
if (typeof num_5 === 'number') {
  console.log(num_5 * 2);
} else {
  console.log(num_5!);
}
initNum_5();
if (typeof num_5 === 'number') {
  console.log(num_5 * 2);
} else {
  console.log(num_5!);
}
function initNum_5() {
  num_5 = 4;
}

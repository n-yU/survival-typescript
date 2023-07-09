const arr_1 = [1, 2, 3].map(function (n) {
  return n + 1;
});
const arr_2 = [1, 2, 3].map((n) => n + 1);
console.log(arr_1, arr_2);

// function Cat(name: string) {
//   this.name = name;
// }
// const cat = new Cat("ミケ");
// console.log(cat);

// const Cat = (name: string) => {};
// const cat = new Cat("ミケ");
// console.log(cat);

// function showThis() {
//   console.log(this);
// }
// showThis();

const oneSecond = 1000;
const timer = {
  message: '時間です！',
  start: function () {
    console.log(this);

    // setTimeout(function () {
    //   console.log(this.message);
    // }, oneSecond);

    setTimeout(() => {
      console.log(this.message);
    }, oneSecond);
  },
};
timer.start();

const showThis = () => {
  console.log(this);
};
const obj = { name: 'foo' };
showThis.bind(obj)();

function foo(n1: number, n2: number, n3: number) {
  console.log(arguments);
}
foo(1, 2, 3);

const foo_1 = (...args: any) => {
  console.log(args);
};
foo_1(1, 2, 3);

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
for (const value of generateNumbers()) {
  console.log(value);
}

// function foo_2(n, n, n) {
//   console.log(n);
// }
// foo_2(1, 2, 3);

// const foo_2 = (n, n) => console.log(n);
// function foo_2(a: number, a: number) {}

var value = 1;
var value = 2;
console.log(value);

// let value_1 = 1;
// let value_1 = 2;

function foo_2() {
  console.log('1つ目の関数');
}
// function foo_2() {
//   console.log("2つ目の関数");
// }
foo_2();

var foo3 = () => {
  console.log('test');
};
var foo3 = () => {
  console.log('tset');
};
foo3();

// console.log(value_1);
// var value_1 = 1;

foo_3();
function foo_3() {
  console.log('実行しました');
}

const nums = [1, 2, 3, 4];
const even = nums.filter(function (n) {
  return n % 2 === 0;
});
console.log(even);

const even_1 = nums.filter((n) => n % 2 === 0);
console.log(even_1);

const taroYamada = {
  firstName: 'Taro',
  lastName: 'Yamada',

  //   fullName1: function () {
  //     return this.firstName + " " + this.lastName;
  //   },

  // fullName2: () => {
  //   return this.firstName + " " + this.lastName;
  // },

  fullName: () => {
    return taroYamada.firstName + ' ' + taroYamada.lastName;
  },
};
// console.log(taroYamada.fullName1());
// console.log(taroYamada.fullName2());
console.log(taroYamada.fullName());

const main = () => {
  step1();
  step2();
  step3();
};
const step1 = () => {
  console.log('step.1');
};
const step2 = () => {
  console.log('step.2');
};
const step3 = () => {
  console.log('step.3');
};
main();

const str = 'foo';
const obj_ = { value: str };
const func = (n: number) => n + 1;
const nums_ = [1, 2, 3];
console.log(str, obj_, func, nums_);

const str_ = 'foo';
const obj__ = { value: str };
function func_(n: number) {
  return n + 1;
}
const nums__ = [1, 2, 3];
console.log(str_, obj__, func_, nums__);

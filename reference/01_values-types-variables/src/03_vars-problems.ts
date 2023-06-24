var name_ = 'taro';
console.log(name_);

var name_undefined;
console.log(name_undefined);

function test() {
  var x = 1;
  const x_ = 1;
  console.log(x, x_);
  var x = 2;
  //   const x_ = 2;
  console.log(x);
}
test();

// console.log(greeting);
// var greeting = 'こんにちは';
// console.log(x);
// let x = 1;
// console.log(y);
// const y = 2;

function output() {
  var x = 1;
  {
    // console.log(x);
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
output();

function print() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
print();

function print_() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x);
  }
  console.log(x);
}
print_();

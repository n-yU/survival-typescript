const x = 1;
// x = 2;
const x_ = { y: 1 };
console.log(x_);
// x_ = { y: 2 };
x_.y = 2;
console.log(x_);

let readonlyObj_: { readonly x: number } = { x: 1 };
// obj.x = 2;
let readonlyObj__: { readonly x: number } = { x: 1 };
console.log(readonlyObj__);
readonlyObj__ = { x: 2 };
console.log(readonlyObj__);

const obj__: { readonly x: number } = { x: 1 };
// obj__ = { x: 2 };
// obj__.x = 2;
console.log(obj__);

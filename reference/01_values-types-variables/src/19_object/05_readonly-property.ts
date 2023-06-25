let obj: {
  readonly foo: number;
};
obj = { foo: 1 };
// obj.foo = 2;
console.log(obj);

let obj_: {
  readonly foo: {
    bar: number;
  };
};
obj_ = {
  foo: {
    bar: 1,
  },
};
// obj_.foo = { bar: 2 };
console.log(obj_);
obj_.foo.bar = 2;
console.log(obj_);

let readonlyObj: Readonly<{
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: {
    x: number;
  };
}>;
readonlyObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: { x: 100 } };
// readonlyObj.a = 2;
console.log(readonlyObj, typeof readonlyObj);
readonlyObj.f.x = 1;
console.log(readonlyObj);

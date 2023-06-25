let box: { width: number; height: number };
box = { width: 1080, height: 720 };
// box = { width: '1080', height: 720 };
// box = { width: 1080 };
console.log(box);

let box_: {
  width: number;
  height: number;
};
box_ = { width: 1080, height: 720 };
console.log(box_);

type Box = { width: number; height: number };
let box__: Box = { width: 1080, height: 720 };
console.log(box__);

let calculator_: {
  sum(x: number, y: number): number;
  sub: (x: number, y: number) => number;
};
calculator_ = {
  sum(x, y) {
    return x + y;
  },
  sub(x, y) {
    return x - y;
  },
};
console.log(calculator_.sum(1, 2), calculator_.sub(1, 2));

let foo: Record<string, number>;
foo = { a: 1, b: 2 };
console.log(foo, foo.a, foo.b, foo.z);

let boxObject: object;
boxObject = { width: 1080, height: 720 };
console.log(boxObject);
// console.log(boxObject.width);
boxObject = { aiueo: 1080, 123: 720 };
console.log(boxObject);

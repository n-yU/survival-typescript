let obj: {
  [K: string]: number;
};
obj = { a: 1, b: 2 };
obj.c = 4;
obj['d'] = 5;
console.log(obj);

const obj_: { [K: string]: number } = { a: 1 };
const b: number | undefined = obj_.b;
console.log(b);

let obj2: Record<string, number> = { z: 4 };
obj = obj2;
console.log(obj);

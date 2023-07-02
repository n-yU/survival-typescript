let value: unknown;
value = 1;
value = 'string';
value = { name: 'オブジェクト' };

const value_1: any = 10;
const int: number = value_1;
const bool: boolean = value_1;
const str: string = value_1;
const obj: object = value_1;
console.log(int, bool, str, obj);

const value_2: unknown = 10;
// const int: number = value;
// const bool: boolean = value;
// const str: string = value;
// const obj: object = value;
const any: any = value_2;
const unknown: unknown = value_2;
console.log(value_2, any, unknown);

console.log(value_1.toFixed());
// console.log(value_2.toFixed());
const obj_1: unknown = { name: 'オブジェクト' };
console.log(obj_1);
// console.log(obj_1.name);

const value_3: unknown = 'abcde';
if (typeof value_3 === 'string') {
  console.log(value_3.toUpperCase());
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
const value_4: unknown = { a: 1, b: 2 };
if (isObject(value_4)) {
  console.log(Object.keys(value_4));
}

function isNumberArray(value: unknown): value is number[] {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((e) => typeof e === 'number');
}
const value_5: unknown = [1, 2, 3, 4, 5];
if (isNumberArray(value_5)) {
  console.log(value_5.map((e) => e.toPrecision(2)));
}

type Email = {
  from: string;
  to: string;
  title: string;
  subject: string;
};
function isEmail(value: unknown): value is Email {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const email = value as Record<keyof Email, unknown>;
  if (typeof email.from !== 'string') {
    return false;
  }
  if (typeof email.to !== 'string') {
    return false;
  }
  if (typeof email.title !== 'string') {
    return false;
  }
  return typeof email.subject === 'string';
}
const value_6 = {
  from: 'nyu@example.com',
  to: 'yun@example.com',
  title: 'hoge',
  subject: 'fuga',
};
if (isEmail(value_6)) {
  console.log(value_6);
}

const str_1 = 'a';
const num_1 = str_1 as unknown as number;
console.log(str_1, typeof str_1, num_1, typeof num_1);

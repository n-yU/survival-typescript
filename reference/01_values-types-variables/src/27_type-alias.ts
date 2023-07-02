type StringOrNumber = string | number;
const value: StringOrNumber = 123;
console.log(value, typeof value);

type Str = string;
type OK = 200;
type Numbers = number[];
type UserObject = { id: number; name: string };
type NumberOrNull = number | null;
type CallbackFunction = (value: string) => boolean;
const [str, ok, numbers, userObject, numberOrNull, callbackFunction]: [
  Str,
  OK,
  Numbers,
  UserObject,
  NumberOrNull,
  CallbackFunction
] = [
  'test',
  200,
  [1, 2, 3],
  { id: 42, name: 'nyU' },
  null,
  (x: string) => {
    return parseInt(x) > 0;
  },
];
console.log(str, ok, numbers, userObject, numberOrNull, callbackFunction('42'));

const str = 'abc';
const strObject = new String(str);
console.log(strObject.length, strObject.toUpperCase());
console.log(typeof str, typeof strObject);

console.log(str.length, str.toUpperCase());

// console.log(null.toString());
// console.log(undefined.toString());

const bool: Boolean = false;
const num: Number = 0;
const str_: String = '';
const sym: Symbol = Symbol();
const big: BigInt = 10n;
console.log(bool, num, str_, sym, big);
console.log(typeof bool, typeof num, typeof str_, typeof sym, typeof big);

const n1: Number = 0;
console.log(n1, typeof n1);
// const n2: number = n1;
const n1_: number = 1;
const n2: number = n1_;
console.log(n2);

console.log(n1_ * 2);
// console.log(n1 * 2);

const boolLike = {
  valueOf(): boolean {
    return true;
  },
};
const bool_: Boolean = boolLike;
console.log(bool_);

const num1: Number = 0;
const num2: number = 0;
console.log(num1, typeof num1, num2, typeof num2);

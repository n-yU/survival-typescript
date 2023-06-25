console.log(typeof 123, typeof -123, typeof 20.315);
console.log(0.1 === 0.1, 5.0 === 5);
console.log(0b1010, 0o755, 0xfff);
console.log(100_000_000, typeof 1_2_3_4_5);
// console.log(_100, 100_, 100_.0. 100._0, 1__00)

// console.log(5.toString())
console.log((5).toString());

const count: number = 123;
console.log(count);
const max: number = Math.pow(2, 53) - 1;
console.log(max);

const price = parseInt('百円');
console.log(price);
if (Number.isNaN(price)) {
  console.log('数値化できません');
}
// console.log(NaN == NaN, NaN === NaN);

console.log(1 / 0);

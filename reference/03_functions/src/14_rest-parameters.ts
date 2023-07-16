function func(...params: number[]) {
  console.log(params);
}
func(1, 2, 3);

function func_1(param1: number, ...params: number[]) {
  console.log(param1, params);
}
func_1(1, 2, 3);

// function func(...params1, ...params2) {}
// function func(...params, param1) {}

console.log(Math.max(1, 10, 100));
const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const highest = Math.max(scores);
// console.log(highest);

const highest = Math.max(...scores);
console.log(highest);

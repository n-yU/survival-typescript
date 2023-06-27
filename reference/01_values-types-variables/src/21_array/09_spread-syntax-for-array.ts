const arr = [1, 2, 3];
const arr2: number[] = [];
for (const item of arr) {
  arr2.push(item);
}
arr2.push(4);
console.log(arr, arr2);

const arr2_ = [...arr, 4];
console.log(arr2_);
console.log([0, ...arr, 4]);

const backup = [...arr];
arr.push(4);
console.log(arr);
console.log(backup);

const arr_3 = [1, [2, 3]];
const backup_3 = [...arr_3];
(arr_3[1] as number[]).push(4);
console.log('arr_3', arr_3);
console.log('backup_3', backup_3);

const backup_4 = arr.concat();
arr.push(5);
console.log(arr);
console.log(backup_4);

const concated = [...arr, ...arr2, ...backup_4];
console.log(concated);

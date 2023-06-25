const list1 = [1, 2, 3];
const list2 = [1, 2, 3];
console.log(list1 == list2);

const arr = [1, 2, 3];
const backup = arr;
arr.push(4);
console.log(arr);
console.log(backup);

const backup_1 = [...arr];
arr.push(5);
console.log(arr);
console.log(backup_1);

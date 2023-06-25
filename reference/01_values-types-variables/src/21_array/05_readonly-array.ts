const nums: readonly number[] = [1, 2, 3];
// nums[1] = 4;
console.log(nums);

const nums_1: ReadonlyArray<number> = [1, 2, 3];
// nums_1[1] = 4;
console.log(nums_1);

// nums.push(4);
console.log('push' in nums);

const readonlyNumbers: readonly number[] = [1, 2, 3];
// const writableNumbers: number[] = readonlyNumbers;
console.log(readonlyNumbers);

const writableNumbers: number[] = readonlyNumbers as number[];
console.log(writableNumbers);

const readonlyNumbers_1: readonly number[] = writableNumbers;
console.log(readonlyNumbers_1);

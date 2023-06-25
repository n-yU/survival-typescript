const nums1 = [1, 2];
const nums2 = [3, 4];
const all = nums1.concat(nums2);
console.log(nums1);
console.log(nums2);
console.log(all);

const nums3 = [1, 2];
nums3.push(3);
console.log(nums3);

const nums4 = [1, 2, 3];
const newNums = nums4.reverse();
console.log(nums4);
console.log(newNums);

const original = [1, 2, 3];
const copy = [...original];
copy.reverse();
console.log(original);
console.log(copy);

const reversed = [...original].reverse();
console.log(original);
console.log(reversed);

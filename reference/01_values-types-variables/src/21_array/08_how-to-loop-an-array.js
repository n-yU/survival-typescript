const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 'b') {
    break;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'a') {
    continue;
  }
  console.log(arr[i]);
}

for (const value of arr) {
  console.log(value);
}

arr.forEach((value, i) => {
  console.log(value, i);
});

const arr2 = arr.map((value) => value + value);
console.log(arr2);

arr.foo = 'bar';
for (const x in arr) {
  console.log(x, arr[x]);
}

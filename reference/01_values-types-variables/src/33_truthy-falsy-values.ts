if (false || 0 || -0 || NaN || 0n || '' || null || undefined) {
  console.log('???');
} else {
  console.log('they are falsy.');
}

const array = [null, 3, 0, null, 1, 2];
console.log(array.filter((n) => n));
console.log(array.filter((n) => n !== null));

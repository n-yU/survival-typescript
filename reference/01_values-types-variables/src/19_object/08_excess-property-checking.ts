let onlyX: { x: number };
onlyX = { x: 1 };
console.group(onlyX);
// onlyX = { x: 1, y: 2 };

const xy: { x: number; y: number } = { x: 1, y: 2 };
onlyX = xy;
console.log(xy);

const any1: any = null;
const any2: any = undefined;
const any3: any = true;
const any4: any = 0.8;
const any5: any = 'Comment allez-vous';
const any6: any = {
  x: 0,
  y: 1,
  name: 'origin',
};
console.log(any1, any2, any3, any4, any5, any6);

const unknown1: unknown = null;
const unknown2: unknown = undefined;
const unknown3: unknown = true;
const unknown4: unknown = 0.8;
const unknown5: unknown = 'Comment allez-vous';
const unknown6: unknown = {
  x: 0,
  y: 1,
  name: 'origin',
};
console.log(unknown1, unknown2, unknown3, unknown4, unknown5, unknown6);

console.log(any4.toFixed());
console.log(any5.length);
console.log(any6.name);

// console.log(unknown4.toFixed());
// console.log(unknown5.length);
// console.log(unknown6.name);

// console.log(any6.x.y.z);
// console.log(unknown6.x.y.z);

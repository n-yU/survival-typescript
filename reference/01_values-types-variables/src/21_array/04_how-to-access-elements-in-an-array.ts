const abc = ['a', 'b', 'c'];
console.log(abc[0]);
console.log(abc[100]);

const character: string = abc[0];
console.log(typeof character);

const character_1: string | undefined = abc[100];
if (typeof character_1 === 'string') {
  console.log(character_1.toUpperCase());
} else {
  console.log(character_1);
}
